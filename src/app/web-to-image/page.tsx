"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Image as ImageIcon, Zap, Maximize, ChevronDown, Check, Download, 
  ArrowRight, Monitor, Bug, Archive, FileText, Code, Link2 
} from 'lucide-react';
import OtherTools from '@/components/OtherTools';

const MotionDiv = dynamic(() => import('motion/react').then(mod => mod.motion.div), { ssr: false });

const faqs = [
  {
    question: 'What is the difference between PNG and JPG output?',
    answer: 'PNG is lossless and best for screenshots with text. JPG has smaller file size, better for photos.'
  },
  {
    question: 'Can I screenshot a full page or just the visible area?',
    answer: 'Both options are available. Full Page captures everything, even below the scroll line.'
  },
  {
    question: 'What resolution are the screenshots?',
    answer: 'Default is 1920px wide (Full HD). You can also choose 1280px, 1024px, or 375px mobile.'
  },
  {
    question: 'Does it capture popups and cookie banners?',
    answer: 'ConvertSnap captures the page as-is. Cookie banners may appear if the site shows them.'
  },
  {
    question: 'Is there a file size limit for downloads?',
    answer: 'No limit. Large full-page screenshots are supported regardless of file size.'
  }
];

const useCases = [
  {
    icon: Monitor,
    title: 'Design Mockups',
    description: 'Capture competitor sites or inspiration for your design mood board.'
  },
  {
    icon: Bug,
    title: 'Bug Reporting',
    description: 'Screenshot exact page states for developer bug reports.'
  },
  {
    icon: Archive,
    title: 'Content Archive',
    description: 'Save web content as images for offline reference or sharing.'
  }
];

const pills = [
  'For Designers', 'For Developers', 'Presentations', 'Portfolio', 'Bug Reports', 'Social Media'
];

export default function WebToImage() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('PNG');
  const [resolution, setResolution] = useState('1920px');
  const [capture, setCapture] = useState('Full Page');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

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
      const isFullPage = capture === 'Full Page';
      const type = format.toLowerCase(); // 'png' or 'jpg'
      
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'web-to-image',
          url: formattedUrl,
          options: {
            format: type,
            width: resolution.replace('px', ''),
            full_page: isFullPage,
            scale: 1,
          }
        })
      });
      
      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(err.error || 'Failed to capture screenshot');
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setGeneratedImageUrl(blobUrl);
      setStatus('success');

    } catch (err) {
      console.error('Error generating web image:', err);
      setErrorMessage(err instanceof Error ? err.message : 'Could not generate image.');
      setStatus('error');
    }
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

  const downloadImage = () => {
    if (!generatedImageUrl) return;
    const link = document.createElement('a');
    link.href = generatedImageUrl;
    link.download = `${getDomainName(url)}.${format.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      
      
      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-[#ECFEFF] to-[#E0F2FE] pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MotionDiv initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#06B6D4] text-white text-sm font-medium mb-6 shadow-sm">
                Full Page Screenshot
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-4 tracking-tight">
                Web to Image Converter
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Enter any website URL and download a full-page screenshot as PNG or JPG — free and instant.
              </p>

              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-text-secondary">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-accent" />
                  3M+ screenshots taken
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Ready in ~2 seconds
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-accent" />
                  Full page capture
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* TOOL WIDGET */}
        <section className="relative -mt-10 px-4 mb-20 z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="max-w-[680px] mx-auto bg-white rounded-3xl border border-border p-6 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            {(status === 'idle' || status === 'loading') ? (
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
                    className="w-full px-[18px] py-[14px] rounded-xl border-[1.5px] border-border bg-white text-text-primary placeholder:text-text-muted font-mono text-[15px] focus:outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/10 transition-all"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {/* STEP 2 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="format" className="block text-[13px] font-semibold text-text-secondary mb-1.5">
                      Image Format
                    </label>
                    <div className="relative">
                      <select
                        id="format"
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                      >
                        <option value="PNG">PNG</option>
                        <option value="JPG">JPG</option>
                        <option value="WebP">WebP</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label htmlFor="resolution" className="block text-[13px] font-semibold text-text-secondary mb-1.5">
                      Resolution
                    </label>
                    <div className="relative">
                      <select
                        id="resolution"
                        value={resolution}
                        onChange={(e) => setResolution(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                      >
                        <option value="1920px">Full HD 1920px</option>
                        <option value="1280px">1280px</option>
                        <option value="1024px">1024px</option>
                        <option value="375px">Mobile 375px</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label htmlFor="capture" className="block text-[13px] font-semibold text-text-secondary mb-1.5">
                      Capture Type
                    </label>
                    <div className="relative">
                      <select
                        id="capture"
                        value={capture}
                        onChange={(e) => setCapture(e.target.value)}
                        disabled={status === 'loading'}
                        className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                      >
                        <option value="Full Page">Full Page</option>
                        <option value="Visible Area Only">Visible Area Only</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading' || !url}
                    className="w-full relative flex items-center justify-center gap-2 h-[52px] rounded-xl bg-[#06B6D4] text-white font-bold text-base hover:bg-[#0891b2] hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Rendering the page...
                      </>
                    ) : (
                      <>
                        Take Screenshot <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : status === 'error' ? (
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-4 text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                  <span className="text-2xl font-bold">!</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Capture failed</h3>
                <p className="text-red-500 mb-6 max-w-sm">{errorMessage}</p>

                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 rounded-xl bg-[#06B6D4] text-white font-bold hover:bg-[#0891b2] transition-colors"
                >
                  Try Again
                </button>
              </MotionDiv>
            ) : (
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
              >
                <div className="w-full bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6 text-teal-800 flex items-center justify-center gap-2 font-bold">
                  <Check className="w-5 h-5" />
                  Image Ready!
                </div>
                
                {/* PREVIEW IMAGE */}
                <div className="relative w-full rounded-xl overflow-hidden shadow-sm bg-slate-50 mb-6 border border-slate-200">
                    {generatedImageUrl ? (
                      <div className="w-full relative min-h-[300px] flex items-start justify-center">
                        <Image src={generatedImageUrl} alt="Website Screenshot" fill className="object-contain" unoptimized />
                      </div>
                    ) : (
                      <div className="w-full h-[268px] bg-gradient-to-b from-slate-50 to-slate-200 p-4 flex flex-col gap-3">
                        <div className="w-3/4 h-6 bg-slate-300 rounded"></div>
                        <div className="w-full h-24 bg-white rounded border border-slate-200 shadow-sm"></div>
                      </div>
                    )}
                </div>

                <div className="text-sm text-text-secondary mb-6 font-medium break-all max-w-[80%] text-center">
                  Source: {url}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button 
                    onClick={() => {
                      downloadImage();
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white font-bold hover:bg-[#0891b2] transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download {format}
                  </button>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white border-2 border-accent text-accent font-bold hover:bg-slate-50 transition-colors"
                  >
                    Capture Another
                  </button>
                </div>
                
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-text-secondary hover:text-accent font-medium underline"
                >
                  Take another screenshot
                </button>
              </MotionDiv>
            )}
          </MotionDiv>
        </section>

        {/* USE CASES */}
        <section className="py-20 bg-bg-main border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-8">Perfect For...</h2>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {pills.map((pill, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-white border border-border text-text-secondary text-sm font-medium shadow-sm">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((uc, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-border hover:shadow-lg hover:border-accent/30 transition-all text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                    <uc.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{uc.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">Web to Image — FAQs</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-bg-main border border-border rounded-xl overflow-hidden hover:border-accent/20 transition-colors">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-slate-50 transition-colors hover:bg-slate-50"
                  >
                    <span className="text-lg font-semibold text-text-primary pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-transparent">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER TOOLS */}
        <OtherTools currentToolId="web-to-image" className="py-20 bg-bg-main border-t border-border" />
      </main>
    </>
  );
}
