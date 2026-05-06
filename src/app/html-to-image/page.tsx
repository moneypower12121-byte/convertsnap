"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { 
  Palette, Maximize, FileImage, Type, ChevronDown, Check, Download, 
  ArrowRight, Image as ImageIcon, Layout, Mail, Award, CheckCircle2,
  Globe, Share2, Play
} from 'lucide-react';
import OtherTools from '@/components/OtherTools';

const MotionDiv = dynamic(() => import('motion/react').then(mod => mod.motion.div), { ssr: false });

const defaultHtml = `<div style="width:1200px;height:630px;background:linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;">
  <div style="text-align:center;">
    <h1 style="color:white;font-size:72px;margin-bottom:20px;font-weight:bold;">Your OG Image Here</h1>
    <p style="color:#BFDBFE;font-size:32px;">Perfect for Social Previews</p>
  </div>
</div>`;

const templates = [
  { 
    id: 'og', 
    name: 'OG Image Template', 
    desc: 'Blue gradient card with title and logo area', 
    size: '1200x630',
    html: defaultHtml 
  },
  { 
    id: 'twitter', 
    name: 'Twitter Card', 
    desc: 'White card with profile and headline', 
    size: '1200x600',
    html: `<div style="width:1200px;height:600px;background:white;display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;box-sizing:border-box;">
  <div style="display:flex;align-items:center;margin-bottom:40px;">
    <div style="width:100px;height:100px;border-radius:50%;background:#E2E8F0;margin-right:24px;"></div>
    <div>
      <h2 style="font-size:36px;margin:0;color:#0F172A;">Your Name</h2>
      <p style="font-size:24px;margin:0;color:#64748B;">@yourhandle</p>
    </div>
  </div>
  <h1 style="font-size:64px;margin:0 0 30px;color:#0F172A;line-height:1.2;">How to Design Great Twitter Cards with HTML</h1>
  <p style="font-size:32px;color:#3B82F6;margin:0;">Read the full thread 🧵</p>
</div>` 
  },
  { 
    id: 'instagram', 
    name: 'Instagram Square', 
    desc: 'Bold quote card 1080x1080', 
    size: '1080x1080',
    html: `<div style="width:1080px;height:1080px;background:#0F172A;display:flex;align-items:center;justify-content:center;padding:120px;box-sizing:border-box;font-family:Georgia,serif;color:white;">
  <div style="text-align:center;">
    <p style="font-size:64px;line-height:1.4;margin:0 0 60px;font-style:italic;">"The best way to predict the future is to invent it."</p>
    <div style="width:80px;height:4px;background:#D97706;margin:0 auto 40px;"></div>
    <p style="font-size:32px;margin:0;color:#94A3B8;font-family:sans-serif;text-transform:uppercase;letter-spacing:4px;">Alan Kay</p>
  </div>
</div>` 
  },
  { 
    id: 'email', 
    name: 'Email Banner', 
    desc: 'Wide banner 600px with CTA button', 
    size: '600x200',
    html: `<div style="width:600px;height:200px;background:#FFFBEB;border:2px solid #FEF3C7;display:flex;align-items:center;padding:0 40px;box-sizing:border-box;font-family:Arial,sans-serif;">
  <div style="flex:1;">
    <h2 style="font-size:28px;margin:0 0 10px;color:#D97706;">Special Offer</h2>
    <p style="font-size:16px;margin:0;color:#78350F;">Get 50% off your next purchase.</p>
  </div>
  <div>
    <div style="background:#D97706;color:white;padding:12px 24px;border-radius:6px;font-weight:bold;font-size:16px;">Shop Now</div>
  </div>
</div>` 
  },
  { 
    id: 'certificate', 
    name: 'Certificate', 
    desc: 'Elegant bordered certificate layout', 
    size: '1200x800',
    html: `<div style="width:1200px;height:800px;background:white;padding:40px;box-sizing:border-box;font-family:Times New Roman,Times,serif;">
  <div style="width:100%;height:100%;border:4px solid #D97706;padding:20px;box-sizing:border-box;">
    <div style="width:100%;height:100%;border:1px solid #D97706;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
      <h1 style="font-size:64px;color:#D97706;margin:0 0 20px;">CERTIFICATE</h1>
      <h2 style="font-size:32px;color:#333;font-weight:normal;letter-spacing:10px;margin:0 0 60px;">OF COMPLETION</h2>
      <p style="font-size:24px;color:#666;margin:0 0 20px;">This is proudly presented to</p>
      <p style="font-size:48px;font-style:italic;color:#111;margin:0 0 60px;border-bottom:1px solid #ccc;padding:0 40px 10px;">Student Name</p>
      <p style="font-size:20px;color:#444;max-width:600px;margin:0 0 80px;">For successful completion of the Advanced HTML & CSS Masterclass.</p>
      <div style="display:flex;gap:100px;">
        <div style="border-top:1px solid #333;width:200px;padding-top:10px;font-size:18px;">Date</div>
        <div style="border-top:1px solid #333;width:200px;padding-top:10px;font-size:18px;">Instructor</div>
      </div>
    </div>
  </div>
</div>` 
  }
];

const faqs = [
  {
    question: 'What is the best use case for HTML to Image?',
    answer: 'Generating Open Graph (og:image) previews, social media cards, and email banner images are the top use cases.'
  },
  {
    question: 'Can I set a custom image size?',
    answer: 'Yes! Choose from presets like OG (1200x630), Instagram (1080x1080), or enter any custom width and height.'
  },
  {
    question: 'Does it support CSS animations?',
    answer: 'Images are static snapshots, so CSS animations are captured at their starting frame only.'
  },
  {
    question: 'What is 2x Retina output?',
    answer: '2x renders at double resolution for sharp display on high-DPI (Retina) screens.'
  },
  {
    question: 'Can I use this to generate thumbnails automatically?',
    answer: 'Yes — design your thumbnail template in HTML, then use our API to generate images programmatically.'
  }
];

const useCases = [
  {
    icon: Globe,
    title: 'Open Graph Images',
    description: 'Design beautiful og:image tags for link previews on Twitter, Facebook, LinkedIn.'
  },
  {
    icon: Mail,
    title: 'Email Headers',
    description: 'Create HTML email banner images that look perfect in every email client.'
  },
  {
    icon: Share2,
    title: 'Social Media Cards',
    description: 'Design Instagram posts, Twitter banners, YouTube thumbnails in HTML.'
  },
  {
    icon: Award,
    title: 'Certificates & Badges',
    description: 'Generate completion certificates or achievement badges as image files.'
  }
];

const PRESETS = [
  { label: 'OG Image 1200×630', value: '1200x630' },
  { label: 'Twitter Card 1200×600', value: '1200x600' },
  { label: 'Instagram Post 1080×1080', value: '1080x1080' },
  { label: 'LinkedIn Banner 1584×396', value: '1584x396' },
  { label: 'Custom', value: 'custom' },
];

export default function HtmlToImage() {
  const [htmlCode, setHtmlCode] = useState(defaultHtml);
  const [previewHtmlCode, setPreviewHtmlCode] = useState(defaultHtml);
  
  const updatePreview = useDebouncedCallback((code: string) => {
    setPreviewHtmlCode(code);
  }, 300);

  const handleHtmlCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
    setHtmlCode(code);
    updatePreview(code);
  };
  
  const [sizeMode, setSizeMode] = useState('1200x630');
  const [customWidth, setCustomWidth] = useState('1200');
  const [customHeight, setCustomHeight] = useState('630');
  
  const [format, setFormat] = useState('PNG');
  const [scale, setScale] = useState('1x');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const renderContainerRef = useRef<HTMLDivElement>(null);

  const currentWidth = sizeMode === 'custom' ? parseInt(customWidth) || 1200 : parseInt(sizeMode.split('x')[0]);
  const currentHeight = sizeMode === 'custom' ? parseInt(customHeight) || 630 : parseInt(sizeMode.split('x')[1]);

  const handleConvert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!htmlCode.trim()) return;
    
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const type = format.toLowerCase();
      
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'html-to-image',
          html: htmlCode,
          options: {
            format: type,
            width: currentWidth,
            scale: scale === '2x' ? 2 : 1,
            full_page: false
          }
        })
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(err.error || 'Failed to generate image');
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setGeneratedImageUrl(blobUrl);
      setStatus('success');
    } catch (err) {
      console.error('Error generating image:', err);
      setErrorMessage(err instanceof Error ? err.message : 'Failed to generate image. Ensure your HTML is valid and external resources allow CORS.');
      setStatus('error');
    }
  };

  const downloadImage = () => {
    if (!generatedImageUrl) return;
    const link = document.createElement('a');
    link.download = `converted-image-${Date.now()}.${format.toLowerCase()}`;
    link.href = generatedImageUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        updatePreview(newValue);
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        }, 0);
      }
    }
  };

  return (
    <>
      
      
      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MotionDiv initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#D97706] text-white text-sm font-medium mb-6 shadow-sm">
                Generate OG & Social Images
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-4 tracking-tight">
                HTML to Image Converter
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
                Paste HTML and CSS code and download it as a PNG or JPG image. Perfect for social media cards, email banners, and Open Graph images.
              </p>

              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-text-secondary">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-amber-600" />
                  Used by 500K+ designers
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5 text-amber-600" />
                  Custom canvas size
                </div>
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-amber-600" />
                  PNG & JPG output
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* TOOL WIDGET & LIVE PREVIEW */}
        <section className="relative -mt-10 px-4 mb-20 z-10">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="max-w-[1000px] mx-auto bg-white rounded-3xl border border-border pb-6 md:pb-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row border-b border-border">
              {/* Left Column - Input */}
              <div className="flex-1 p-6 md:p-9 border-b lg:border-b-0 lg:border-r border-border bg-white">
                {(status === 'idle' || status === 'loading') ? (
                  <form onSubmit={handleConvert} className="flex flex-col gap-6">
                    {/* STEP 1 */}
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <label htmlFor="htmlCode" className="block text-sm font-semibold text-text-primary">
                          Paste Your HTML Code
                        </label>
                      </div>
                      <textarea
                        id="htmlCode"
                        ref={textareaRef}
                        value={htmlCode}
                        onChange={handleHtmlCodeChange}
                        onKeyDown={handleKeyDown}
                        placeholder="<div style='background: blue;'>...</div>"
                        className="w-full px-4 py-4 rounded-xl border border-border bg-[#0F172A] text-[#E2E8F0] font-mono text-[13px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-y min-h-[240px]"
                        required
                        disabled={status === 'loading'}
                        spellCheck="false"
                      />
                    </div>

                    {/* STEP 2 */}
                    <div>
                      <label className="block text-[13px] font-semibold text-text-secondary mb-2">
                        Canvas / Image Size
                      </label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {PRESETS.map(preset => (
                          <button
                            key={preset.value}
                            type="button"
                            onClick={() => setSizeMode(preset.value)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                              sizeMode === preset.value 
                                ? 'bg-amber-100 text-amber-700 border-amber-300' 
                                : 'bg-white text-text-secondary border-border hover:bg-slate-50'
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                      
                      {sizeMode === 'custom' && (
                        <MotionDiv 
                          initial={{ opacity: 0, height: 0 }} 
                          animate={{ opacity: 1, height: 'auto' }}
                          className="flex gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200"
                        >
                          <div className="flex-1">
                            <label className="block text-xs font-medium text-text-secondary mb-1">Width (px)</label>
                            <input
                              type="number"
                              value={customWidth}
                              onChange={(e) => setCustomWidth(e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                            />
                          </div>
                          <div className="flex-1">
                            <label className="block text-xs font-medium text-text-secondary mb-1">Height (px)</label>
                            <input
                              type="number"
                              value={customHeight}
                              onChange={(e) => setCustomHeight(e.target.value)}
                              className="w-full px-3 py-2 rounded-lg border border-border focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                            />
                          </div>
                        </MotionDiv>
                      )}
                    </div>

                    {/* STEP 3 */}
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">Format</label>
                        <select
                          value={format}
                          onChange={(e) => setFormat(e.target.value)}
                          className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="PNG">PNG</option>
                          <option value="JPG">JPG</option>
                        </select>
                      </div>
                      <div className="flex-1">
                        <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">Scale</label>
                        <select
                          value={scale}
                          onChange={(e) => setScale(e.target.value)}
                          className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-slate-50 text-text-primary text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="1x">1x</option>
                          <option value="2x">2x Retina</option>
                        </select>
                      </div>
                    </div>

                    {/* STEP 4 */}
                    <div className="mt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading' || !htmlCode.trim()}
                        className="w-full relative flex items-center justify-center gap-2 h-[52px] rounded-xl bg-[#D97706] text-white font-bold text-base hover:bg-[#B45309] hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Rendering your design...
                          </>
                        ) : (
                          <>
                            Generate Image <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : status === 'error' ? (
                  <MotionDiv 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-8 h-full justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                      <span className="text-3xl font-bold">!</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Oops, something went wrong</h3>
                    <p className="text-red-500 mb-8 max-w-sm">{errorMessage}</p>

                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-8 py-4 rounded-xl bg-[#D97706] text-white font-bold text-lg hover:bg-[#B45309] transition-colors"
                    >
                      Try Again
                    </button>
                  </MotionDiv>
                ) : (
                  <MotionDiv 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-8 h-full justify-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                      <Check className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Image Ready!</h3>
                    <p className="text-text-secondary mb-6">Your HTML has been perfectly rendered.</p>
                    
                    {generatedImageUrl && (
                      <div className="mb-6 relative rounded-lg overflow-hidden border border-border shadow-sm w-full min-h-[200px]">
                        <Image src={generatedImageUrl} alt="Generated Preview" fill className="object-contain" unoptimized />
                      </div>
                    )}

                    <button 
                      onClick={() => {
                        downloadImage();
                      }}
                      className="px-8 py-4 rounded-xl bg-[#D97706] text-white font-bold text-lg hover:bg-[#B45309] transition-colors flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200 mb-6"
                    >
                      <Download className="w-6 h-6" />
                      Download {format} Now
                    </button>
                    
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-sm text-text-secondary hover:text-amber-600 font-medium underline"
                    >
                      Create another image
                    </button>
                  </MotionDiv>
                )}
              </div>

              {/* OFFSCREEN RENDERING CONTAINER */}
              <div 
                style={{ 
                  position: 'fixed',
                  top: '-10000px',
                  left: '-10000px',
                  zIndex: -1000
                }}
              >
                <div 
                  ref={renderContainerRef}
                  style={{ width: currentWidth, height: currentHeight, backgroundColor: '#ffffff', color: '#000000' }}
                  className="bg-white text-black"
                  dangerouslySetInnerHTML={{ __html: previewHtmlCode }}
                ></div>
              </div>

              {/* Right Column - Live Preview */}
              <div className="flex-1 bg-slate-50 p-6 md:p-9 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <Layout className="w-4 h-4 text-amber-600" />
                    Live Preview
                  </h3>
                  <span className="text-xs text-text-muted">Preview updates as you type</span>
                </div>
                
                <div className="flex-grow flex items-center justify-center bg-white border border-border rounded-xl shadow-inner p-4 overflow-hidden relative" style={{ minHeight: '300px' }}>
                  {/* Aspect Ratio Container for iFrame Preview */}
                  <div className="w-full flex items-center justify-center relative">
                    <div 
                      className="relative bg-white shadow-sm ring-1 ring-border"
                      style={{ 
                        // compute aspect ratio box that fits within the parent
                        width: '100%',
                        maxWidth: '400px', // constrain reasonable max width for preview
                        aspectRatio: `${currentWidth} / ${currentHeight}`
                      }}
                    >
                      <iframe 
                        srcDoc={previewHtmlCode || '<html><body></body></html>'} 
                        className="w-full h-full border-none pointer-events-none"
                        title="Live HTML Preview"
                        sandbox="allow-same-origin"
                        scrolling="no"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-xs font-medium text-text-secondary">
                  Rendering at {currentWidth} × {currentHeight} px
                </div>
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* QUICK START TEMPLATES */}
        <section className="py-20 bg-bg-main border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-3">Quick Start Templates</h2>
              <p className="text-text-secondary text-lg">Click any template to load it into the editor instantly.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => {
                    setHtmlCode(tpl.html);
                    updatePreview(tpl.html);
                    setSizeMode(tpl.size);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="flex flex-col items-center p-6 rounded-2xl bg-white border border-border hover:border-amber-400 hover:shadow-md hover:-translate-y-1 transition-all text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100 mb-4 group-hover:scale-110 transition-transform">
                    <FileImage className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-text-primary mb-1 text-sm">{tpl.name}</h3>
                  <p className="text-text-muted text-xs mb-2 hidden md:block">{tpl.desc}</p>
                  <span className="text-xs font-mono text-amber-600 bg-amber-50 px-2 py-1 rounded">{tpl.size}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">What Can You Create?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((uc, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-border hover:border-amber-300 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-amber-600 border border-border flex-shrink-0 shadow-sm">
                    <uc.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{uc.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 bg-bg-main border-y border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-text-primary mb-12">HTML to Image — FAQs</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-border rounded-xl overflow-hidden hover:border-amber-500/20 transition-colors">
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
        <OtherTools currentToolId="html-to-image" className="py-20 bg-white border-t border-border" />
      </main>
    </>
  );
}
