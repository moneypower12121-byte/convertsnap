import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'How to Take a Full-Page Screenshot of Any Website for Free (2025)',
  description: 'Learn how to take a perfect full-page screenshot of any website completely free, without installing any browser extension or software.',
  alternates: { canonical: 'https://www.convertsnap.net/blog/full-page-screenshot-website-free' },
  openGraph: {
    title: 'How to Take a Full-Page Screenshot of Any Website for Free (2025)',
    description: 'Learn how to take a perfect full-page screenshot of any website completely free.',
    url: 'https://www.convertsnap.net/blog/full-page-screenshot-website-free',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Take a Full-Page Screenshot of Any Website for Free (2025)",
  "author": { "@type": "Organization", "name": "ConvertSnap" },
  "publisher": { "@type": "Organization", "name": "ConvertSnap", "url": "https://www.convertsnap.net" },
  "datePublished": "2025-01-15",
  "url": "https://www.convertsnap.net/blog/full-page-screenshot-website-free",
  "description": "Learn how to take a perfect full-page screenshot of any website completely free, without installing any browser extension or software."
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Take a Full-Page Screenshot of Any Website for Free",
  "step": [
    {"@type":"HowToStep","name":"Open the tool","text":"Go to convertsnap.net/web-to-image"},
    {"@type":"HowToStep","name":"Paste URL","text":"Enter the website URL you want to screenshot"},
    {"@type":"HowToStep","name":"Choose format","text":"Select PNG or JPG and resolution"},
    {"@type":"HowToStep","name":"Screenshot","text":"Click Take Screenshot"},
    {"@type":"HowToStep","name":"Download","text":"Download your image file"}
  ],
  "tool": {"@type":"HowToTool","name":"ConvertSnap Web to Image — Free"},
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
