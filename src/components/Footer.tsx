"use client";
import React from 'react';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Zap className="w-5 h-5 fill-white/20" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Convert<span className="text-primary-light">Snap</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              The fastest way to convert any website or raw HTML into gorgeous PDFs and high-fidelity images. Built for speed, precision, and ease of use.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Tools</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/web-to-pdf" className="text-slate-400 hover:text-white transition-colors">Web to PDF</Link></li>
              <li><Link href="/web-to-image" className="text-slate-400 hover:text-white transition-colors">Web to Image</Link></li>
              <li><Link href="/html-to-pdf" className="text-slate-400 hover:text-white transition-colors">HTML to PDF</Link></li>
              <li><Link href="/html-to-image" className="text-slate-400 hover:text-white transition-colors">HTML to Image</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Resources</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/documentation" className="text-slate-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ & Support</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ConvertSnap. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-2 h-2 rounded-full bg-success"></span> All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
