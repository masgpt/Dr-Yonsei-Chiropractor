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
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">{t('cookiePolicyPage.sections.cookies.heading')}</h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <p className="font-semibold">{t('cookiePolicyPage.sections.cookies.language.label')}</p>
              <p>{t('cookiePolicyPage.sections.cookies.language.description')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('cookiePolicyPage.sections.cookies.theme.label')}</p>
              <p>{t('cookiePolicyPage.sections.cookies.theme.description')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('cookiePolicyPage.sections.cookies.fonts.label')}</p>
              <p>{t('cookiePolicyPage.sections.cookies.fonts.description')}</p>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide">{t('cookiePolicyPage.sections.thirdParty.heading')}</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-2">
            <li>
              <strong>Google Fonts</strong> (Lexend, Noto Sans, Material Symbols) — retrieves fonts from fonts.googleapis.com/fonts.gstatic.com and receives the visitor’s IP, user agent, and referrer at each visit.
            </li>
            <li>
              <strong>Google Maps embed</strong> — the iframe at contact pages loads from maps.google.com and transmits the patient-facing coordinates plus click interactions.
            </li>
            <li>
              <strong>Googleusercontent photos</strong> — images under the hero and review sections are hosted on lh3.googleusercontent.com and load cookies when the page renders.
            </li>
          </ul>
        </section>
        <section className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p>
            {t('cookiePolicyPage.sections.choices')}
          </p>
          <p>
            {t('cookiePolicyPage.sections.contact')}
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
