import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Blog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ConvertSnap Blog",
    "url": "https://www.convertsnap.net/blog",
    "description": "Tips, tutorials and guides on web to PDF conversion, HTML to image tools, and web automation.",
    "publisher": {
      "@type": "Organization",
      "name": "ConvertSnap",
      "url": "https://www.convertsnap.net"
    }
  };

  const featuredArticle = {
    title: "How to Convert Any Website to PDF for Free (2025 Guide)",
    slug: "/blog/convert-website-to-pdf-free",
    category: "Guide",
    color: "bg-blue-100 text-blue-600",
    description: "Step-by-step guide to converting any website URL to a perfect PDF file using free online tools. No software install needed.",
    readTime: "5 min read",
  };

  const articles = [
    {
      title: "HTML to PDF: The Developer's Complete Guide (2025)",
      slug: "/blog/html-to-pdf-developer-guide",
      category: "Developer",
      color: "bg-purple-100 text-purple-600",
      description: "Learn how to convert HTML and CSS to PDF using free online tools and REST APIs. Includes Bootstrap, Tailwind, and Google Fonts support.",
      readTime: "7 min read",
    },
    {
      title: "How to Take a Full-Page Screenshot of Any Website (Free)",
      slug: "/blog/full-page-screenshot-website-free",
      category: "Guide",
      color: "bg-blue-100 text-blue-600",
      description: "Capture complete full-page screenshots of any website as PNG or JPG without installing any software.",
      readTime: "4 min read",
    },
    {
      title: "How to Generate Open Graph (OG) Images Using HTML and CSS",
      slug: "/blog/generate-og-images-html-css",
      category: "Developer",
      color: "bg-purple-100 text-purple-600",
      description: "Create beautiful og:image tags for Twitter, Facebook, and LinkedIn previews using simple HTML and CSS. No Figma needed.",
      readTime: "6 min read",
    },
    {
      title: "Web Automation: Convert URLs to PDF Automatically Using an API",
      slug: "/blog/automate-url-to-pdf-api",
      category: "API",
      color: "bg-cyan-100 text-cyan-700",
      description: "Automate PDF generation in your app using ConvertSnap's free REST API. Includes code examples in JavaScript, Python, and PHP.",
      readTime: "8 min read",
    },
    {
      title: "PDF vs Image: When to Use Web to PDF and When to Use Web to Image",
      slug: "/blog/pdf-vs-image-web-conversion",
      category: "Tips",
      color: "bg-emerald-100 text-emerald-600",
      description: "Not sure whether to convert a website to PDF or image? This guide explains when each format is best for your use case.",
      readTime: "4 min read",
    }
  ];

  return (
    <>
      <Helmet>
        <title>ConvertSnap Blog — PDF & Web Conversion Tips, Guides & News</title>
        <meta name="description" content="Read ConvertSnap's blog for tips on converting websites to PDF, HTML to image, developer guides, and web automation tutorials. Free resources at convertsnap.net." />
        <meta name="keywords" content="web to pdf tips, html to pdf guide, website screenshot tutorial, pdf converter blog, free pdf tools, web automation, developer tools blog" />
        <link rel="canonical" href="https://www.convertsnap.net/blog" />
        
        <meta property="og:title" content="ConvertSnap Blog — PDF & Image Conversion Guides" />
        <meta property="og:description" content="Tips, tutorials, and guides for converting websites and HTML to PDF or image format. Free tools at convertsnap.net." />
        <meta property="og:url" content="https://www.convertsnap.net/blog" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-text-primary font-medium">Blog</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                New Articles Weekly
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6">
                ConvertSnap Blog
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                Guides, tips, and tutorials on PDF conversion, web screenshots, HTML tricks, and developer productivity.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Area */}
            <div className="flex-grow lg:w-2/3">
              
              {/* Featured Article */}
              <Link to={featuredArticle.slug} className="group block mb-12">
                <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-64 sm:h-80 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-primary/10 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                       <span className="text-4xl font-bold text-primary">PDF</span>
                    </div>
                  </div>
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${featuredArticle.color}`}>
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center text-sm text-text-muted">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-text-secondary mb-6 line-clamp-2">
                      {featuredArticle.description}
                    </p>
                    <div className="inline-flex items-center font-medium text-primary">
                      Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <Link key={index} to={article.slug} className="group block">
                    <div className="bg-white rounded-3xl h-full border border-border shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${article.color}`}>
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-3">
                        {article.title}
                      </h3>
                      <p className="text-text-secondary mb-6 line-clamp-2 flex-grow">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="flex items-center text-sm text-text-muted">
                          <Clock className="w-4 h-4 mr-1.5" />
                          {article.readTime}
                        </span>
                        <div className="inline-flex items-center font-medium text-primary text-sm group-hover:translate-x-1 transition-transform">
                          Read <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

            {/* Sidebar (Desktop only) */}
            <div className="hidden lg:block w-1/3 shrink-0 space-y-10">
              
              {/* Popular Tags */}
              <div className="bg-white rounded-3xl border border-border p-8">
                <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-primary" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Web to PDF', 'HTML to PDF', 'Screenshot', 'API', 'Developer', 'Free Tools'].map((tag, index) => (
                    <Link key={index} to="#" className="px-3 py-1.5 bg-slate-50 border border-border text-sm text-text-secondary hover:text-primary hover:border-primary/30 rounded-lg transition-colors">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden text-center text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 blur-2xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 font-heading">Get conversion tips in your inbox</h3>
                  <p className="text-slate-300 text-sm mb-6">Join 10,000+ developers and creators.</p>
                  <form className="flex flex-col gap-3">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-primary"
                    />
                    <button 
                      type="submit" 
                      className="w-full py-3 rounded-xl bg-primary hover:bg-primary-dark transition-colors font-bold shadow-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center space-x-4 mt-20 pt-10 border-t border-border">
             <Link to="/documentation" className="text-primary hover:underline font-medium">Documentation</Link>
             <span className="text-slate-300">|</span>
             <Link to="/faq" className="text-primary hover:underline font-medium">FAQ & Support</Link>
             <span className="text-slate-300">|</span>
             <Link to="/#tools" className="text-primary hover:underline font-medium">All Tools</Link>
          </div>

        </div>
      </main>
    </>
  );
}
