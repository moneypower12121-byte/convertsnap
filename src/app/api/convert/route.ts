import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Max execution time for Vercel
export const maxDuration = 30

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

    let output: Buffer
    let contentType: string
    let filename: string

    if (type === 'web-to-pdf' || type === 'html-to-pdf') {
      // Generate PDF
      const pdfSizes: Record<string, import('puppeteer-core').PaperFormat> = {
        'A4': 'a4', 'Letter': 'letter', 'A3': 'a3', 'Legal': 'legal'
      }
      const pdfBuffer = await page.pdf({
        format: pdfSizes[options.size] || 'a4',
        landscape: options.orientation === 'landscape',
        printBackground: true,
        margin: getMargin(options.margin),
      })
      output = Buffer.from(pdfBuffer)
      contentType = 'application/pdf'
      filename = 'convertsnap-output.pdf'

    } else if (type === 'web-to-image' || type === 'html-to-image') {
      // Generate Image
      const imgFormat = options.format === 'jpg' ? 'jpeg' : 'png'
      const screenshotOptions: any = {
        type: imgFormat,
        fullPage: options.full_page !== false,
      };
      
      if (imgFormat === 'jpeg') {
        screenshotOptions.quality = 90;
      }

      const screenshotBuffer = await page.screenshot(screenshotOptions)
      output = Buffer.from(screenshotBuffer as Buffer)
      contentType = imgFormat === 'jpeg' ? 'image/jpeg' : 'image/png'
      filename = imgFormat === 'jpeg' ? 'convertsnap-output.jpg' : 'convertsnap-output.png'
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
