'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-3xl font-black tracking-tight">{t('privacyPolicyPage.title')}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('privacyPolicyPage.intro')}
        </p>
        <section className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-xl font-semibold tracking-wide">{t('privacyPolicyPage.sections.data.heading')}</h2>
          <p>{t('privacyPolicyPage.sections.data.body')}</p>
          <h2 className="text-xl font-semibold tracking-wide">{t('privacyPolicyPage.sections.use.heading')}</h2>
          <p>{t('privacyPolicyPage.sections.use.body')}</p>
          <h2 className="text-xl font-semibold tracking-wide">{t('privacyPolicyPage.sections.share.heading')}</h2>
          <p>{t('privacyPolicyPage.sections.share.body')}</p>
        </section>
        <section className="text-sm text-slate-600 dark:text-slate-300">
          <p className="font-semibold">{t('privacyPolicyPage.contact.title')}</p>
          <p>{t('privacyPolicyPage.contact.body')}</p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
