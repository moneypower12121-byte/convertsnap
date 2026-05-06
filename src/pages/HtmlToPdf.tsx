import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Code, CheckCircle2, Layers, ChevronDown, Check, Download, 
  ArrowRight, FileImage, Link2, Code2, Play, FileText, Briefcase, 
  LayoutTemplate, Mail
} from 'lucide-react';
import OtherTools from '../components/OtherTools';

const defaultHtml = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; padding: 40px; }
      h1 { color: #2563EB; }
    </style>
  </head>
  <body>
    <h1>Hello ConvertSnap!</h1>
    <p>This HTML will be converted to PDF.</p>
  </body>
</html>`;

const invoiceHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 40px; color: #333; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 20px; }
    h1 { margin: 0; color: #7C3AED; }
    .details { display: flex; justify-content: space-between; margin-bottom: 40px; }
    table { w-full; width: 100%; border-collapse: collapse; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #eee; }
    th { background: #f9f9f9; }
    .total { text-align: right; margin-top: 20px; font-size: 20px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <h1>INVOICE</h1>
    <p>#INV-2025-001<br>Date: Oct 25, 2025</p>
  </div>
  <div class="details">
    <div>
      <strong>Billed To:</strong><br>
      ACME Corp<br>
      123 Business Rd.<br>
      Tech City, TC 10101
    </div>
    <div>
      <strong>From:</strong><br>
      Your Company Name<br>
      456 Creator Blvd.<br>
      Design Town, DT 20202
    </div>
  </div>
  <table>
    <tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>
    <tr><td>Web Design Services</td><td>1</td><td>$1,500.00</td><td>$1,500.00</td></tr>
    <tr><td>Frontend Development</td><td>40</td><td>$50.00</td><td>$2,000.00</td></tr>
  </table>
  <div class="total">Total: $3,500.00</div>
</body>
</html>`;

const resumeHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; line-height: 1.6; color: #333; }
    h1 { margin: 0 0 10px; font-size: 36px; border-bottom: 2px solid #7C3AED; padding-bottom: 10px; display: inline-block; }
    .contact-info { margin-bottom: 30px; color: #666; font-size: 14px; }
    h2 { color: #7C3AED; font-size: 20px; margin-top: 30px; margin-bottom: 15px; }
    .job-title { font-weight: bold; font-size: 16px; margin: 0; }
    .company { font-style: italic; color: #555; margin-bottom: 10px; }
    ul { margin-top: 0; padding-left: 20px; }
  </style>
</head>
<body>
  <h1>Jane Doe</h1>
  <div class="contact-info">
    jane.doe@example.com | (555) 123-4567 | San Francisco, CA | linkedin.com/in/janedoe
  </div>
  <h2>Professional Experience</h2>
  <div>
    <p class="job-title">Senior Frontend Engineer</p>
    <p class="company">Tech Solutions Inc. | 2021 - Present</p>
    <ul>
      <li>Led a team of 5 developers to rebuild the core SaaS platform.</li>
      <li>Improved application performance by 40% through code splitting and lazy loading.</li>
    </ul>
  </div>
  <h2>Education</h2>
  <div>
    <p class="job-title">BS in Computer Science</p>
    <p class="company">University of California | 2017 - 2021</p>
  </div>
</body>
</html>`;

const reportHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Georgia, serif; padding: 50px; line-height: 1.8; color: #222; }
    .cover { text-align: center; margin-bottom: 60px; padding-bottom: 40px; border-bottom: 1px solid #ccc; }
    h1 { font-size: 32px; color: #111; margin-bottom: 10px; }
    .subtitle { font-size: 18px; color: #666; }
    h2 { font-size: 24px; border-bottom: 1px solid #eee; padding-bottom: 8px; margin-top: 40px; }
    p { margin-bottom: 20px; text-align: justify; }
  </style>
</head>
<body>
  <div class="cover">
    <h1>Q3 Market Analysis</h1>
    <p class="subtitle">Prepared by the Strategy Team | October 2025</p>
  </div>
  <h2>Executive Summary</h2>
  <p>This report outlines the key market trends observed in the third quarter. Despite economic headwinds, the sector saw a resilient 5% growth overall, driven largely by digital transformation initiatives.</p>
  <h2>Key Findings</h2>
  <p>1. Consumer sentiment has slightly improved. <br>2. Supply chain disruptions are normalizing. <br>3. Tech adoption in traditional sectors is accelerating.</p>
</body>
</html>`;

const letterHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Times New Roman', Times, serif; padding: 60px; line-height: 1.5; color: #000; }
    .sender { text-align: right; margin-bottom: 40px; }
    .recipient { margin-bottom: 40px; }
    .date { margin-bottom: 40px; }
    .body { margin-bottom: 60px; text-align: justify; }
    .signature { margin-top: 40px; }
  </style>
</head>
<body>
  <div class="sender">
    John Smith<br>
    789 Corporate Way<br>
    Business City, BC 30303
  </div>
  <div class="date">October 25, 2025</div>
  <div class="recipient">
    Alice Johnson<br>
    Director of Operations<br>
    Global Enterprises
  </div>
  <p>Dear Ms. Johnson,</p>
  <div class="body">
    <p>I am writing to formally accept the offer for the position of Project Manager at Global Enterprises. I am thrilled to join the team and contribute to the upcoming initiatives we discussed.</p>
    <p>As requested, I will be forwarding all necessary onboarding documentation by the end of this week. Please let me know if there are any additional materials you require before my start date.</p>
    <p>Thank you once again for this opportunity.</p>
  </div>
  <div class="signature">
    Sincerely,<br><br><br>
    John Smith
  </div>
</body>
</html>`;


const faqs = [
  {
    question: 'Does it support Bootstrap or Tailwind CSS?',
    answer: 'Yes! Enable "Include External CSS" and paste the CDN link. Both Bootstrap and Tailwind work perfectly.'
  },
  {
    question: 'Can I use Google Fonts in my HTML?',
    answer: 'Yes, include the Google Fonts <link> tag inside your <head> and they will render in the PDF.'
  },
  {
    question: 'Are images supported in HTML code?',
    answer: 'Images via URL src and base64 encoded images are both supported.'
  },
  {
    question: 'What page size should I use for standard documents?',
    answer: 'A4 is standard in most countries. Use Letter for US-style documents.'
  },
  {
    question: 'Can I convert an invoice or receipt template to PDF?',
    answer: 'Absolutely — that is one of the most popular use cases. Use our Invoice Template to get started.'
  }
];

const templates = [
  { id: 'invoice', name: 'Invoice Template', desc: 'Professional invoice with line items and totals', icon: FileText, html: invoiceHtml },
  { id: 'resume', name: 'Resume / CV', desc: 'Clean single-page resume layout', icon: Briefcase, html: resumeHtml },
  { id: 'report', name: 'Report Template', desc: 'Business report with header and sections', icon: LayoutTemplate, html: reportHtml },
  { id: 'letter', name: 'Letter Template', desc: 'Formal letter with date and signature block', icon: Mail, html: letterHtml }
];

const technologies = [
  'HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Google Fonts', 'Bootstrap CDN', 'Tailwind CDN', 'Custom Fonts', 'SVG', 'Tables', 'Images (base64)'
];

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function HtmlToPdf() {
  const [htmlCode, setHtmlCode] = useState(defaultHtml);
  const [useExternalCss, setUseExternalCss] = useState(false);
  const [externalCssUrl, setExternalCssUrl] = useState('');
  
  const [size, setSize] = useState('A4');
  const [margin, setMargin] = useState('Normal');
  const [orientation, setOrientation] = useState('Portrait');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedPdfBlob, setGeneratedPdfBlob] = useState<Blob | null>(null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const renderContainerRef = useRef<HTMLDivElement>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "HTML to PDF Converter",
    "url": "https://www.convertsnap.net/html-to-pdf",
    "description": "Convert HTML and CSS code to PDF online for free. Paste your code and download a perfectly rendered PDF instantly.",
    "applicationCategory": "UtilityApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const handleConvert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!htmlCode.trim() || !renderContainerRef.current) return;
    
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const container = renderContainerRef.current;
      
      // We wait a moment for the DOM to settle, images to start loading, etc.
      await new Promise(res => setTimeout(res, 300));

      const canvas = await html2canvas(container, {
        scale: 3, 
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      const pdfFormat = size.toLowerCase(); // 'a4', 'letter'
      const pdfOrientation = orientation.toLowerCase() as 'portrait' | 'landscape';
      
      const pdf = new jsPDF({
        orientation: pdfOrientation,
        unit: 'px',
        format: pdfFormat
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate margins
      let marginPx = 0;
      if (margin === 'Normal') marginPx = 40;
      if (margin === 'Narrow') marginPx = 20;
      
      const contentWidth = pdfWidth - (marginPx * 2);
      const imgProps = pdf.getImageProperties(imgData);
      const contentHeight = (imgProps.height * contentWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', marginPx, marginPx, contentWidth, contentHeight);

      const blob = pdf.output('blob');
      setGeneratedPdfBlob(blob);
      setStatus('success');
    } catch (err) {
      console.error('Error generating PDF:', err);
      setErrorMessage('Failed to generate PDF. Check if there are external resources blocking CORS, or invalid HTML.');
      setStatus('error');
    }
  };

  const downloadPdf = () => {
    if (!generatedPdfBlob) return;
    const octetBlob = new Blob([generatedPdfBlob], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(octetBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `document_${Date.now()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  // Handle Tab key in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const value = textarea.value;
        const newValue = value.substring(0, start) + '  ' + value.substring(end);
        setHtmlCode(newValue);
        
        // Put cursor right after the inserted spaces
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        }, 0);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>HTML to PDF Converter — Free Online Code to PDF | ConvertSnap</title>
        <meta name="description" content="Convert HTML and CSS code to PDF online for free. Paste your code and download a perfectly rendered PDF instantly. No signup. Perfect for developers." />
        <meta name="keywords" content="html to pdf, html code to pdf, convert html css to pdf, html pdf generator, html template to pdf, free html converter online" />
        <link rel="canonical" href="https://www.convertsnap.net/html-to-pdf" />
        
        <meta property="og:title" content="HTML to PDF Converter — Free Code to PDF | ConvertSnap" />
        <meta property="og:description" content="Paste HTML and CSS, get a perfect PDF. Free online tool for developers. No install needed." />
        <meta property="og:url" content="https://www.convertsnap.net/html-to-pdf" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#7C3AED] text-white text-sm font-medium mb-6 shadow-sm">
                For Developers & Designers
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-4 tracking-tight">
                HTML to PDF Converter
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Paste your HTML and CSS code below. We render it perfectly and give you a downloadable PDF file — free, instant, no account.
              </p>

              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-text-secondary">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-purple-600" />
                  Loved by developers
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  Full CSS3 support
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-600" />
                  CSS frameworks supported
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TOOL WIDGET */}
        <section className="relative -mt-10 px-4 mb-20 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="max-w-[800px] mx-auto bg-white rounded-3xl border border-border p-6 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            {status !== 'success' ? (
              <form onSubmit={handleConvert} className="flex flex-col gap-6">
                {/* STEP 1 */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label htmlFor="htmlCode" className="block text-sm font-semibold text-text-primary">
                      Paste Your HTML Code
                    </label>
                    <button 
                      type="button"
                      onClick={() => setHtmlCode(invoiceHtml)}
                      className="text-xs font-medium flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <Play className="w-3 h-3" /> Load Sample HTML
                    </button>
                  </div>
                  <textarea
                    id="htmlCode"
                    ref={textareaRef}
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Paste your HTML here..."
                    className="w-full px-4 py-4 rounded-xl border border-border bg-[#0F172A] text-[#E2E8F0] font-mono text-[13px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all resize-y min-h-[240px]"
                    required
                    disabled={status === 'loading'}
                    spellCheck="false"
                  />
                </div>

                <div className="flex flex-col gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <div className="relative inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={useExternalCss}
                        onChange={() => setUseExternalCss(!useExternalCss)}
                        disabled={status === 'loading'}
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">Include External CSS?</span>
                  </label>
                  
                  <AnimatePresence>
                    {useExternalCss && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <input
                          type="url"
                          value={externalCssUrl}
                          onChange={(e) => setExternalCssUrl(e.target.value)}
                          placeholder="e.g., https://cdn.tailwindcss.com"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-purple-600 mt-2"
                          disabled={status === 'loading'}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* STEP 2 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="size" className="block text-[13px] font-semibold text-text-secondary mb-1.5">
                      Page Size
                    </label>
                    <div className="relative">
                      <select
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-purple-600 transition-colors cursor-pointer"
                      >
                        <option value="A4">A4</option>
                        <option value="Letter">Letter</option>
                        <option value="A3">A3</option>
                        <option value="Legal">Legal</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label htmlFor="margin" className="block text-[13px] font-semibold text-text-secondary mb-1.5">
                      Margin
                    </label>
                    <div className="relative">
                      <select
                        id="margin"
                        value={margin}
                        onChange={(e) => setMargin(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-purple-600 transition-colors cursor-pointer"
                      >
                        <option value="Normal">Normal</option>
                        <option value="Narrow">Narrow</option>
                        <option value="Wide">Wide</option>
                        <option value="None">None</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label htmlFor="orientation" className="block text-[13px] font-semibold text-text-secondary mb-1.5">
                      Orientation
                    </label>
                    <div className="relative">
                      <select
                        id="orientation"
                        value={orientation}
                        onChange={(e) => setOrientation(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-purple-600 transition-colors cursor-pointer"
                      >
                        <option value="Portrait">Portrait</option>
                        <option value="Landscape">Landscape</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading' || !htmlCode.trim()}
                    className="w-full relative flex items-center justify-center gap-2 h-[52px] rounded-xl bg-[#7C3AED] text-white font-bold text-base hover:bg-[#6D28D9] hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Rendering your HTML...
                      </>
                    ) : (
                      <>
                        Generate PDF <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : status === 'error' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                  <span className="text-3xl font-bold">!</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Oops, something went wrong</h3>
                <p className="text-red-500 mb-8 max-w-sm">{errorMessage}</p>

                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-4 rounded-xl bg-[#7C3AED] text-white font-bold text-lg hover:bg-[#6D28D9] transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">PDF Generated!</h3>
                <p className="text-text-secondary mb-8">Your HTML has been perfectly rendered to PDF.</p>

                <button 
                  onClick={() => {
                    downloadPdf();
                  }}
                  className="px-8 py-4 rounded-xl bg-[#7C3AED] text-white font-bold text-lg hover:bg-[#6D28D9] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200 mb-6"
                >
                  <Download className="w-6 h-6" />
                  Download PDF Now
                </button>
                
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-sm text-text-secondary hover:text-purple-600 font-medium underline"
                >
                  Convert more HTML
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* OFFSCREEN RENDERING CONTAINER */}
          <div 
            style={{ 
              position: 'fixed',
              top: '-10000px',
              left: '-10000px',
              zIndex: -1000,
              width: size === 'A4' ? '794px' : size === 'Letter' ? '816px' : size === 'A3' ? '1122px' : '794px' 
            }}
          >
            {useExternalCss && externalCssUrl && (
              <link rel="stylesheet" href={externalCssUrl} />
            )}
            <div 
              ref={renderContainerRef}
              className="p-8 html-to-pdf-content bg-white text-black"
              style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '1123px' }}
              dangerouslySetInnerHTML={{ __html: htmlCode }}
            ></div>
          </div>
        </section>

        {/* TEMPLATES */}
        <section className="py-20 bg-bg-main border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Start With a Template</h2>
              <p className="text-text-secondary text-lg">Click any template to load it into the editor instantly.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => {
                    setHtmlCode(tpl.html);
                    window.scrollTo({ top: 300, behavior: 'smooth' }); // scroll near editor
                  }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border hover:border-purple-500 hover:shadow-md transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex flex-shrink-0 items-center justify-center text-purple-600 border border-purple-100">
                    <tpl.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">{tpl.name}</h3>
                    <p className="text-text-secondary text-sm">{tpl.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-8">What's Supported?</h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {technologies.map((tech, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-full bg-slate-50 border border-border text-slate-700 text-sm font-medium hover:bg-white hover:border-purple-300 transition-colors shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-bg-main border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">HTML to PDF — FAQs</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-border rounded-xl overflow-hidden hover:border-purple-500/20 transition-colors">
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
        <OtherTools currentToolId="html-to-pdf" className="py-20 bg-white border-t border-border" />
      </main>
    </>
  );
}
