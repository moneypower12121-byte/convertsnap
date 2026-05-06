import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  FileText, Zap, Lock, ChevronDown, Check, Download, 
  ArrowRight, ScanLine, Code2, DropletOff, SlidersHorizontal,
  FileImage, Code, Maximize
} from 'lucide-react';
import OtherTools from '../components/OtherTools';
import { jsPDF } from 'jspdf';

const faqs = [
  {
    question: 'Can I convert any website to PDF for free?',
    answer: 'Yes, completely free. Paste the URL and download — no limits, no fees.'
  },
  {
    question: 'Does it support websites with JavaScript?',
    answer: 'Yes! ConvertSnap fully renders JavaScript before converting, including SPAs and dynamic content.'
  },
  {
    question: 'Will the PDF look exactly like the website?',
    answer: 'We capture the entire height of the webpage continuously exactly like a screenshot, preventing cut-off text or repeating sticky headers.'
  },
  {
    question: 'How long is my PDF stored on the server?',
    answer: 'Files are processed instantly and never stored on our servers for longer than the conversion requires.'
  },
  {
    question: 'What is the maximum page size supported?',
    answer: 'We support full page captures. Very long pages are captured continuously in one single seamless PDF page.'
  }
];

const features = [
  {
    icon: ScanLine,
    title: 'Seamless Capture',
    description: 'Captures the entire webpage in one continuous PDF page without awkward page breaks.'
  },
  {
    icon: Code2,
    title: 'JavaScript Support',
    description: 'Works on modern React, Vue, and Angular websites.'
  },
  {
    icon: DropletOff,
    title: 'No Watermark',
    description: 'Clean PDF output with zero watermarks, ever.'
  },
  {
    icon: Maximize,
    title: 'No Repeating Headers',
    description: 'Sticky navigations only appear at the top, just like viewing on a real device.'
  }
];

export default function WebToPdf() {
  const [url, setUrl] = useState('');
  const [resolution, setResolution] = useState('1920px');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedPdfBlobUrl, setGeneratedPdfBlobUrl] = useState<string | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string>('document.pdf');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Web to PDF Converter",
    "url": "https://www.convertsnap.net/web-to-pdf",
    "description": "Free online tool to convert any website URL to PDF format as a full seamless page.",
    "applicationCategory": "UtilityApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const getDomainName = (urlString: string) => {
    try {
      const urlObj = new URL(urlString.startsWith('http') ? urlString : `https://${urlString}`);
      const hostname = urlObj.hostname.replace(/^www\./i, '');
      return hostname.split('.')[0] || 'document';
    } catch (e) {
      return 'document';
    }
  };

  const handleConvert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    // Auto-fix URL if missing protocol
    let formattedUrl = url;
    if (!/^https?:\/\//i.test(url)) {
      formattedUrl = 'https://' + url;
      setUrl(formattedUrl);
    }
    
    setStatus('loading');
    setErrorMessage('');
    
    try {
      // Step 1: Request a full page JPG from ConvertAPI (StoreFile=false to get base64)
      const viewportWidth = parseInt(resolution);
      const apiUrl = `https://v2.convertapi.com/convert/web/to/jpg`;
      
      const formData = new FormData();
      formData.append('Url', formattedUrl);
      formData.append('StoreFile', 'false');
      formData.append('ViewportWidth', viewportWidth.toString());
      formData.append('ConversionDelay', '7'); // Wait up to 7s for dynamic content to load
      formData.append('ImageQuality', '100'); // Maximum JPEG quality
      formData.append('CssMediaType', 'screen'); // Ensure screen styles are used instead of print
      formData.append('Css', 'header, nav, .header, .navbar, .fixed, .sticky, [class*="header"], [class*="nav"], [class*="fixed"], [class*="sticky"], [style*="position: fixed"], [style*="position: sticky"], [style*="position:fixed"], [style*="position:sticky"] { position: absolute !important; }');

      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 5bj9JqyCROe4lZGWX7nPcOTstw5TmCnR'
        },
        body: formData
      });
      
      const data = await response.json();
      
      if (response.ok && data.Files && data.Files.length > 0) {
        const fileData = data.Files[0].FileData;
        const b64Data = `data:image/jpeg;base64,${fileData}`;
        
        // Step 2: Load the image to get its precise width and height
        const img = new Image();
        img.onload = () => {
          const w = img.width;
          const h = img.height;
          
          // Step 3: Create a single long PDF page via jsPDF
          try {
            // format takes [width, height]
            const pdf = new jsPDF({
              orientation: w > h ? 'landscape' : 'portrait',
              unit: 'px',
              format: [w, h],
              compress: true
            });
            
            pdf.addImage(b64Data, 'JPEG', 0, 0, w, h);
            const pdfBlob = pdf.output('blob');
            const octetBlob = new Blob([pdfBlob], { type: 'application/octet-stream' });
            const blobUrl = URL.createObjectURL(octetBlob);
            
            setGeneratedPdfBlobUrl(blobUrl);
            setPdfFileName(`${getDomainName(url)}.pdf`);
            setStatus('success');
          } catch (pdfErr) {
            console.error('Error creating PDF:', pdfErr);
            setErrorMessage('Could not process the captured page into a PDF. The page might be too large.');
            setStatus('error');
          }
        };
        
        img.onerror = () => {
          setErrorMessage('Failed to decode the captured website image.');
          setStatus('error');
        };
        
        img.src = b64Data;

      } else {
        throw new Error(data.Message || data.error || 'Failed to capture the website');
      }
    } catch (err) {
      console.error('Error generating PDF:', err);
      setErrorMessage('Could not load the website. Ensure the URL is valid and accessible.');
      setStatus('error');
    }
  };

  const downloadPdf = () => {
    if (!generatedPdfBlobUrl) return;
    const link = document.createElement('a');
    link.href = generatedPdfBlobUrl;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>Web to PDF Converter — Free Online | ConvertSnap</title>
        <meta name="description" content="Convert any website URL to a seamless single-page PDF for free. Paste a link and download a perfect PDF in seconds. No signup, no limit." />
        <meta name="keywords" content="web to pdf, url to pdf, website to pdf, convert webpage to pdf free, web page pdf download, online pdf converter" />
        <link rel="canonical" href="https://www.convertsnap.net/web-to-pdf" />
        
        <meta property="og:title" content="Web to PDF Converter — Free & Instant | ConvertSnap" />
        <meta property="og:description" content="Paste any website URL and download it as a seamless single-page PDF instantly. Free, no account needed." />
        <meta property="og:url" content="https://www.convertsnap.net/web-to-pdf" />
        <meta property="og:image" content="https://www.convertsnap.net/og-web-to-pdf.png" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-tool-blue to-blue-100 pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-6">
                <span className="text-base">⭐</span> 100% Seamless Render
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-4 tracking-tight">
                Web to PDF Converter
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Paste any website URL below and download it as a perfect seamless PDF file — no repeated sticky headers or awkward page cuts.
              </p>

              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-text-secondary">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  10M+ PDFs converted
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Converts in ~3 seconds
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Files deleted after 1 hour
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TOOL WIDGET */}
        <section className="relative -mt-10 px-4 mb-20 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="max-w-[680px] mx-auto bg-white rounded-3xl border border-border p-6 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <form onSubmit={handleConvert} className="flex flex-col gap-6">
              {/* STEP 1 */}
              <div>
                <label htmlFor="url" className="block text-sm font-semibold text-text-primary mb-2">
                  Enter Website URL
                </label>
                <input
                  id="url"
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-[18px] py-[14px] rounded-xl border-[1.5px] border-border bg-white text-text-primary placeholder:text-text-muted font-mono text-[15px] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all"
                  required
                  disabled={status !== 'idle'}
                />
              </div>

              {/* STEP 2 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="resolution" className="block text-[13px] font-semibold text-text-secondary mb-1.5">
                    Capture Resolution
                  </label>
                  <div className="relative">
                    <select
                      id="resolution"
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                      disabled={status !== 'idle'}
                      className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                      <option value="1920px">Desktop (1920px)</option>
                      <option value="1280px">Laptop (1280px)</option>
                      <option value="1024px">Tablet (1024px)</option>
                      <option value="375px">Mobile (375px)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="mt-2">
                {status === 'error' && (
                  <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm text-center">
                    <p className="font-bold mb-1">Conversion Failed</p>
                    <p>{errorMessage}</p>
                    <button type="button" onClick={() => setStatus('idle')} className="mt-2 text-red-700 underline font-medium">Try again</button>
                  </div>
                )}
                
                <button
                  type={status === 'success' || status === 'error' ? 'button' : 'submit'}
                  onClick={status === 'success' ? downloadPdf : undefined}
                  disabled={status === 'loading' || !url}
                  className={`w-full relative flex items-center justify-center gap-2 h-[52px] rounded-xl text-white font-bold text-base transition-all duration-300 ${
                    status === 'success' ? 'bg-success hover:bg-emerald-600 cursor-pointer' : 'bg-primary hover:bg-primary-dark hover:scale-[1.01]'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Converting your page...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <Download className="w-5 h-5" />
                      Download PDF Now
                    </>
                  ) : (
                    <>
                      Convert to PDF <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                {status === 'success' && (
                  <div className="text-center mt-4">
                    <button type="button" onClick={() => setStatus('idle')} className="text-sm text-primary font-medium underline">
                      Convert another URL
                    </button>
                  </div>
                )}

                <div className="text-center mt-3">
                  <span className="inline-flex items-center text-xs text-text-muted font-medium">
                    <Lock className="w-3.5 h-3.5 mr-1" />
                    Guaranteed seamless rendering without page cuts
                  </span>
                </div>
              </div>

            </form>
          </motion.div>
        </section>

        {/* HOW TO USE */}
        <section className="py-16 bg-bg-main border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">How to Convert Web to PDF</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xl mb-6 shadow-sm">1</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Paste your website URL</h3>
                <p className="text-text-secondary">Into the input box above.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xl mb-6 shadow-sm">2</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Choose resolution</h3>
                <p className="text-text-secondary">Select Desktop, Tablet or Mobile.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-xl mb-6 shadow-sm">3</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Convert and download</h3>
                <p className="text-text-secondary">Get your single-page seamless PDF.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">Why Use ConvertSnap Web to PDF?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-bg-main border border-border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary border border-border flex-shrink-0 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-bg-main border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">Web to PDF — FAQs</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-slate-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-text-primary pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-transparent">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER TOOLS */}
        <OtherTools currentToolId="web-to-pdf" className="py-20 bg-white" />
      </main>
    </>
  );
}
