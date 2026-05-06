import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Briefcase, MessageSquare, Check, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ConvertSnap",
    "url": "https://www.convertsnap.net/contact",
    "description": "Get help and support for ConvertSnap's free PDF and image conversion tools.",
    "publisher": {
      "@type": "Organization",
      "name": "ConvertSnap",
      "url": "https://www.convertsnap.net",
      "email": "hello@convertsnap.net",
      "sameAs": [
        "https://twitter.com/convertsnap",
        "https://github.com/convertsnap"
      ]
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact ConvertSnap — Get Help & Support | convertsnap.net</title>
        <meta name="description" content="Contact ConvertSnap for help, support, feedback, or business inquiries. We respond within 24 hours. Free PDF and image conversion tool at convertsnap.net." />
        <meta name="keywords" content="contact convertsnap, convertsnap support, convertsnap help, pdf converter support, web conversion help" />
        <link rel="canonical" href="https://www.convertsnap.net/contact" />
        
        <meta property="og:title" content="Contact ConvertSnap — Help & Support" />
        <meta property="og:description" content="Get help using ConvertSnap's free tools. We respond within 24 hours." />
        <meta property="og:url" content="https://www.convertsnap.net/contact" />
        
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-text-primary font-medium">Contact Us</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Responds within 24 hours
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                Have a question, found a bug, or want to give feedback? We'd love to hear from you.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            
            {/* Left Column: Contact Info Options */}
            <div className="lg:w-1/2 space-y-6">
              
              <div className="bg-white p-8 rounded-3xl border border-border flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Email Support</h3>
                  <p className="text-text-secondary mb-4">For general questions, bug reports, and tool issues.</p>
                  <a href="mailto:hello@convertsnap.net" className="text-primary font-medium hover:underline inline-flex items-center mb-2">
                    hello@convertsnap.net
                  </a>
                  <p className="text-sm text-text-muted">Usually within 24 hours, Mon–Fri</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Business & API Inquiries</h3>
                  <p className="text-text-secondary mb-4">For API partnerships, high-volume usage, or business deals.</p>
                  <a href="mailto:business@convertsnap.net" className="text-primary font-medium hover:underline inline-flex items-center mb-2">
                    business@convertsnap.net
                  </a>
                  <p className="text-sm text-text-muted">Within 2 business days</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-border flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Product Feedback</h3>
                  <p className="text-text-secondary mb-4">Suggest a new feature or tell us what could be better.</p>
                  <a href="#contact-form" className="text-primary font-medium hover:underline inline-flex items-center mb-2">
                    Use the contact form &rarr;
                  </a>
                  <p className="text-sm text-text-muted">We read every message</p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div id="contact-form" className="lg:w-1/2 scroll-mt-32">
              <div className="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h2>
                
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-xl flex items-start gap-3 border border-emerald-100">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <p className="font-medium">Message Sent! We'll reply to your email within 24 hours.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-xl flex items-start gap-3 border border-red-100">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <p className="font-medium">Something went wrong. Please email us directly at hello@convertsnap.net</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your full name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                    <select 
                      id="subject" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Question</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="api">API Inquiry</option>
                      <option value="business">Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                    <textarea 
                      id="message" 
                      required 
                      rows={5}
                      placeholder="Describe your question or issue in detail..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y min-h-[140px]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full h-14 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl transition-colors mt-2"
                  >
                    Send Message &rarr;
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Links & Socials Section */}
          <div className="border-t border-border pt-16 flex flex-col md:flex-row gap-12 justify-between items-start">
            
            <div className="md:w-1/2">
               <h2 className="text-2xl font-bold text-text-primary mb-6">Looking for a quick answer?</h2>
               <div className="flex flex-wrap gap-4">
                 <Link to="/documentation" className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white font-medium transition-colors">
                   Read Documentation &rarr;
                 </Link>
                 <Link to="/faq" className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white font-medium transition-colors">
                   Check FAQ &rarr;
                 </Link>
                 <Link to="/blog" className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 hover:bg-primary hover:text-white font-medium transition-colors">
                   Read Blog &rarr;
                 </Link>
               </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-6">Follow ConvertSnap</h2>
              <ul className="space-y-4">
                <li>
                  <a href="https://twitter.com/convertsnap" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary font-medium flex items-center">
                    Twitter/X: @convertsnap
                  </a>
                </li>
                <li>
                  <a href="https://github.com/convertsnap" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary font-medium flex items-center">
                    GitHub: github.com/convertsnap
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/convertsnap" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary font-medium flex items-center">
                    LinkedIn: linkedin.com/company/convertsnap
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center space-x-4 mt-20 pt-10 border-t border-border">
             <Link to="/faq" className="text-primary hover:underline font-medium">FAQ & Support</Link>
             <span className="text-slate-300">|</span>
             <Link to="/documentation" className="text-primary hover:underline font-medium">Documentation</Link>
             <span className="text-slate-300">|</span>
             <Link to="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
          </div>

        </div>
      </main>
    </>
  );
}
