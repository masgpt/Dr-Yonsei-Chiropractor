'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const CookiePolicyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="text-3xl font-black tracking-tight">{t('cookiePolicyPage.title')}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {t('cookiePolicyPage.intro')}
        </p>
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-wide">{t('cookiePolicyPage.sections.cookies.heading')}</h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <p className="font-semibold">{t('cookiePolicyPage.sections.cookies.language.label')}</p>
              <p>{t('cookiePolicyPage.sections.cookies.language.description')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('cookiePolicyPage.sections.cookies.theme.label')}</p>
              <p>{t('cookiePolicyPage.sections.cookies.theme.description')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('cookiePolicyPage.sections.cookies.consent.label')}</p>
              <p>{t('cookiePolicyPage.sections.cookies.consent.description')}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">{t('cookiePolicyPage.sections.thirdParty.heading')}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('cookiePolicyPage.sections.thirdParty.choices')}
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-2">
            <li>{t('cookiePolicyPage.sections.thirdParty.maps')}</li>
            <li>{t('cookiePolicyPage.sections.thirdParty.fonts')}</li>
            <li>{t('cookiePolicyPage.sections.thirdParty.assets')}</li>
          </ul>
        </section>

        <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300">
          <p>{t('cookiePolicyPage.sections.choices')}</p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
