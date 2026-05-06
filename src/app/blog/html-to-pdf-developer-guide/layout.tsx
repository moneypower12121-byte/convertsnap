import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'HTML to PDF: The Developer\'s Complete Guide (2025)',
  description: 'Complete guide to converting HTML and CSS to PDF using free online tools and REST API.',
  alternates: { canonical: 'https://www.convertsnap.net/blog/html-to-pdf-developer-guide' },
  openGraph: {
    title: 'HTML to PDF: The Developer\'s Complete Guide (2025)',
    description: 'Complete guide to converting HTML and CSS to PDF using free online tools and REST API.',
    url: 'https://www.convertsnap.net/blog/html-to-pdf-developer-guide',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HTML to PDF: The Developer's Complete Guide (2025)",
  "author": { "@type": "Organization", "name": "ConvertSnap" },
  "publisher": { "@type": "Organization", "name": "ConvertSnap", "url": "https://www.convertsnap.net" },
  "datePublished": "2025-01-15",
  "url": "https://www.convertsnap.net/blog/html-to-pdf-developer-guide",
  "description": "Complete guide to converting HTML and CSS to PDF using free online tools and REST API."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      {children}
    </>
  )
}
