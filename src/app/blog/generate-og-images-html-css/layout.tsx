import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'How to Generate Open Graph (OG) Images Using HTML and CSS',
  description: 'Create beautiful Open Graph og:image previews for Twitter, Facebook, and LinkedIn using simple HTML and CSS.',
  alternates: { canonical: 'https://www.convertsnap.net/blog/generate-og-images-html-css' },
  openGraph: {
    title: 'How to Generate Open Graph (OG) Images Using HTML and CSS',
    description: 'Create beautiful Open Graph og:image previews using simple HTML and CSS.',
    url: 'https://www.convertsnap.net/blog/generate-og-images-html-css',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Generate Open Graph (OG) Images Using HTML and CSS",
  "author": { "@type": "Organization", "name": "ConvertSnap" },
  "publisher": { "@type": "Organization", "name": "ConvertSnap", "url": "https://www.convertsnap.net" },
  "datePublished": "2025-01-15",
  "url": "https://www.convertsnap.net/blog/generate-og-images-html-css",
  "description": "Create beautiful Open Graph og:image previews for Twitter, Facebook, and LinkedIn using simple HTML and CSS."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      {children}
    </>
  )
}
