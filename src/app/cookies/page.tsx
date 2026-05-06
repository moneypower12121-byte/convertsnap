"use client";
import React from 'react';
;
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CookiePolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy — ConvertSnap",
    "url": "https://www.convertsnap.net/cookies",
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
                  <span className="text-text-primary font-medium">Cookie Policy</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6">
                Cookie Policy
              </h1>
              <p className="text-sm text-text-muted mb-4">Last updated: January 15, 2025</p>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                ConvertSnap uses minimal cookies to keep the site working. Here's exactly what we use and why.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-border p-8 md:p-12 mb-12 prose prose-slate max-w-none prose-headings:text-text-primary prose-a:text-primary">
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and provide a better experience.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6">2. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="py-3 px-4 font-bold">Cookie Name</th>
                      <th className="py-3 px-4 font-bold">Type</th>
                      <th className="py-3 px-4 font-bold">Purpose</th>
                      <th className="py-3 px-4 font-bold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm">cs_session</td>
                      <td className="py-3 px-4">Essential</td>
                      <td className="py-3 px-4">Keeps your session active</td>
                      <td className="py-3 px-4 text-text-muted">Session</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm">cs_theme</td>
                      <td className="py-3 px-4">Preference</td>
                      <td className="py-3 px-4">Remembers light/dark preference</td>
                      <td className="py-3 px-4 text-text-muted">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm">_ga</td>
                      <td className="py-3 px-4">Analytics</td>
                      <td className="py-3 px-4">Google Analytics (anonymized)</td>
                      <td className="py-3 px-4 text-text-muted">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm">_gid</td>
                      <td className="py-3 px-4">Analytics</td>
                      <td className="py-3 px-4">Google Analytics session</td>
                      <td className="py-3 px-4 text-text-muted">24 hours</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm">cf_clearance</td>
                      <td className="py-3 px-4">Security</td>
                      <td className="py-3 px-4">Cloudflare bot protection</td>
                      <td className="py-3 px-4 text-text-muted">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. Essential Cookies (Required)</h2>
              <p>
                These cookies are necessary for the website to function. They cannot be disabled. Examples: Session cookie, security cookies from Cloudflare.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Analytics Cookies (Optional)</h2>
              <p>
                We use Google Analytics with anonymization enabled. No personally identifiable information is collected. These cookies help us understand which tools are most popular.
              </p>
              <p>
                You can opt out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. How to Control Cookies</h2>
              <p className="mb-2">Browser settings: You can delete or block cookies in your browser settings.</p>
              <ul className="list-none space-y-1 pl-5 mb-4 text-sm text-text-secondary">
                <li><strong>Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Cookies</li>
                <li><strong>Firefox:</strong> Settings &rarr; Privacy and Security &rarr; Cookies</li>
                <li><strong>Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Cookies</li>
                <li><strong>Edge:</strong> Settings &rarr; Site Permissions &rarr; Cookies</li>
              </ul>
              <p className="text-sm italic">Note: Blocking essential cookies may affect site functionality.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Cookies</h2>
              <ul className="list-disc pl-5">
                <li>Cloudflare (security) — <code>cf_clearance</code> cookie</li>
                <li>Google Analytics (anonymized analytics) — <code>_ga</code>, <code>_gid</code> cookies</li>
              </ul>
              <p className="mt-4 font-medium">We do not use advertising cookies or tracking cookies.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. Cookie Consent</h2>
              <p>
                On your first visit, a cookie consent banner will appear at the bottom of the page.<br/>
                <strong>Accept All:</strong> Enables all cookies including analytics<br/>
                <strong>Reject Non-Essential:</strong> Only essential cookies will be set<br/>
                You can change your preference at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Questions About Cookies?</h2>
              <p>Email: <a href="mailto:hello@convertsnap.net">hello@convertsnap.net</a></p>
            </section>

          </div>

          <div className="text-center space-x-4">
             <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
             <span className="text-slate-300">|</span>
             <Link href="/terms" className="text-primary hover:underline font-medium">Terms of Service</Link>
             <span className="text-slate-300">|</span>
             <Link href="/contact" className="text-primary hover:underline font-medium">Contact Us</Link>
          </div>

        </div>
      </main>
    </>
  );
}
