import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';
import ThemeToggle from './ui/ThemeToggle';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-[#0a0f14] border-t border-slate-100 dark:border-slate-800 pt-12 pb-10 w-full transition-colors duration-300" aria-label="Site footer">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">local_hospital</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">
                  Yonsei <span className="text-primary">Chiropractic</span> Clinic
                </h2>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
                  연세 카이로프랙틱
                </span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 pt-2">
              {/* Placeholder for social links if any in future, or just stylized contact info */}
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">Established 2015</div>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-2" aria-label="Quick links">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.about')}</Link></li>
              <li><Link to="/message" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('footer.message')}</Link></li>
              <li><Link to="/reviews" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.reviews')}</Link></li>
            </ul>
          </nav>

          {/* Techniques */}
          <nav className="lg:col-span-3" aria-label="Chiropractic techniques">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">{t('footer.techniques')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/techniques/about-chiropractic" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.aboutChiropractic')}</Link></li>
              <li><Link to="/techniques/innate-intelligence" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.innateIntelligence')}</Link></li>
              <li><Link to="/techniques/upper-cervical" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.upperCervical')}</Link></li>
              <li><Link to="/techniques/car-accident" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.carAccident')}</Link></li>
              <li><Link to="/techniques/tmj" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.tmj')}</Link></li>
            </ul>
          </nav>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-5">
              <Link 
                href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                external
                className="flex gap-3 group text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                aria-label={t('footer.address')}
              >
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0" aria-hidden="true">location_on</span>
                <p className="text-sm leading-snug font-medium">
                  {t('footer.address')}
                </p>
              </Link>
              <div className="flex flex-col gap-3">
                <Link 
                  href="tel:2133815500"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  aria-label="Call us at (213) 381-5500"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">call</span>
                  (213) 381-5500
                </Link>
                <Link 
                  href="mailto:yonseichiropractic@gmail.com"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium"
                  aria-label="Email us at yonseichiropractic@gmail.com"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">mail</span>
                  {t('footer.email')}
                </Link>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center w-full h-11 px-5 rounded-xl bg-primary hover:bg-orange-600 text-white text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-2 active:translate-y-0"
              >
                <span className="mr-2 material-symbols-outlined text-[18px]" aria-hidden="true">calendar_month</span>
                {t('nav.bookAppointment')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-medium text-slate-400 dark:text-slate-500 tracking-wider uppercase">
          <p>© 2026 Yonsei Chiropractic Clinic. {t('footer.rights')}</p>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <nav className="flex items-center gap-6" aria-label="Legal">
              <Link to="/accessibility" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.accessibility')}</Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.privacyPolicy')}</Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">{t('footer.termsOfService')}</Link>
            </nav>
            <div className="hidden sm:block w-px h-4 bg-slate-100 dark:bg-slate-800"></div>
            <ThemeToggle className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;