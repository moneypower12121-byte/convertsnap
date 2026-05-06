import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog & Guides | ConvertSnap',
  description: 'Tips, tutorials and guides on web to PDF conversion, HTML to image tools, and web automation.',
  alternates: { canonical: 'https://www.convertsnap.net/blog' },
  openGraph: {
    title: 'ConvertSnap Blog',
    description: 'Tips, tutorials and guides on web to PDF conversion, HTML to image tools, and web automation.',
    url: 'https://www.convertsnap.net/blog',
  },
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "ConvertSnap Blog",
  "url": "https://www.convertsnap.net/blog",
  "description": "Tips, tutorials and guides on web to PDF conversion, HTML to image tools, and web automation.",
  "publisher": {
    "@type": "Organization",
    "name": "ConvertSnap",
    "url": "https://www.convertsnap.net"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={blogSchema} />
      {children}
    </>
  )
}
