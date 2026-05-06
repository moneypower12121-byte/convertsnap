import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Max execution time for Vercel
export const maxDuration = 60

// Initialize Rate Limiter if Redis connection is set up
let ratelimit: Ratelimit | null = null
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, '1 m'), // 10 conversions per IP per minute
    analytics: true,
  })
}

export async function POST(request: NextRequest) {
  let browser = null;
  try {
    // Rate Limiting Check
    if (ratelimit) {
      const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1'
      const { success } = await ratelimit.limit(ip)
      if (!success) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Maximum 10 conversions per minute.' },
          { status: 429 }
        )
      }
    }

    const body = await request.json()
    const { type, url, html, options = {} } = body

    // Validate input
    if (!type) {
      return NextResponse.json({ error: 'type is required' }, { status: 400 })
    }
    if ((type === 'web-to-pdf' || type === 'web-to-image') && !url) {
      return NextResponse.json({ error: 'url is required for web conversion' }, { status: 400 })
    }
    if ((type === 'html-to-pdf' || type === 'html-to-image') && !html) {
      return NextResponse.json({ error: 'html is required for html conversion' }, { status: 400 })
    }

    // Launch Puppeteer with serverless-compatible Chromium
    browser = await puppeteer.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    })

    const page = await browser.newPage()

    // Set viewport
    const width = parseInt(options.width) || 1280
    await page.setViewport({ 
      width, 
      height: 900, 
      deviceScaleFactor: options.scale || 1 
    })

    // Load content
    if (url) {
      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: 30000,
      })
    } else if (html) {
      await page.setContent(html, {
        waitUntil: 'networkidle0',
        timeout: 20000,
      })
    }

    // Emulate screen media to prevent print-specific layout changes
    await page.emulateMediaType('screen')

    // Auto-scroll to trigger lazy loading if it's a URL
    if (url) {
      await autoScroll(page)
      // Scroll back to top for clean header capture
      await page.evaluate(() => window.scrollTo(0, 0));
      // Hide common popups/banners
      await page.evaluate(() => {
        const selectors = [
          '[id*="cookie"]', '[class*="cookie"]', '[id*="consent"]', '[class*="consent"]',
          '[id*="banner"]', '[class*="banner"]', '[id*="modal"]', '[class*="modal"]',
          '[class*="overlay"]', '.modal-backdrop', '.ad-unit'
        ];
        selectors.forEach(selector => {
          try {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
              if (el instanceof HTMLElement) el.style.display = 'none';
            });
          } catch (e) {}
        });
      });
    }

    let output: Buffer
    let contentType: string
    let filename: string

    if (type === 'web-to-pdf' || type === 'html-to-pdf') {
      // Generate PDF
      const pdfOptions: any = {
        printBackground: true,
        margin: options.full_page ? { top: '0', right: '0', bottom: '0', left: '0' } : getMargin(options.margin),
        landscape: options.orientation === 'landscape',
      }

      if ((type === 'web-to-pdf' || type === 'html-to-pdf') && options.full_page) {
        // For seamless single-page capture
        const height = await page.evaluate(() => {
          return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
          );
        });
        
        pdfOptions.width = width + 'px';
        pdfOptions.height = Math.ceil(height) + 'px';
      } else {
        const pdfSizes: Record<string, import('puppeteer-core').PaperFormat> = {
          'A4': 'a4', 'Letter': 'letter', 'A3': 'a3', 'Legal': 'legal'
        }
        pdfOptions.format = pdfSizes[options.size] || 'a4';
      }

      const pdfBuffer = await page.pdf(pdfOptions)
      output = Buffer.from(pdfBuffer)
      contentType = 'application/pdf'
      filename = 'convertsnap-output.pdf'

    } else if (type === 'web-to-image' || type === 'html-to-image') {
      // Generate Image
      const imgFormat = (options.format || 'png').toLowerCase() as 'png' | 'jpeg' | 'webp';
      
      if (type === 'web-to-image' && options.full_page !== false) {
        // More reliable full page capture for images
        const height = await page.evaluate(() => {
          return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
          );
        });
        
        await page.setViewport({
          width,
          height: Math.ceil(height),
          deviceScaleFactor: options.scale || 1
        });
      }

      const screenshotOptions: any = {
        type: imgFormat === 'jpg' ? 'jpeg' : imgFormat,
        fullPage: type === 'web-to-image' && options.full_page !== false ? false : (options.full_page !== false),
      };

      const screenshotBuffer = await page.screenshot(screenshotOptions)
      output = Buffer.from(screenshotBuffer as Buffer)
      contentType = imgFormat === 'jpg' ? 'image/jpeg' : `image/${imgFormat}`
      filename = `convertsnap-output.${imgFormat === 'jpg' ? 'jpg' : imgFormat}`
    } else {
      throw new Error('Invalid conversion type')
    }

    await browser.close()
    browser = null;

    // Return file as download
    return new NextResponse(output, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'attachment; filename="' + filename + '"',
        'Content-Length': output.length.toString(),
        'Cache-Control': 'no-store',
      },
    })

  } catch (error: any) {
    console.error('Conversion error:', error)
    if (browser) await browser.close()
    
    return NextResponse.json(
      { error: `Conversion failed: ${error.message || 'Unknown error'}` }, 
      { status: 500 }
    )
  }
}

// Helper: Auto-scroll to trigger lazy loading and wait for images
async function autoScroll(page: import('puppeteer-core').Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  // Extra wait for any images triggered by scroll
  await page.evaluate(async () => {
    const selectors = Array.from(document.querySelectorAll('img'));
    await Promise.all(selectors.map(img => {
      if (img.complete) return;
      return new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = resolve; // Continue anyway if one fails
      });
    }));
  });

  // Small pause for layout settling
  await new Promise(resolve => setTimeout(resolve, 1000));
}

// Helper: margin options
function getMargin(margin: string) {
  const margins: Record<string, object> = {
    'normal': { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
    'narrow': { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    'wide':   { top: '30mm', right: '30mm', bottom: '30mm', left: '30mm' },
    'none':   { top: '0', right: '0', bottom: '0', left: '0' },
  }
  return margins[margin] || margins['normal']
}
