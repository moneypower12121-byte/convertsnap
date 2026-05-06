"use client";
import React from 'react';
import Link from 'next/link';
import { FileImage, FileText, Code, Globe, ArrowRight } from 'lucide-react';

const tools = [
  {
    id: 'web-to-pdf',
    name: 'URL to PDF',
    description: 'Convert any live website into a multipage, print-ready PDF document.',
    icon: Globe,
    color: 'text-primary',
    hoverText: 'group-hover:text-primary',
    hoverBorder: 'hover:border-primary/30',
    bgColor: 'bg-tool-blue',
    badge: 'Popular',
    link: '/web-to-pdf'
  },
  {
    id: 'web-to-image',
    name: 'URL to Image',
    description: 'Capture full-page screenshots of any website in high resolution (PNG/JPG).',
    icon: FileImage,
    color: 'text-accent',
    hoverText: 'group-hover:text-accent',
    hoverBorder: 'hover:border-accent/30',
    bgColor: 'bg-tool-cyan',
    link: '/web-to-image'
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF',
    description: 'Paste raw HTML, CSS, and styling directly to generate perfect PDFs.',
    icon: Code,
    color: 'text-purple-600',
    hoverText: 'group-hover:text-purple-600',
    hoverBorder: 'hover:border-purple-600/30',
    bgColor: 'bg-tool-purple',
    link: '/html-to-pdf'
  },
  {
    id: 'html-to-image',
    name: 'HTML to Image',
    description: 'Render your HTML strings directly into beautiful images instantly.',
    icon: FileText,
    color: 'text-amber-600',
    hoverText: 'group-hover:text-amber-600',
    hoverBorder: 'hover:border-amber-600/30',
    bgColor: 'bg-tool-amber',
    link: '/html-to-image'
  }
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Choose Your Desired Format</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Select the tool that fits your needs. Our engine handles the heavy lifting to give you flawless results every time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={tool.id}>
                <Link href={tool.link} className={`group relative bg-white rounded-2xl border border-border p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden block ${tool.hoverBorder}`}>
                  {/* Hover Background Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full bg-current ${tool.color} -mr-16 -mt-16 pointer-events-none`}></div>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.bgColor} ${tool.color} relative z-10`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {tool.badge && (
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary relative z-10`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className={`text-xl font-bold text-text-primary mb-2 transition-colors relative z-10 ${tool.hoverText}`}>{tool.name}</h3>
                  <p className="text-text-secondary text-sm mb-6 flex-grow relative z-10">{tool.description}</p>
                  
                  <div className={`flex items-center font-medium text-sm mt-auto relative z-10 ${tool.color}`}>
                    Use Tool
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
