import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'HTML to PDF Converter — High Quality Free Render',
  description: 'Convert raw HTML code and CSS directly to a perfect PDF document. High quality, free, works completely online without downloads.',
  alternates: { canonical: 'https://www.convertsnap.net/html-to-pdf' },
  openGraph: {
    title: 'HTML to PDF Converter — High Quality Free Render',
    description: 'Convert raw HTML code and CSS directly to a perfect PDF document.',
    url: 'https://www.convertsnap.net/html-to-pdf',
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "HTML to PDF Converter",
  "url": "https://www.convertsnap.net/html-to-pdf",
  "description": "Free tool to convert HTML code to PDF.",
  "applicationCategory": "UtilityApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert HTML to PDF",
  "step": [
    { "@type": "HowToStep", "name": "Paste Code", "text": "Enter your HTML code" },
    { "@type": "HowToStep", "name": "Choose settings", "text": "Select page size and orientation" },
    { "@type": "HowToStep", "name": "Convert", "text": "Click Convert" },
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
