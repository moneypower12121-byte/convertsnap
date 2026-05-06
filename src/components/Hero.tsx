"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Code, FileImage, FileText, Globe } from 'lucide-react';

const MotionDiv = dynamic(
  () => import('motion/react').then(mod => mod.motion.div),
  { ssr: false }
);

export default function Hero() {
  const [count, setCount] = useState(15420);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-light/50 via-bg-main to-bg-main"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-text-secondary mb-8 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-primary font-bold">{count.toLocaleString()}</span> files converted today
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 max-w-4xl mx-auto leading-tight">
            Convert any website or HTML to <Link href="/web-to-pdf" className="text-primary hover:underline">PDF</Link> or <Link href="/web-to-image" className="text-primary hover:underline">Image</Link>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            The fast, free, and simple way to turn web pages into perfect, high-quality documents and screenshots. No signup required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#tools" className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-white text-base font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group">
              Start Converting Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Strip */}
          <div className="pt-8 border-t border-border/50 max-w-3xl mx-auto">
            <p className="text-sm font-medium text-text-muted mb-6 uppercase tracking-wider">Trusted by professionals formatting content for</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-text-secondary"><FileText className="w-6 h-6" /> Reports</div>
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-text-secondary"><FileImage className="w-6 h-6" /> Presentations</div>
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-text-secondary"><Code className="w-6 h-6" /> Snippets</div>
              <div className="flex items-center gap-2 font-heading font-bold text-xl text-text-secondary"><Globe className="w-6 h-6" /> Archives</div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
