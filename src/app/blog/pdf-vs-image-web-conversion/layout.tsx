import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'PDF vs Image: When to Use Web to PDF vs Web to Image',
  description: 'ConvertSnap gives you two ways to save a website: as a PDF file or as an image (PNG/JPG). This guide will help you decide which one to use.',
  alternates: { canonical: 'https://www.convertsnap.net/blog/pdf-vs-image-web-conversion' },
  openGraph: {
    title: 'PDF vs Image: When to Use Web to PDF vs Web to Image',
    description: 'ConvertSnap gives you two ways to save a website: as a PDF file or as an image (PNG/JPG).',
    url: 'https://www.convertsnap.net/blog/pdf-vs-image-web-conversion',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PDF vs Image: When to Use Web to PDF and When to Use Web to Image",
  "author": { "@type": "Organization", "name": "ConvertSnap" },
  "publisher": { "@type": "Organization", "name": "ConvertSnap", "url": "https://www.convertsnap.net" },
  "datePublished": "2025-01-15",
  "url": "https://www.convertsnap.net/blog/pdf-vs-image-web-conversion"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      {children}
    </>
  )
}
