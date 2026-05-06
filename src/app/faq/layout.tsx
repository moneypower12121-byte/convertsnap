import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — ConvertSnap',
  description: 'Find answers about using ConvertSnap, file privacy, API limits, and supported formats. 100% free online PDF and Image converter.',
  alternates: { canonical: 'https://www.convertsnap.net/faq' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is ConvertSnap really free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100% free. No account, no credit card, no limits." }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account?",
      "acceptedAnswer": { "@type": "Answer", "text": "No account needed. Paste your URL and download instantly." }
    },
    {
      "@type": "Question",
      "name": "How long are files stored?",
      "acceptedAnswer": { "@type": "Answer", "text": "All files are auto-deleted after 60 minutes." }
    },
    {
      "@type": "Question",
      "name": "How many files can I convert per day?",
      "acceptedAnswer": { "@type": "Answer", "text": "There is no daily limit. Convert as many files as you need." }
    },
    {
      "@type": "Question",
      "name": "What browsers does ConvertSnap support?",
      "acceptedAnswer": { "@type": "Answer", "text": "Chrome, Firefox, Safari, Edge, and all modern mobile browsers are supported." }
    },
    {
      "@type": "Question",
      "name": "Is my HTML code kept private?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your code is processed server-side and deleted immediately after conversion. We do not log or store your code." }
    },
    {
      "@type": "Question",
      "name": "Is ConvertSnap GDPR compliant?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We collect minimal data, delete files within 60 minutes, and never sell user data. See our Privacy Policy for details." }
    },
    {
      "@type": "Question",
      "name": "Does it support websites with JavaScript?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. It uses a headless browser to render JavaScript, including SPA apps in React, Vue, Angular." }
    },
    {
      "@type": "Question",
      "name": "Does it capture popups or cookie banners?",
      "acceptedAnswer": { "@type": "Answer", "text": "It captures the page exactly as-is. If the page displays a banner, it will show in the capture." }
    },
    {
      "@type": "Question",
      "name": "Can I convert pages behind a login?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. ConvertSnap cannot access URLs requiring a password. Use the HTML converter instead." }
    },
    {
      "@type": "Question",
      "name": "What happens if a website blocks bots?",
      "acceptedAnswer": { "@type": "Answer", "text": "If a site uses strict anti-bot protections (like Cloudflare Turnstile), the conversion may fail with a 403 error." }
    },
    {
      "@type": "Question",
      "name": "Can I use custom Google Fonts?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Paste the Google Fonts <link> directly into the HTML converter head section." }
    },
    {
      "@type": "Question",
      "name": "Can I use Tailwind CSS or Bootstrap?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Enable \"Include External CSS\" and paste the CDN URL for Tailwind or Bootstrap." }
    },
    {
      "@type": "Question",
      "name": "Does it support SVG images?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, inline SVGs are fully supported in the HTML converter." }
    },
    {
      "@type": "Question",
      "name": "Are there API limits for the free REST API?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free API keys are limited to 200 conversions per month." }
    }
  ]
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
