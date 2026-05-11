"use client";
import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Conversion Speed', value: '< 3s' },
  { label: 'Uptime Guarantee', value: '99.9%' },
  { label: 'Success Rate', value: '99.8%' },
  { label: 'Conversion Cost', value: '$0' }
];

export default function Stats() {
  return (
    <section className="bg-bg-dark py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-dark/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-3xl md:text-5xl font-bold font-heading text-white mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
