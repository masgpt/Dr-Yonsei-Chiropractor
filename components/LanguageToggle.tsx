import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KO' },
    { code: 'es', label: 'ES' },
  ];

  const currentLanguage = i18n.language.split('-')[0];

  return (
    <div className="flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-inner w-fit">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`
            px-3 py-1 rounded-full text-[11px] font-bold tracking-tight transition-all duration-200 min-w-[40px]
            ${currentLanguage === lang.code 
              ? 'bg-white dark:bg-slate-600 text-primary shadow-sm ring-1 ring-slate-200/50 dark:ring-slate-500/50' 
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
