import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'ko', label: '한국어' },
  ];

  const currentLanguage = i18n.language ? i18n.language.split('-')[0] : 'en';

  return (
    <div className="flex items-center p-0.5 rounded-full bg-black/20 dark:bg-white/10 border border-white/10 backdrop-blur-sm w-fit">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`
            px-3 py-1 rounded-full text-[9px] font-black tracking-widest transition-all duration-300 min-w-[60px]
            ${currentLanguage === lang.code 
              ? 'bg-primary text-white shadow-lg shadow-primary/20' 
              : 'text-white/60 hover:text-white hover:bg-white/5'}
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
