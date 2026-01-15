import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
      aria-label="Toggle language"
    >
      <span className="material-symbols-outlined text-[18px]">language</span>
      <span className="text-sm font-bold tracking-tight">
        {i18n.language === 'en' ? 'KO' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
