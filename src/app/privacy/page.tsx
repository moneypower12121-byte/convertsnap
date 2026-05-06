"use client";
import React from 'react';
;
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy — ConvertSnap",
    "url": "https://www.convertsnap.net/privacy",
    "description": "ConvertSnap privacy policy. We auto-delete all files after 60 minutes and collect no personal data.",
    "publisher": {
      "@type": "Organization",
      "name": "ConvertSnap",
      "url": "https://www.convertsnap.net"
    }
  };

  return (
    <>
      

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex text-sm text-text-muted mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-text-primary font-medium">Privacy Policy</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6">
                Privacy Policy
              </h1>
              <p className="text-sm text-text-muted mb-4">Last updated: January 15, 2025</p>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Your privacy matters. ConvertSnap is designed to collect as little data as possible.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-border p-8 md:p-12 mb-12 prose prose-slate max-w-none prose-headings:text-text-primary prose-a:text-primary">
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                ConvertSnap ("we", "us", "our") operates convertsnap.net. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. What Data Do We Collect?</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-2">2.1 Files and Code You Submit</h3>
              <p>
                When you use our conversion tools, the URLs or HTML code you submit are temporarily processed on our servers. All files and input data are automatically and permanently deleted within 60 minutes of conversion. We do not store, read, or analyze your content.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2">2.2 Usage Data (Anonymous)</h3>
              <p>
                We collect anonymous usage data such as tool usage counts, country of visitor (not precise location), browser type, and page views. This data contains no personally identifiable information.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-2">2.3 Cookies</h3>
              <p>
                We use minimal cookies for basic site functionality. See our <Link href="/cookies">Cookie Policy</Link> for full details.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. How We Use This Information</h2>
              <ul className="list-disc pl-5">
                <li>To provide and improve our conversion tools</li>
                <li>To monitor service uptime and performance</li>
                <li>To understand which features are most used (anonymous analytics only)</li>
              </ul>
              <p className="mt-4 font-medium">We do NOT sell, share, or monetize your data with any third party.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. How Long Do We Keep Your Data?</h2>
              <ul className="list-none pl-0 space-y-2">
                <li><strong>Converted files:</strong> Deleted automatically after 60 minutes</li>
                <li><strong>Anonymous analytics:</strong> Retained for 12 months in aggregated form</li>
              </ul>
              <p className="mt-4">No personal data is stored beyond your browsing session.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Services We Use</h2>
              <ul className="list-disc pl-5">
                <li>Cloudflare — DDoS protection and CDN (see Cloudflare Privacy Policy)</li>
                <li>Google Analytics (anonymized) — anonymous usage statistics only</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p>If you are in the EU/EEA, you have the right to:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Access data we hold about you</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Lodge a complaint with your local data protection authority</li>
              </ul>
              <p>Contact: <a href="mailto:hello@convertsnap.net">hello@convertsnap.net</a></p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p>
                ConvertSnap is not directed at children under 13. We do not knowingly collect data from children.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. Policy Changes</h2>
              <p>
                We may update this policy periodically. The "Last Updated" date at the top will reflect changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p>Questions about this policy? Email: <a href="mailto:hello@convertsnap.net">hello@convertsnap.net</a></p>
            </section>

          </div>

          <div className="text-center space-x-4">
             <Link href="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>
             <span className="text-slate-300">|</span>
             <Link href="/cookies" className="text-primary hover:underline font-medium">Cookie Policy</Link>
             <span className="text-slate-300">|</span>
             <Link href="/contact" className="text-primary hover:underline font-medium">Contact Us</Link>
          </div>

        </div>
      </main>
    </>
  );
}
