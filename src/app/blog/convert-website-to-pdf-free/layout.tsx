import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'How to Convert Any Website to PDF for Free (2025 Guide)',
  description: 'Step-by-step guide to converting any website URL to a PDF file using ConvertSnap. Completely free, no watermark, no software required.',
  alternates: { canonical: 'https://www.convertsnap.net/blog/convert-website-to-pdf-free' },
  openGraph: {
    title: 'How to Convert Any Website to PDF for Free (2025 Guide)',
    description: 'Step-by-step guide to converting any website URL to a PDF file.',
    url: 'https://www.convertsnap.net/blog/convert-website-to-pdf-free',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Convert Any Website to PDF for Free (2025 Guide)",
  "author": { "@type": "Organization", "name": "ConvertSnap" },
  "publisher": { "@type": "Organization", "name": "ConvertSnap", "url": "https://www.convertsnap.net" },
  "datePublished": "2025-01-15",
  "url": "https://www.convertsnap.net/blog/convert-website-to-pdf-free",
  "description": "Step-by-step guide to converting any website URL to a PDF file using ConvertSnap."
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Any Website to PDF for Free",
  "step": [
    {"@type":"HowToStep","name":"Open the tool","text":"Go to convertsnap.net/web-to-pdf"},
    {"@type":"HowToStep","name":"Paste your URL","text":"Enter any website URL into the input field"},
    {"@type":"HowToStep","name":"Choose settings","text":"Select page size (A4/Letter) and orientation"},
    {"@type":"HowToStep","name":"Convert","text":"Click Convert to PDF button"},
    {"@type":"HowToStep","name":"Download","text":"Download your PDF file instantly"}
  ],
  "tool": {"@type":"HowToTool","name":"ConvertSnap Web to PDF — Free"},
  "totalTime": "PT1M"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />
      {children}
    </>
  )
}
