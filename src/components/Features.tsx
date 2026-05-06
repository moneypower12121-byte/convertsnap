"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Layout, Zap, Lock, PaintBucket, MonitorSmartphone, Code2 } from 'lucide-react';

const features = [
  {
    icon: Layout,
    title: 'Pixel-Perfect Rendering',
    description: 'Our engine uses the latest Chromium technology to ensure your documents look exactly like the original website.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Most conversions finish in under 3 seconds. Say goodbye to loading bars and waiting.'
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'We do not store your files. All generated PDFs and images are permanently deleted from our servers immediately after download.'
  },
  {
    icon: PaintBucket,
    title: 'Advanced Customization',
    description: 'Inject custom CSS, remove backgrounds, adjust viewport sizes, or add custom headers and footers to your PDFs.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Emulation',
    description: 'Convert websites as they appear on mobile phones, tablets, or full-width desktop monitors.'
  },
  {
    icon: Code2,
    title: 'No Watermarks',
    description: 'Get clean, professional PDFs and images without any watermarks or branding, completely free.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Everything You Need</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Packed with powerful features to give you complete control over your conversions, whether you are a casual user or a developer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-bg-main border border-border hover:border-primary/40 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center text-primary mb-6 group-hover:bg-primary-light group-hover:text-primary-dark transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
