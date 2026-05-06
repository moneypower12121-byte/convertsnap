#!/bin/bash
mkdir -p src/app/web-to-pdf
mkdir -p src/app/web-to-image
mkdir -p src/app/html-to-pdf
mkdir -p src/app/html-to-image
mkdir -p src/app/blog/convert-website-to-pdf-free
mkdir -p src/app/blog/html-to-pdf-developer-guide
mkdir -p src/app/blog/full-page-screenshot-website-free
mkdir -p src/app/blog/generate-og-images-html-css
mkdir -p src/app/blog/automate-url-to-pdf-api
mkdir -p src/app/blog/pdf-vs-image-web-conversion
mkdir -p src/app/documentation
mkdir -p src/app/faq
mkdir -p src/app/privacy
mkdir -p src/app/terms
mkdir -p src/app/cookies
mkdir -p src/app/contact
mkdir -p src/app/api/convert

cp src-old/pages/Home.tsx src/app/page.tsx
cp src-old/pages/WebToPdf.tsx src/app/web-to-pdf/page.tsx
cp src-old/pages/WebToImage.tsx src/app/web-to-image/page.tsx
cp src-old/pages/HtmlToPdf.tsx src/app/html-to-pdf/page.tsx
cp src-old/pages/HtmlToImage.tsx src/app/html-to-image/page.tsx
cp src-old/pages/Blog.tsx src/app/blog/page.tsx
cp src-old/pages/blog/ArticleWebToPdf.tsx src/app/blog/convert-website-to-pdf-free/page.tsx
cp src-old/pages/blog/ArticleHtmlToPdf.tsx src/app/blog/html-to-pdf-developer-guide/page.tsx
cp src-old/pages/blog/ArticleWebToImage.tsx src/app/blog/full-page-screenshot-website-free/page.tsx
cp src-old/pages/blog/ArticleHtmlToImage.tsx src/app/blog/generate-og-images-html-css/page.tsx
cp src-old/pages/blog/ArticleApi.tsx src/app/blog/automate-url-to-pdf-api/page.tsx
cp src-old/pages/blog/ArticlePdfVsImage.tsx src/app/blog/pdf-vs-image-web-conversion/page.tsx

cp src-old/pages/Documentation.tsx src/app/documentation/page.tsx
cp src-old/pages/Faq.tsx src/app/faq/page.tsx
cp src-old/pages/PrivacyPolicy.tsx src/app/privacy/page.tsx
cp src-old/pages/TermsOfService.tsx src/app/terms/page.tsx
cp src-old/pages/CookiePolicy.tsx src/app/cookies/page.tsx
cp src-old/pages/Contact.tsx src/app/contact/page.tsx

cp -r src-old/components src/
cp -r src-old/lib src/ || true
cp -r src-old/assets src/ || true

# Next.js fixes:
# Replace react-router-dom Link
find src/app src/components -type f -name "*.tsx" -exec sed -i 's/import { Link } from '\''react-router-dom'\''/import Link from '\''next\/link'\''/g' {} +
find src/app src/components -type f -name "*.tsx" -exec sed -i 's/import { Link, useLocation } from '\''react-router-dom'\''/import Link from '\''next\/link'\''; import { usePathname } from '\''next\/navigation'\''/g' {} +
find src/app src/components -type f -name "*.tsx" -exec sed -i 's/useLocation()/usePathname()/g' {} +
find src/app src/components -type f -name "*.tsx" -exec sed -i 's/pathname/pathname/g' {} + # just dummy
find src/app src/components -type f -name "*.tsx" -exec sed -i 's/import { Helmet } from '\''react-helmet-async'\''//g' {} +

# Add "use client" to tools and contact
sed -i '1i"use client";' src/app/web-to-pdf/page.tsx
sed -i '1i"use client";' src/app/web-to-image/page.tsx
sed -i '1i"use client";' src/app/html-to-pdf/page.tsx
sed -i '1i"use client";' src/app/html-to-image/page.tsx
sed -i '1i"use client";' src/app/contact/page.tsx

# Need to replace <Helmet> elements. We can do simple replacement of <Helmet> block with nothing for now or extract.
# A quick sed to remove <Helmet>...</Helmet> blocks since we will use App router metadata or just let Next.js handle it.
# Actually, multiline sed is hard. I'll just leave it and run a script to remove it.
