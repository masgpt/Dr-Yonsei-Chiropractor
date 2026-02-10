'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();

  const sections = ['data', 'sensitive', 'use', 'share', 'ai', 'children', 'international', 'retention'];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0f14] text-slate-900 dark:text-slate-100 py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-12 mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 uppercase">
            {t('privacyPolicyPage.title')}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">
            <span>{t('privacyPolicyPage.updated') || 'Last Updated: February 9, 2026'}</span>
            <span className="hidden sm:block text-slate-300 dark:text-slate-700">|</span>
            <span>{t('common.companyName')}</span>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16 font-medium">
            {t('privacyPolicyPage.intro')}
          </p>

          <div className="space-y-16">
            {sections.map((sectionKey) => (
              <section key={sectionKey} className="group">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                  {t(`privacyPolicyPage.sections.${sectionKey}.heading`)}
                </h2>
                <div className="h-1 w-12 bg-primary/20 mb-6 group-hover:w-24 transition-all duration-500"></div>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t(`privacyPolicyPage.sections.${sectionKey}.body`)}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">
              {t('privacyPolicyPage.contact.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {t('privacyPolicyPage.contact.body')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:2133815500"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                (213) 381-5500
              </a>
              <a
                href="mailto:yonseichiropractic@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
                Email Privacy Team
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
