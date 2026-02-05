'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConsent } from './ConsentContext';

const ConsentBanner: React.FC = () => {
  const { t } = useTranslation();
  const { state, isReady, acceptAll, rejectAll, savePreferences } = useConsent();
  const [showOptions, setShowOptions] = useState(false);
  const [draft, setDraft] = useState(state.categories);

  useEffect(() => {
    setDraft(state.categories);
  }, [state.categories]);

  if (!isReady || state.decision) {
    return null;
  }

  const handleToggle = (category: keyof typeof draft) => {
    setDraft((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    savePreferences(draft);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 sm:bottom-6 sm:left-auto sm:right-6 max-w-xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl p-4 sm:p-6 text-sm text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200 z-[999]">
      <p className="font-semibold text-slate-900 dark:text-white">
        {t('consent.banner.title')}
      </p>
      <p className="mt-1 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
        {t('consent.banner.body')}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={acceptAll}
          className="px-4 py-2 rounded-full bg-primary text-white font-semibold text-xs uppercase tracking-[0.2em] shadow-sm hover:bg-orange-600 transition"
        >
          {t('consent.banner.accept')}
        </button>
        <button
          onClick={rejectAll}
          className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 dark:text-slate-200 text-xs uppercase tracking-[0.2em] hover:border-slate-500 transition"
        >
          {t('consent.banner.reject')}
        </button>
        <button
          onClick={() => setShowOptions((prev) => !prev)}
          className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 dark:text-slate-200 text-xs uppercase tracking-[0.2em] hover:border-slate-500 transition"
        >
          {t('consent.banner.manage')}
        </button>
      </div>
      {showOptions && (
        <div className="mt-4 border border-slate-100 rounded-2xl p-4 space-y-3 dark:border-slate-800">
          {(['analytics', 'marketing', 'preferences'] as const).map((category) => (
            <label
              key={category}
              className="flex items-center justify-between gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300"
            >
              {t(`consent.banner.${category}`)}
              <input
                type="checkbox"
                checked={draft[category]}
                onChange={() => handleToggle(category)}
                className="w-4 h-4 accent-primary"
              />
            </label>
          ))}
          <button
            onClick={handleSave}
            className="w-full mt-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition"
          >
            {t('consent.banner.save')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ConsentBanner;
