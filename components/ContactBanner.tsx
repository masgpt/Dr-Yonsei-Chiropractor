import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';

const ContactBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-900 text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-y-2 gap-x-4 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1">
          <Link 
            href="tel:2133815500" 
            className="flex items-center gap-1.5 hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded shrink-0"
          >
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">call</span>
            (213) 381-5500
          </Link>
          <div className="hidden sm:block h-3 w-[1px] bg-slate-700" aria-hidden="true" />
          <Link 
            href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
            external
            className="flex items-center gap-1.5 hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded text-center sm:text-left"
          >
            <span className="material-symbols-outlined text-[14px] shrink-0" aria-hidden="true">location_on</span>
            <span className="truncate max-w-[200px] sm:max-w-none">{t('footer.address')}</span>
          </Link>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link 
            href="mailto:yonseichiropractic@gmail.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded"
          >
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">mail</span>
            yonseichiropractic@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
