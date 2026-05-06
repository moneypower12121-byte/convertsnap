"use client";
import React from 'react';
;
import Link from 'next/link';
import { ChevronRight, HelpCircle, Shield, Settings, Code, Mail, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function Faq() {
  const categories = [
    {
      id: "general",
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600",
      faqs: [
        {
          q: "Is ConvertSnap really free to use?",
          a: "Yes, 100% free. No hidden fees, no premium plan, no credit card ever. All 4 tools are permanently free."
        },
        {
          q: "Do I need to create an account?",
          a: "No. Just open the tool, paste your URL or HTML, and download. No signup, no email, no password."
        },
        {
          q: "How many files can I convert per day?",
          a: "There is no daily limit. Convert as many files as you need."
        },
        {
          q: "What browsers does ConvertSnap support?",
          a: "Chrome, Firefox, Safari, Edge, and all modern mobile browsers are supported."
        }
      ]
    },
    {
      id: "privacy",
      title: "File Privacy & Security",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-emerald-100 text-emerald-600",
      faqs: [
        {
          q: "How long are my files stored on your server?",
          a: "Files are auto-deleted after 60 minutes. We do not permanently store any converted files."
        },
        {
          q: "Is my HTML code kept private?",
          a: "Yes. Your code is processed server-side and deleted immediately after conversion. We do not log or store your code."
        },
        {
          q: "Is ConvertSnap GDPR compliant?",
          a: "Yes. We collect minimal data, delete files within 60 minutes, and never sell user data. See our Privacy Policy for details."
        }
      ]
    },
    {
      id: "features",
      title: "Tools & Features",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-orange-100 text-orange-600",
      faqs: [
        {
          q: "What is the difference between Web to PDF and HTML to PDF?",
          a: "Web to PDF converts a live website by URL. HTML to PDF converts raw HTML/CSS code you paste directly — no internet URL needed."
        },
        {
          q: "Does it support Bootstrap or Tailwind CSS?",
          a: 'Yes. Enable "Include External CSS" in the HTML to PDF tool and paste the CDN link for Bootstrap or Tailwind.'
        },
        {
          q: "What image formats are available?",
          a: "PNG (best quality), JPG (smaller size), and WebP. PNG is recommended for pages with text."
        },
        {
          q: "Can I convert a full-page screenshot or just the visible area?",
          a: 'Both. Use the "Full Page" option to capture everything including below-the-fold content, or "Visible Area" for just what\'s on screen.'
        },
        {
          q: "Does it support password-protected websites?",
          a: "No. ConvertSnap can only convert publicly accessible websites."
        }
      ]
    },
    {
      id: "api",
      title: "API",
      icon: <Code className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-600",
      faqs: [
        {
          q: "Is there an API available?",
          a: "Yes, a free REST API is available. Visit convertsnap.net/documentation for full API docs and your free API key."
        },
        {
          q: "What does the API support?",
          a: "All 4 tools: web-to-pdf, web-to-image, html-to-pdf, and html-to-image. Options like page size and format are fully configurable via API."
        },
        {
          q: "Is the API free?",
          a: "Yes, a free tier is available with generous limits. See convertsnap.net/documentation for rate limits."
        }
      ]
    }
  ];

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
                  <span className="text-text-primary font-medium">FAQ & Support</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                15 Questions Answered
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6">
                FAQ & Support
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Can't find an answer? Email us at <a href="mailto:hello@convertsnap.net" className="text-primary hover:underline">hello@convertsnap.net</a> — we respond within 24 hours.
              </p>
            </div>
          </div>

          <div className="space-y-12 mb-16">
            {categories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary">{category.title}</h2>
                </div>
                
                <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden p-8 md:p-10">
                  <div className="space-y-8">
                    {category.faqs.map((faq, index) => (
                      <div key={index} className="group">
                        <h3 className="text-lg font-bold text-text-primary mb-2 flex items-start gap-3">
                          <span className="text-primary shrink-0 mt-0.5">Q:</span> 
                          {faq.q}
                        </h3>
                        <p className="text-text-secondary pl-6">
                          <span className="font-semibold text-text-muted mr-2">A:</span>
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Support CTA */}
          <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl mb-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full -ml-32 -mb-32 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Can't find your answer above? Reach out — we're happy to help. We respond within 24 hours, Monday–Friday.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:hello@convertsnap.net" className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Support &rarr;
                </a>
                <Link href="/documentation" className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/10 text-white text-lg font-bold border border-white/20 hover:bg-white/20 transition-all shadow-sm">
                  <FileText className="w-5 h-5 mr-2" />
                  Read Docs &rarr;
                </Link>
              </div>
            </div>
          </section>

          <div className="text-center space-x-4">
             <Link href="/documentation" className="text-primary hover:underline font-medium">Documentation</Link>
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
