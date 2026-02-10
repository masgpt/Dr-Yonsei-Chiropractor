'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    'acceptance',
    'eligibility',
    'services',
    'ip',
    'conduct',
    'thirdParty',
    'liability',
    'indemnity',
    'dispute',
    'changes',
    'communications',
    'contact'
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0f14] text-slate-900 dark:text-slate-100 py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-12 mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 uppercase">
            {t('termsPage.title')}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">
            <span>{t('termsPage.updated')}</span>
            <span className="hidden sm:block text-slate-300 dark:text-slate-700">|</span>
            <span>{t('common.companyName')}</span>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16 font-medium">
            {t('termsPage.intro')}
          </p>

          <div className="space-y-16">
            {sections.map((sectionKey) => (
              <section key={sectionKey} className="group">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 group-hover:text-primary transition-colors">
                  {t(`termsPage.sections.${sectionKey}.title`)}
                </h2>
                <div className="h-1 w-12 bg-primary/20 mb-6 group-hover:w-24 transition-all duration-500"></div>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(`termsPage.sections.${sectionKey}.body`)}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-24 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider font-bold">
            Still have questions?
          </p>
          <a
            href="mailto:yonseichiropractic@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            Contact Legal Team
          </a>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
