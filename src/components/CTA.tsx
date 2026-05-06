"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-primary px-6 py-16 md:px-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent opacity-20 blur-3xl mix-blend-overlay"></div>
          
          <div className="relative z-10 hidden md:flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <Zap className="w-8 h-8 fill-white/20" />
            </div>
          </div>

          <h2 className="relative z-10 text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            Ready to completely transform your workflow?
          </h2>
          <p className="relative z-10 text-primary-light text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of users who rely on ConvertSnap every day. Start converting your links and code instantly — no registration required.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#tools" className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white text-primary text-lg font-bold hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
              Start Converting
            </a>
            <p className="text-sm text-primary-light sm:hidden mt-2">No sign up required.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
