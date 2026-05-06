import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'HTML to Image Converter — Render HTML Code to PNG/JPG',
  description: 'Convert raw HTML code and CSS directly to a perfect PNG or JPG image. Create snippets, design mockups, and generate visual assets directly from code.',
  alternates: { canonical: 'https://www.convertsnap.net/html-to-image' },
  openGraph: {
    title: 'HTML to Image Converter — Render HTML Code to PNG/JPG',
    description: 'Convert raw HTML code and CSS directly to a perfect PNG or JPG image.',
    url: 'https://www.convertsnap.net/html-to-image',
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "HTML to Image Converter",
  "url": "https://www.convertsnap.net/html-to-image",
  "description": "Free tool to convert HTML code to Image.",
  "applicationCategory": "UtilityApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert HTML to Image",
  "step": [
    { "@type": "HowToStep", "name": "Paste Code", "text": "Enter your HTML code" },
    { "@type": "HowToStep", "name": "Choose settings", "text": "Select page size and orientation" },
    { "@type": "HowToStep", "name": "Convert", "text": "Click Convert" },
    { "@type": "HowToStep", "name": "Download", "text": "Download your image file" }
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
