import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web to PDF Converter — Free & Seamless Online Tool',
  description: 'Free online tool to convert any website URL to PDF format as a full seamless page. works on all browsers.',
  alternates: { canonical: 'https://www.convertsnap.net/web-to-pdf' },
  openGraph: {
    title: 'Web to PDF Converter — Free & Seamless Online Tool',
    description: 'Convert any website URL to PDF format as a full seamless page. works on all browsers.',
    url: 'https://www.convertsnap.net/web-to-pdf',
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Web to PDF Converter",
  "url": "https://www.convertsnap.net/web-to-pdf",
  "description": "Free tool to convert any website URL to PDF.",
  "applicationCategory": "UtilityApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert a Website to PDF",
  "step": [
    { "@type": "HowToStep", "name": "Paste URL", "text": "Enter the website URL" },
    { "@type": "HowToStep", "name": "Choose settings", "text": "Select page size and orientation" },
    { "@type": "HowToStep", "name": "Convert", "text": "Click Convert to PDF" },
    { "@type": "HowToStep", "name": "Download", "text": "Download your PDF file" }
  ],
  "totalTime": "PT1M"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={toolSchema} />
      <JsonLd data={howToSchema} />
      {children}
    </>
  )
}
