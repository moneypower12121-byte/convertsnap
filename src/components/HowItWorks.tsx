"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Link, Settings, Download } from 'lucide-react';

const steps = [
  {
    icon: Link,
    title: '1. Paste Your Content',
    description: 'Simply paste the URL of the website or the raw HTML code you want to convert into our input field.'
  },
  {
    icon: Settings,
    title: '2. Configure Settings',
    description: 'Adjust the output format, page size, margins, and wait times to get the exact result you need.'
  },
  {
    icon: Download,
    title: '3. Download & Done',
    description: 'Click convert and your high-quality PDF or Image will be instantly ready for download.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">How It Works</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Three simple steps to convert any web content into the format you need. No technical skills required.</p>
        </div>

        <div className="flex flex-col md:flex-row relative z-10 gap-8 lg:gap-12 pl-4 md:pl-0">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-border border-dashed border-t-2 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-1 relative z-10 border-l-2 md:border-l-0 border-border md:border-none pl-8 md:pl-0 pb-8 md:pb-0 last:pb-0 last:border-none"
              >
                {/* Mobile Connector Dot */}
                <div className="md:hidden absolute top-0 -left-[11px] w-[20px] h-[20px] rounded-full bg-white border-4 border-primary"></div>

                <div className="flex flex-col items-start md:items-center text-left md:text-center h-full">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-border flex items-center justify-center text-primary mb-6 relative group">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed max-w-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
