import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-50 dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 w-full" aria-label="Site footer">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">local_hospital</span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Yonsei Chiropractic
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          <nav aria-label="Quick links">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.aboutDrPark')}</Link></li>
              <li><Link to="/message" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.messageFromDrPark')}</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.reviews')}</Link></li>
            </ul>
          </nav>
          <nav aria-label="Chiropractic techniques">
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">{t('footer.techniques')}</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/techniques/about-chiropractic" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.aboutChiropractic')}</Link></li>
              <li><Link to="/techniques/innate-intelligence" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.innateIntelligence')}</Link></li>
              <li><Link to="/techniques/upper-cervical" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.upperCervical')}</Link></li>
              <li><Link to="/techniques/car-accident" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.carAccident')}</Link></li>
              <li><Link to="/techniques/tmj" className="hover:text-primary transition-colors focus:ring-1 focus:ring-primary/20 rounded px-1">{t('nav.tmj')}</Link></li>
            </ul>
          </nav>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <Link 
                href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                external
                className="flex gap-3 group hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 rounded p-1"
                aria-label={t('footer.address')}
              >
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0" aria-hidden="true">location_on</span>
                <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">
                  {t('footer.address')}
                </p>
              </Link>
              <div className="flex gap-2 flex-col sm:flex-row lg:flex-col xl:flex-row">
                <Link 
                  href="tel:2133815500"
                  className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold hover:bg-primary hover:text-white transition-all border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20"
                  aria-label="Call us at (213) 381-5500"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2" aria-hidden="true">call</span>
                  (213) 381-5500
                </Link>
                <Link 
                  href="mailto:yonseichiropractic@gmail.com"
                  className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold hover:bg-primary hover:text-white transition-all border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20"
                  aria-label="Email us at yonseichiropractic@gmail.com"
                >
                  <span className="material-symbols-outlined text-[18px] mr-2" aria-hidden="true">mail</span>
                  {t('footer.email')}
                </Link>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center w-full h-10 px-5 rounded-lg bg-primary hover:bg-orange-600 text-white text-sm font-bold transition-all shadow-sm mt-2 focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
              >
                <span className="mr-2 material-symbols-outlined text-[18px]" aria-hidden="true">calendar_month</span>
                {t('nav.bookAppointment')}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 Yonsei Chiropractic Clinic. {t('footer.rights')}</p>
          <nav className="flex gap-4" aria-label="Legal">
            <Link to="/accessibility" className="hover:text-slate-900 dark:hover:text-slate-300 focus:ring-1 focus:ring-primary/20 rounded px-1">{t('footer.accessibility')}</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-300 focus:ring-1 focus:ring-primary/20 rounded px-1">{t('footer.privacyPolicy')}</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-300 focus:ring-1 focus:ring-primary/20 rounded px-1">{t('footer.termsOfService')}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;