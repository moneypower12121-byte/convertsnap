"use client";
import React from 'react';
;
import Link from 'next/link';
import { ChevronRight, FileText, FileImage, Code2, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Documentation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "ConvertSnap Documentation",
    "url": "https://www.convertsnap.net/documentation",
    "description": "Complete guide to all ConvertSnap tools including Web to PDF, Web to Image, HTML to PDF, HTML to Image, and REST API.",
    "publisher": {
      "@type": "Organization",
      "name": "ConvertSnap",
      "url": "https://www.convertsnap.net"
    },
    "mainEntityOfPage": "https://www.convertsnap.net/documentation"
  };

  return (
    <>
      

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-text-primary font-medium">Documentation</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Always Up to Date
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6">
                ConvertSnap Documentation
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Everything you need to know to get the most out of ConvertSnap's free tools — from basic usage to API integration.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-border p-8 md:p-12 mb-12">
            {/* Table of Contents - Optional but good for long docs */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-12 border border-border/50">
              <h2 className="text-xl font-bold text-text-primary mb-4">Quick Links</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <a href="#getting-started" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors">
                  <ChevronRight className="w-4 h-4" /> Getting Started
                </a>
                <a href="#web-to-pdf" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors">
                   <ChevronRight className="w-4 h-4" /> Web to PDF
                </a>
                <a href="#web-to-image" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors">
                   <ChevronRight className="w-4 h-4" /> Web to Image
                </a>
                <a href="#html-to-pdf" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors">
                   <ChevronRight className="w-4 h-4" /> HTML to PDF
                </a>
                <a href="#html-to-image" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors">
                   <ChevronRight className="w-4 h-4" /> HTML to Image
                </a>
                <a href="#api" className="flex items-center gap-2 text-text-secondary hover:text-primary font-medium transition-colors">
                   <ChevronRight className="w-4 h-4" /> API Documentation
                </a>
              </div>
            </div>

            {/* Section 1 */}
            <section id="getting-started" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                Getting Started with ConvertSnap
              </h2>
              <div className="text-text-secondary space-y-4">
                <p>
                  ConvertSnap is a 100% free online conversion tool with no account required.
                  Simply pick your tool, paste your URL or HTML, and click Convert.
                  No installation, no signup, no credit card — ever.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="web-to-pdf" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">How to Use Web to PDF</h2>
              </div>
              <div className="text-text-secondary mb-6">
                <ol className="list-decimal list-outside ml-5 space-y-2 mb-6">
                  <li>Go to <Link href="/web-to-pdf" className="text-primary hover:underline">convertsnap.net/web-to-pdf</Link></li>
                  <li>Paste your website URL into the input field (e.g. <code>https://example.com</code>)</li>
                  <li>Select Page Size: A4 / Letter / A3 / Legal <i>(Note: Our new engine captures a seamless full page)</i></li>
                  <li>Select Capture Resolution: Desktop / Laptop / Tablet / Mobile</li>
                  <li>Click <strong>"Convert to PDF"</strong></li>
                  <li>Download your PDF file — auto-deleted after 60 minutes</li>
                </ol>
                <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm">
                  <strong>Tips:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Works on JavaScript-heavy websites and SPAs</li>
                    <li>Does not support password-protected pages</li>
                    <li>The output is a single, continuous, seamless page preventing cut-off text or repeating sticky headers.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="web-to-image" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <FileImage className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">How to Use Web to Image</h2>
              </div>
              <div className="text-text-secondary mb-6">
                <ol className="list-decimal list-outside ml-5 space-y-2 mb-6">
                  <li>Go to <Link href="/web-to-image" className="text-primary hover:underline">convertsnap.net/web-to-image</Link></li>
                  <li>Paste your website URL</li>
                  <li>Choose Format: PNG or JPG</li>
                  <li>Choose Resolution: 1920px / 1280px / 1024px / 375px</li>
                  <li>Choose Capture: Full Page or Visible Area</li>
                  <li>Click <strong>"Take Screenshot"</strong> and download</li>
                </ol>
                <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm">
                  <strong>Tips:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Use PNG for pages with text — sharper output</li>
                    <li>Use JPG for smaller file size</li>
                    <li>Full Page captures everything, including content below the fold</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="html-to-pdf" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">How to Use HTML to PDF</h2>
              </div>
              <div className="text-text-secondary mb-6">
                <ol className="list-decimal list-outside ml-5 space-y-2 mb-6">
                  <li>Go to <Link href="/html-to-pdf" className="text-primary hover:underline">convertsnap.net/html-to-pdf</Link></li>
                  <li>Paste your HTML + CSS code in the code editor</li>
                  <li>Optional: Enable "Include External CSS" and add CDN link</li>
                  <li>Select Page Size and Margin</li>
                  <li>Click <strong>"Generate PDF"</strong></li>
                </ol>
                <div className="bg-slate-100 text-slate-800 p-4 rounded-xl text-sm">
                  <strong>Supported Technologies:</strong> HTML5, CSS3, Flexbox, Grid, Google Fonts, Bootstrap CDN, Tailwind CDN, SVG, Base64 Images.
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="html-to-image" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">How to Use HTML to Image</h2>
              </div>
              <div className="text-text-secondary mb-6">
                <ol className="list-decimal list-outside ml-5 space-y-2 mb-6">
                  <li>Go to <Link href="/html-to-image" className="text-primary hover:underline">convertsnap.net/html-to-image</Link></li>
                  <li>Paste your HTML code</li>
                  <li>Select Canvas Size (OG 1200×630 / Twitter / Instagram / LinkedIn / Custom)</li>
                  <li>Choose PNG or JPG</li>
                  <li>Choose 1x or 2x Retina</li>
                  <li>Click <strong>"Generate Image"</strong></li>
                </ol>
                <div className="bg-slate-100 text-slate-800 p-4 rounded-xl text-sm">
                  <strong>Best for:</strong> OG images, email banners, social media cards, certificates.
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="api" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-text-primary mb-2">ConvertSnap REST API</h2>
              <p className="text-text-secondary mb-6">Use ConvertSnap programmatically in your app — free tier available.</p>
              
              <div className="bg-[#0d1117] rounded-xl p-4 overflow-x-auto mb-6">
                <pre className="text-sm font-mono text-slate-300">
<span className="text-emerald-400">POST</span> https://api.convertsnap.net/v1/convert
<span className="text-blue-400">Headers:</span>
  Content-Type: application/json
  Authorization: Bearer YOUR_API_KEY

<span className="text-blue-400">Request body:</span>
{`{
  "type": "web-to-pdf",
  "url": "https://example.com",
  "options": {
    "size": "A4",
    "orientation": "portrait"
  }
}`}

<span className="text-blue-400">Response:</span>
{`{
  "status": "success",
  "download_url": "https://api.convertsnap.net/d/xyz123.pdf"
}`}
                </pre>
              </div>

              <div className="text-text-secondary space-y-2">
                <p><strong>Available types:</strong> <code>web-to-pdf</code> | <code>web-to-image</code> | <code>html-to-pdf</code> | <code>html-to-image</code></p>
                <p><strong>Get API key:</strong> <a href="#" className="text-primary hover:underline">convertsnap.net/api-key</a> (free, no credit card)</p>
              </div>
            </section>
          </div>

          <div className="text-center space-x-4">
             <Link href="/faq" className="text-primary hover:underline font-medium">FAQ & Support</Link>
             <span className="text-slate-300">|</span>
             <Link href="/blog" className="text-primary hover:underline font-medium">Blog</Link>
             <span className="text-slate-300">|</span>
             <Link href="/#tools" className="text-primary hover:underline font-medium">All Tools</Link>
          </div>

        </div>
      </main>
    </>
  );
}
