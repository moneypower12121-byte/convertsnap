import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ArticleHtmlToImage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "How to Generate Open Graph (OG) Images Using HTML and CSS",
    "author": {"@type":"Organization","name":"ConvertSnap"},
    "datePublished": "2025-01-15",
    "description": "Create beautiful Open Graph og:image previews for Twitter, Facebook, and LinkedIn using simple HTML and CSS.",
    "url": "https://www.convertsnap.net/blog/generate-og-images-html-css"
  };

  return (
    <>
      <Helmet>
        <title>How to Generate Open Graph (OG) Images Using HTML and CSS (Free) | ConvertSnap</title>
        <meta name="description" content="Create beautiful Open Graph og:image previews for Twitter, Facebook, and LinkedIn using simple HTML and CSS. No Figma or design tools needed. Free tool at ConvertSnap." />
        <meta name="keywords" content="generate og image html, open graph image generator, og image html css, og:image free tool, social media image generator, twitter card image, link preview image generator" />
        <link rel="canonical" href="https://www.convertsnap.net/blog/generate-og-images-html-css" />
        <meta property="og:title" content="How to Generate OG Images Using HTML and CSS — Free" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.convertsnap.net/blog/generate-og-images-html-css" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-text-primary font-medium truncate max-w-[200px] sm:max-w-none">Generate OG Images HTML CSS</span>
                </div>
              </li>
            </ol>
          </nav>

          <article>
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-600">
                  Developer
                </span>
                <span className="text-sm text-text-muted flex items-center">
                  <Clock className="w-4 h-4 mr-1.5" />
                  6 min read
                </span>
                <span className="text-sm text-text-muted hidden sm:inline">
                  • Published: January 15, 2025
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6 leading-tight">
                How to Generate Open Graph (OG) Images Using HTML and CSS
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  CS
                </div>
                <div>
                  <p className="font-medium text-text-primary">ConvertSnap Team</p>
                  <p className="text-sm text-text-muted sm:hidden">January 15, 2025</p>
                </div>
              </div>
            </header>

            <div className="prose prose-slate prose-lg max-w-none prose-headings:text-text-primary prose-a:text-primary hover:prose-a:text-primary-dark prose-pre:bg-[#0d1117] prose-pre:text-slate-300">
              
              <p className="lead text-xl text-text-secondary">
                When you share a link on Twitter, Facebook, or LinkedIn, a preview card appears with an image, title, and description. That image is called the Open Graph image (<code>og:image</code>). Most websites use design tools like Figma or paid services to generate these. But did you know you can create beautiful, on-brand OG images using just HTML and CSS — and convert them to PNG for free? In this guide, we will show you exactly how.
              </p>

              <div className="bg-slate-50 border border-border p-6 rounded-2xl my-8">
                <h3 className="text-lg font-bold mb-4 mt-0">Table of Contents</h3>
                <ol className="space-y-2 m-0 pl-5">
                  <li><a href="#what-is" className="no-underline hover:underline">What is an Open Graph Image?</a></li>
                  <li><a href="#sizes" className="no-underline hover:underline">Correct OG Image Sizes for Each Platform</a></li>
                  <li><a href="#design" className="no-underline hover:underline">Designing OG Images with HTML and CSS</a></li>
                  <li><a href="#convert" className="no-underline hover:underline">Converting HTML to OG Image (Free Tool)</a></li>
                  <li><a href="#adding" className="no-underline hover:underline">Adding og:image to Your Website</a></li>
                  <li><a href="#templates" className="no-underline hover:underline">OG Image Templates You Can Use Today</a></li>
                  <li><a href="#faq" className="no-underline hover:underline">FAQ</a></li>
                </ol>
              </div>

              <h2 id="what-is">1. What is an Open Graph Image?</h2>
              <p>The Open Graph protocol (<code>og:</code>) is a set of meta tags that control how your website appears when shared on social media platforms.</p>
              
              <p>The most important tag is <code>og:image</code> — it sets the preview image that appears when your link is shared.</p>
              <pre><code className="language-html">{`<meta property="og:image" content="https://www.yoursite.com/og-image.png">`}</code></pre>

              <p><strong>Without an og:image tag:</strong></p>
              <ul>
                <li>→ Platforms auto-pick a random image (often looks bad)</li>
                <li>→ Some platforms show no image at all</li>
                <li>→ Click-through rates drop significantly</li>
              </ul>
              
              <p><strong>With a properly sized og:image:</strong></p>
              <ul>
                <li>→ Branded, professional preview on all platforms</li>
                <li>→ Higher click-through rates</li>
                <li>→ Better first impression</li>
              </ul>

              <h2 id="sizes">2. Correct OG Image Sizes by Platform</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="py-3 px-4 font-bold">Platform</th>
                      <th className="py-3 px-4 font-bold">Recommended Size</th>
                      <th className="py-3 px-4 font-bold">Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-4">Facebook / Meta</td>
                      <td className="py-3 px-4">1200 × 630 px</td>
                      <td className="py-3 px-4 text-slate-500">1.91:1</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Twitter / X</td>
                      <td className="py-3 px-4">1200 × 600 px</td>
                      <td className="py-3 px-4 text-slate-500">2:1</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">LinkedIn</td>
                      <td className="py-3 px-4">1200 × 627 px</td>
                      <td className="py-3 px-4 text-slate-500">1.91:1</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">WhatsApp</td>
                      <td className="py-3 px-4">1200 × 630 px</td>
                      <td className="py-3 px-4 text-slate-500">1.91:1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 text-sm">
                <strong>Best practice:</strong> Use <strong>1200 × 630 px</strong> — it works consistently well on all major platforms.
              </p>

              <h2 id="design">3. Designing Your OG Image with HTML and CSS</h2>
              <p>You do not need Figma or Photoshop. Here is a simple HTML template for a 1200×630 OG image:</p>
              
              <pre><code className="language-html">{`<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%);
    display: flex; align-items: center;
    font-family: Arial, sans-serif;
    padding: 60px;
  }
  .logo { color: #60A5FA; font-size: 18px; font-weight: 700; margin-bottom: 24px; }
  h1 { color: white; font-size: 56px; font-weight: 800; line-height: 1.15; margin-bottom: 20px; }
  .desc { color: rgba(255,255,255,0.75); font-size: 22px; margin-bottom: 36px; }
  .cta { background: #2563EB; color: white; padding: 14px 32px; border-radius: 999px; font-size: 18px; font-weight: 700; display: inline-block; }
</style>
</head>
<body>
  <div>
    <div class="logo">⚡ CONVERTSNAP.NET</div>
    <h1>Convert Any Website<br>to PDF or Image</h1>
    <div class="desc">Free • Instant • No Signup</div>
    <div class="cta">Try It Free →</div>
  </div>
</body>
</html>`}</code></pre>

              <h2 id="convert">4. Converting HTML to OG Image for Free</h2>
              <p>Once your HTML is ready:</p>
              <ol className="space-y-1">
                <li>Go to <Link to="/html-to-image">convertsnap.net/html-to-image</Link></li>
                <li>Paste your HTML code into the editor</li>
                <li>Select Canvas Size: <strong>OG Image 1200×630</strong></li>
                <li>Select Format: <strong>PNG</strong></li>
                <li>Select Scale: <strong>2x Retina</strong> (for sharp output on all screens)</li>
                <li>Click <strong>"Generate Image"</strong></li>
                <li>Download your PNG</li>
              </ol>
              <p>Your OG image is ready — upload it to your server and add the og:image meta tag.</p>

              <h2 id="adding">5. Adding og:image to Your Website</h2>
              <p>After uploading your image, add this to your HTML <code>&lt;head&gt;</code>:</p>
              
              <pre><code className="language-html">{`<meta property="og:image" content="https://www.yoursite.com/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="ConvertSnap — Free PDF and Image Converter">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://www.yoursite.com/og-image.png">`}</code></pre>

              <p><strong>Test your og:image using:</strong></p>
              <ul className="list-none pl-0 space-y-2 text-sm">
                <li>→ Facebook: <a href="https://developers.facebook.com/tools/debug" target="_blank" rel="noopener noreferrer">developers.facebook.com/tools/debug</a></li>
                <li>→ Twitter: <a href="https://cards-dev.twitter.com/validator" target="_blank" rel="noopener noreferrer">cards-dev.twitter.com/validator</a></li>
                <li>→ LinkedIn: <a href="https://www.linkedin.com/post-inspector" target="_blank" rel="noopener noreferrer">linkedin.com/post-inspector</a></li>
              </ul>

              <h2 id="templates">6. OG Image Design Templates</h2>
              <ul className="space-y-4">
                <li>
                  <strong>Template 1 — Dark Gradient (Professional)</strong><br/>
                  Dark blue gradient bg, white headline, colored CTA button.<br/>
                  <em className="text-slate-500">Best for: SaaS, developer tools, tech companies</em>
                </li>
                <li>
                  <strong>Template 2 — Light Card (Clean)</strong><br/>
                  White bg, bold black headline, subtle brand color accents.<br/>
                  <em className="text-slate-500">Best for: Blogs, news, documentation sites</em>
                </li>
                <li>
                  <strong>Template 3 — Bold Color (Social)</strong><br/>
                  Solid brand color bg, large white headline, emoji icon.<br/>
                  <em className="text-slate-500">Best for: Social media posts, announcements, campaigns</em>
                </li>
              </ul>
              <p><em>(You can find ready-to-use HTML code for these in our <Link to="/html-to-image">HTML to Image tool</Link> by selecting "Load Templates")</em></p>

              <h2 id="faq">7. Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold m-0">Q: Can I generate different OG images for different pages?</p>
                  <p className="m-0 mt-1">A: Yes. Create separate HTML templates for each page type and generate unique OG images for each.</p>
                </div>
                <div>
                  <p className="font-bold m-0">Q: What file format should my OG image be?</p>
                  <p className="m-0 mt-1">A: PNG is recommended for best quality. JPG is acceptable but may show compression on text.</p>
                </div>
                <div>
                  <p className="font-bold m-0">Q: How often should I update my OG images?</p>
                  <p className="m-0 mt-1">A: Update OG images whenever you rebrand, launch a new campaign, or want higher click-through rates.</p>
                </div>
                <div>
                  <p className="font-bold m-0">Q: Can I use CSS animations in my OG image?</p>
                  <p className="m-0 mt-1">A: No. OG images are static — animations are captured as a static frame.</p>
                </div>
              </div>

            </div>
          </article>

          {/* CTA Section */}
          <div className="my-16 bg-gradient-to-br from-[#0F172A] to-purple-900 rounded-3xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Generate Your OG Image Now — Free</h2>
              <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">No design tools required. Use HTML and export to PNG.</p>
              <Link to="/html-to-image" className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white text-purple-700 text-lg font-bold hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                Try HTML to Image &rarr;
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-20 pt-10 border-t border-border">
            <h2 className="text-2xl font-bold text-text-primary mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link to="/blog/html-to-pdf-developer-guide" className="group bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-full mb-4 inline-block">Developer</span>
                <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors mb-2 line-clamp-2">HTML to PDF: The Developer's Complete Guide</h3>
                <span className="text-primary text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">Read &rarr;</span>
              </Link>

              <Link to="/blog/convert-website-to-pdf-free" className="group bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-4 inline-block">Guide</span>
                <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors mb-2 line-clamp-2">How to Convert Any Website to PDF for Free</h3>
                <span className="text-primary text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">Read &rarr;</span>
              </Link>

              <Link to="/blog/automate-url-to-pdf-api" className="group bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2 py-1 rounded-full mb-4 inline-block">API</span>
                <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors mb-2 line-clamp-2">Web Automation: Convert URLs to PDF Using an API</h3>
                <span className="text-primary text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">Read &rarr;</span>
              </Link>

            </div>
          </div>

        </div>
      </main>
    </>
  );
}
