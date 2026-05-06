import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Web Automation: Convert URLs to PDF Automatically Using an API',
  description: 'Learn how to automate website to PDF conversions using REST API. Includes Node.js, Python, and PHP examples to generate PDFs programmatically.',
  alternates: { canonical: 'https://www.convertsnap.net/blog/automate-url-to-pdf-api' },
  openGraph: {
    title: 'Web Automation: Convert URLs to PDF Automatically Using an API',
    description: 'Learn how to automate website to PDF conversions using REST API.',
    url: 'https://www.convertsnap.net/blog/automate-url-to-pdf-api',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Web Automation: Convert URLs to PDF Automatically Using an API",
  "author": { "@type": "Organization", "name": "ConvertSnap" },
  "publisher": { "@type": "Organization", "name": "ConvertSnap", "url": "https://www.convertsnap.net" },
  "datePublished": "2025-01-15",
  "url": "https://www.convertsnap.net/blog/automate-url-to-pdf-api",
  "description": "Learn how to automate website to PDF conversions using REST API. Includes Node.js, Python, and PHP examples to generate PDFs programmatically."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      {children}
    </>
  )
}
