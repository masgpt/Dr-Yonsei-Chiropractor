'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <h1 className="text-3xl font-black tracking-tight">{t('termsPage.title')}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('termsPage.intro')}
        </p>
        <section className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>{t('termsPage.sections.use')}</p>
          <p>{t('termsPage.sections.disclaimer')}</p>
          <p>{t('termsPage.sections.contact')}</p>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
