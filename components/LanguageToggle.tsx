import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = ['en', 'ko', 'es'];
  const labels: Record<string, string> = {
    en: 'KO',
    ko: 'ES',
    es: 'EN'
  };

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
      aria-label="Toggle language"
    >
      <span className="material-symbols-outlined text-[18px]">language</span>
      <span className="text-sm font-bold tracking-tight">
        {i18n.language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageToggle;
