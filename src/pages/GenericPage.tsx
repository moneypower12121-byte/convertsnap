import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function GenericPage() {
  const location = useLocation();
  const path = location.pathname.split('/')[1] || '';
  const title = path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      <Helmet>
        <title>{title} | ConvertSnap</title>
      </Helmet>
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          <h1 className="text-3xl font-bold text-text-primary font-heading mb-6">{title}</h1>
          <div className="prose prose-slate max-w-none text-text-secondary">
            <p className="leading-relaxed mb-4">
              This {title} page is currently being updated. Please check back later for the comprehensive details regarding our {title.toLowerCase()}.
            </p>
            <p className="leading-relaxed">
              If you have any urgent questions, feel free to reach out to our support team.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
