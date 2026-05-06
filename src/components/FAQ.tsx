"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is ConvertSnap really free?',
    answer: 'Yes! ConvertSnap is 100% free for manual use on our website. We do not require you to create an account or provide a credit card to convert your files.'
  },
  {
    question: 'How long are my files stored?',
    answer: 'We prioritize your privacy. All generated files are automatically and permanently deleted from our servers within 15 minutes of generation. We do not keep logs of your converted content.'
  },
  {
    question: 'Can I use this for commercial purposes?',
    answer: 'Absolutely. Any PDF or Image you generate using ConvertSnap can be used for both personal and commercial projects without any attribution required.'
  },
  {
    question: 'What is the maximum file size or page length?',
    answer: 'Our engine can handle very long web pages. However, to ensure system stability, conversions are capped at a 30-second rendering timeout. Very heavy or infinite-scroll pages might be truncated.'
  },
  {
    question: 'Do you offer an API for developers?',
    answer: 'Yes, we offer a robust REST API for developers who need to automate conversions at scale. The API has a generous free tier and affordable premium plans for heavy usage.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-bg-main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-text-secondary">Have question? We have answers.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-slate-50 transition-colors hover:bg-slate-50"
              >
                <span className="text-lg font-semibold text-text-primary pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-transparent">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
