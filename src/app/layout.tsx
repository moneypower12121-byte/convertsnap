import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | ConvertSnap',
    default: 'ConvertSnap — Free Web to PDF & Image Converter',
  },
  description: 'Convert any website URL or HTML to PDF or image free. No signup. Fast and accurate.',
  metadataBase: new URL('https://www.convertsnap.net'),
  openGraph: {
    siteName: 'ConvertSnap',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@convertsnap',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans flex flex-col min-h-screen bg-bg-main relative text-text-primary">
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
        <ScrollToTopButton />
        
        {/* Global JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ConvertSnap",
              "url": "https://www.convertsnap.net",
              "description": "Convert any website URL or HTML to PDF or image free. No signup. Fast and accurate.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.convertsnap.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
