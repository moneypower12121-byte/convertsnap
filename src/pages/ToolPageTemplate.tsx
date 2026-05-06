import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Navigate, Link } from 'react-router-dom';
import { Download, Link2, Code, FileImage, FileText, ArrowRight } from 'lucide-react';

const TOOLS_CONFIG = {
  'web-to-pdf': {
    name: 'Web to PDF',
    title: 'Web to PDF Converter - Instantly Convert Any URL to PDF',
    description: 'Convert any website URL into a perfectly formatted PDF document. Free, fast online web to PDF converter.',
    h1: 'Web to PDF',
    icon: Link2,
    placeholder: 'https://example.com'
  },
  'web-to-image': {
    name: 'Web to Image',
    title: 'Web to Image Converter - Full Page Screenshots Instantly',
    description: 'Take full page screenshots of any website URL and convert them to high quality PNG or JPG images.',
    h1: 'Web to Image',
    icon: FileImage,
    placeholder: 'https://example.com'
  },
  'html-to-pdf': {
    name: 'HTML to PDF',
    title: 'HTML to PDF Converter - Turn Raw HTML Code into PDFs',
    description: 'Paste your raw HTML and CSS code to instantly generate a print-ready PDF document. Fast and completely free.',
    h1: 'HTML to PDF',
    icon: Code,
    placeholder: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Title</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>'
  },
  'html-to-image': {
    name: 'HTML to Image',
    title: 'HTML to Image Converter - Render HTML to PNG/JPG',
    description: 'Convert your raw HTML snippets into beautiful images instantly. A developer-friendly HTML to image conversion tool.',
    h1: 'HTML to Image',
    icon: FileText,
    placeholder: '<div style="background: #1D4ED8; color: white; padding: 20px;">\n  Hello World\n</div>'
  }
};

const ALL_TOOLS = [
  { id: 'web-to-pdf', name: 'URL to PDF', desc: 'Convert live websites into multi-page PDFs.' },
  { id: 'web-to-image', name: 'URL to Image', desc: 'Capture full-page, high-res screenshots.' },
  { id: 'html-to-pdf', name: 'HTML to PDF', desc: 'Render raw HTML and CSS into a PDF.' },
  { id: 'html-to-image', name: 'HTML to Image', desc: 'Render HTML strings directly to an image.' }
];

export default function ToolPageTemplate({ type }: { type: keyof typeof TOOLS_CONFIG }) {
  const config = TOOLS_CONFIG[type];
  const [inputValue, setInputValue] = useState('');
  const [isConverting, setIsConverting] = useState(false);

  // If wrong type
  if (!config) return <Navigate to="/" replace />;
  
  const Icon = config.icon;
  const canonicalUrl = `https://convertsnap.net/${type}`;
  const otherTools = ALL_TOOLS.filter(t => t.id !== type);

  // Generate JSON-LD based on current tool
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `ConvertSnap - ${config.name}`,
    "url": canonicalUrl,
    "description": config.description,
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    setIsConverting(true);
    // Simulate conversion delay
    setTimeout(() => {
      setIsConverting(false);
      alert('This is a demo. Your file would be downloaded now.');
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>{config.title} | ConvertSnap</title>
        <meta name="description" content={config.description} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-light text-primary mb-6 shadow-sm border border-primary/20">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
              {config.h1}
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {config.description}
            </p>
          </motion.div>

          <motion.div
            id="tool-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-border"
          >
            <form onSubmit={handleConvert} className="flex flex-col gap-6">
              <div>
                <label htmlFor="inputData" className="block text-sm font-semibold text-text-primary mb-2">
                  {type.startsWith('web') ? 'Website URL' : 'Raw HTML Code'}
                </label>
                
                {type.startsWith('web') ? (
                  <input
                    id="inputData"
                    type="url"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={config.placeholder}
                    className="w-full px-4 py-4 rounded-xl border border-border bg-bg-main text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                ) : (
                  <textarea
                    id="inputData"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={config.placeholder}
                    rows={8}
                    className="w-full px-4 py-4 rounded-xl border border-border bg-bg-main text-text-primary placeholder:text-text-muted font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all overflow-hidden resize-y"
                    required
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={isConverting || !inputValue.trim()}
                className="w-full relative flex items-center justify-center gap-2 h-14 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg disabled:hover:shadow-md"
              >
                {isConverting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Converting...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Convert to {type.endsWith('pdf') ? 'PDF' : 'Image'}
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-text-muted mt-2">
                By converting, you agree to our Terms of Service. Files are deleted automatically.
              </p>
            </form>
          </motion.div>

          {/* OTHER TOOLS SECTION */}
          <div className="mt-24 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">More Conversion Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherTools.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={`/${t.id}`}
                    className="block p-6 rounded-2xl bg-white border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group h-full"
                  >
                    <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors mb-2">{t.name}</h3>
                    <p className="text-sm text-text-secondary mb-4">{t.desc}</p>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:underline mt-auto">
                      Use it <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
