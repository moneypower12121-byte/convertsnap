"use client";
import React from 'react';
;
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function TermsOfService() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service — ConvertSnap",
    "url": "https://www.convertsnap.net/terms",
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
                  <span className="text-text-primary font-medium">Terms of Service</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary font-heading mb-6">
                Terms of Service
              </h1>
              <p className="text-sm text-text-muted mb-4">Last updated: January 15, 2025</p>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                Please read these terms carefully before using ConvertSnap's tools.
              </p>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-border p-8 md:p-12 mb-12 prose prose-slate max-w-none prose-headings:text-text-primary prose-a:text-primary">
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using convertsnap.net, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">2. What Is ConvertSnap?</h2>
              <p>
                ConvertSnap provides free online tools for converting websites and HTML code into PDF and image formats. The service is provided "as is" and may change or be discontinued at any time.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">3. Acceptable Use Policy</h2>
              <p>You agree NOT to use ConvertSnap to:</p>
              <ul className="list-disc pl-5">
                <li>Convert websites or content you do not have permission to access</li>
                <li>Violate any applicable laws or third-party rights</li>
                <li>Generate excessive automated requests without using the API (which has rate limits)</li>
                <li>Convert content that is illegal, harmful, or violates copyright</li>
                <li>Attempt to disrupt, hack, or damage our servers or service</li>
                <li>Convert content that violates anyone's privacy</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p>
                ConvertSnap does not claim ownership over any content you convert. You are responsible for ensuring you have the right to convert any content you submit.
              </p>
              <p>
                The ConvertSnap brand, logo, website design, and source code are the intellectual property of ConvertSnap and may not be copied or used without written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">5. No Warranties</h2>
              <p>ConvertSnap is provided "as is" without any warranty of any kind. We do not guarantee:</p>
              <ul className="list-disc pl-5">
                <li>Uninterrupted or error-free service</li>
                <li>That conversion output will be pixel-perfect in all cases</li>
                <li>Compatibility with all websites or HTML code</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p>
                ConvertSnap shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the service, including but not limited to loss of data or business interruption.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">7. API Terms</h2>
              <p>
                Free API users must respect rate limits. Excessive use may result in temporary suspension of API access. Commercial or high-volume use may require a separate agreement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">8. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of ConvertSnap after changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by the laws of your jurisdiction. Any disputes shall be resolved in the appropriate courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p>Questions? Email: <a href="mailto:hello@convertsnap.net">hello@convertsnap.net</a></p>
            </section>

          </div>

          <div className="text-center space-x-4">
             <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
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
