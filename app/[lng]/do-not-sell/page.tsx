'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useConsent } from '../../components/consent/ConsentContext';

const DoNotSellPage: React.FC = () => {
  const { t } = useTranslation();
  const { state, savePreferences, isGPCOptedOut } = useConsent();

  const isOptedOut = isGPCOptedOut || (!state.categories.marketing && !state.categories.analytics);

  const handleOptOut = () => {
    savePreferences({
      ...state.categories,
      marketing: false,
      analytics: false,
    });
  };

  const handleOptIn = () => {
    savePreferences({
      ...state.categories,
      marketing: true,
      analytics: true,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0f14] text-slate-900 dark:text-slate-100 py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-12 mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 uppercase">
            {t('doNotSellPage.title')}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">
            <span>{t('doNotSellPage.updated')}</span>
            <span className="hidden sm:block text-slate-300 dark:text-slate-700">|</span>
            <span>{t('common.companyName')}</span>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16 font-medium">
            {t('doNotSellPage.intro')}
          </p>

          <div className="space-y-16">
            <section className="group">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                {t('doNotSellPage.definition.title')}
              </h2>
              <div className="h-1 w-12 bg-primary/20 mb-6 group-hover:w-24 transition-all duration-500"></div>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('doNotSellPage.definition.body')}
              </p>
            </section>

            <section className="group">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                {t('doNotSellPage.yourRight.title')}
              </h2>
              <div className="h-1 w-12 bg-primary/20 mb-6 group-hover:w-24 transition-all duration-500"></div>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('doNotSellPage.yourRight.body')}
              </p>
            </section>

            <section className="mt-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">
                {t('doNotSellPage.control.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className={`w-3 h-3 rounded-full ${isOptedOut ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`}></div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {t('doNotSellPage.control.status')}
                    </p>
                    <p className="text-lg font-bold">
                      {isOptedOut ? t('doNotSellPage.control.optedOut') : t('doNotSellPage.control.optedIn')}
                    </p>
                  </div>
                </div>

                {isGPCOptedOut && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-medium border border-blue-100 dark:border-blue-800/50 flex items-center gap-3">
                    <span className="material-symbols-outlined">security</span>
                    {t('doNotSellPage.control.gpcActive')}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 pt-4">
                  {!isOptedOut ? (
                    <button
                      onClick={handleOptOut}
                      className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg active:scale-95 uppercase tracking-widest text-sm"
                    >
                      {t('doNotSellPage.control.buttonOptOut')}
                    </button>
                  ) : (
                    <button
                      onClick={handleOptIn}
                      className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95 uppercase tracking-widest text-sm"
                    >
                      {t('doNotSellPage.control.buttonOptIn')}
                    </button>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DoNotSellPage;
