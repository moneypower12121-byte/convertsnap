import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Hero from '@/components/Hero';
import Tools from '@/components/Tools';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'ConvertSnap — Free Web to PDF & Image Converter Online',
  description: 'Convert any website URL or HTML code to PDF or image for free. No signup required. Fast, secure, works on all browsers.',
  alternates: { canonical: 'https://www.convertsnap.net' },
  openGraph: {
    title: 'ConvertSnap — Free Web to PDF & Image Converter',
    description: 'Convert any URL or HTML to PDF or image instantly. Free, fast, no login needed.',
    url: 'https://www.convertsnap.net',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "ConvertSnap",
  "url": "https://www.convertsnap.net",
  "description": "Free online tool to convert website URLs and HTML code to PDF or image files.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "featureList": ["Web to PDF","Web to Image","HTML to PDF","HTML to Image"]
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ConvertSnap",
  "url": "https://www.convertsnap.net",
  "email": "hello@convertsnap.net",
  "sameAs": ["https://twitter.com/convertsnap","https://github.com/convertsnap"]
}

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={orgSchema} />
      <main className="flex-grow">
        <Hero />
        <Tools />
        <HowItWorks />
        <Stats />
        <Features />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
