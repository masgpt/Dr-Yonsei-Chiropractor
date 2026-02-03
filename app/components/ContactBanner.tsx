"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';
import LanguageToggle from './LanguageToggle';

interface ContactBannerProps {
  lng?: string;
}

const ContactBanner: React.FC<ContactBannerProps> = ({ lng }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-900 dark:bg-[#05080a] text-white py-1.5 sm:py-2 px-6 border-b border-white/5 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto flex justify-center sm:justify-between items-center gap-x-8 text-[10px] font-bold tracking-[0.05em] uppercase">
        <div className="hidden sm:flex flex-wrap justify-start items-center gap-x-6 gap-y-1.5">
          <Link 
            href="tel:2133815500" 
            className="flex items-center gap-2 hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded shrink-0 group"
          >
            <span className="material-symbols-outlined text-[15px] text-primary group-hover:scale-110 transition-transform" aria-hidden="true">call</span>
            <span>(213) 381-5500</span>
          </Link>
          <div className="hidden sm:block h-3 w-px bg-white/10" aria-hidden="true" />
          <Link 
            href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
            external
            className="flex items-center gap-2 hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded group"
          >
            <span className="material-symbols-outlined text-[15px] text-primary shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">location_on</span>
            <span className="truncate max-w-[200px] sm:max-w-none">{t('footer.address')}</span>
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <Link 
            href="mailto:yonseichiropractic@gmail.com"
            className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded group"
          >
            <span className="material-symbols-outlined text-[15px] text-primary group-hover:scale-110 transition-transform" aria-hidden="true">mail</span>
            <span>yonseichiropractic@gmail.com</span>
          </Link>
          <div className="hidden sm:block h-3 w-px bg-white/10" aria-hidden="true" />
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
