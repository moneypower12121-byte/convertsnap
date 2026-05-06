import React from 'react';
import Link from 'next/link';
import { Link2, FileImage, Code, FileText, ArrowRight } from 'lucide-react';

export const TOOL_CARDS = [
  {
    id: 'web-to-pdf',
    name: 'Web to PDF',
    desc: 'Convert live websites into multi-page PDFs.',
    link: '/web-to-pdf',
    icon: Link2,
    className: 'hover:border-primary/40 hover:shadow-xl hover:bg-blue-50/30',
    iconClassName: 'bg-blue-50 text-primary border-blue-100',
    textClassName: 'group-hover:text-primary text-primary',
  },
  {
    id: 'web-to-image',
    name: 'Web to Image',
    desc: 'Capture full-page screenshots of any website in high resolution.',
    link: '/web-to-image',
    icon: FileImage,
    className: 'hover:border-[#06B6D4]/40 hover:shadow-xl hover:bg-cyan-50/30',
    iconClassName: 'bg-cyan-50 text-accent border-cyan-100',
    textClassName: 'group-hover:text-accent text-accent',
  },
  {
    id: 'html-to-pdf',
    name: 'HTML to PDF',
    desc: 'Paste raw HTML, CSS, and styling directly to generate perfect PDFs.',
    link: '/html-to-pdf',
    icon: Code,
    className: 'hover:border-purple-600/40 hover:shadow-xl hover:bg-purple-50/30',
    iconClassName: 'bg-purple-50 text-purple-600 border-purple-100',
    textClassName: 'group-hover:text-purple-600 text-purple-600',
  },
  {
    id: 'html-to-image',
    name: 'HTML to Image',
    desc: 'Render your HTML strings directly into beautiful images instantly.',
    link: '/html-to-image',
    icon: FileText,
    className: 'hover:border-amber-600/40 hover:shadow-xl hover:bg-amber-50/30',
    iconClassName: 'bg-amber-50 text-amber-600 border-amber-100',
    textClassName: 'group-hover:text-amber-600 text-amber-600',
  }
];

export default function OtherTools({ currentToolId, className = "py-20 bg-bg-main border-t border-border" }: { currentToolId: string, className?: string }) {
  const tools = TOOL_CARDS.filter(t => t.id !== currentToolId).slice(0, 3);
  
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-12">Try Our Other Free Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((t) => {
            const Icon = t.icon;
            // Using a separate hover text class
            const hoverText = t.textClassName.split(' ')[0] || '';
            const standardText = t.textClassName.split(' ')[1] || hoverText;
            
            return (
              <Link key={t.id} href={t.link} className={`group p-6 rounded-2xl border border-border bg-white transition-all duration-300 flex flex-col h-full ${t.className}`}>
                <div className={`w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mb-4 border ${t.iconClassName}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`font-bold text-xl text-text-primary transition-colors mb-2 ${hoverText}`}>{t.name}</h3>
                <p className="text-text-secondary mb-4 flex-grow">{t.desc}</p>
                <div className={`flex items-center font-medium text-sm mt-auto ${standardText} ${hoverText}`}>
                  Use Tool <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
