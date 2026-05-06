import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Tools from '../components/Tools';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ConvertSnap - Convert Websites & HTML to PDF or Image Instantly</title>
        <meta name="description" content="ConvertSnap is a free online tool to convert any website URL or HTML code into high-quality PDF documents or images (PNG/JPG). No signup required." />
        <link rel="canonical" href="https://convertsnap.net/" />
      </Helmet>
      
      <main className="flex-grow">
        <Hero />
        <Tools />
        <HowItWorks />
        <Stats />
        <Features />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
