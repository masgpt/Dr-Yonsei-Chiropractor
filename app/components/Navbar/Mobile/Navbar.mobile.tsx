import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../ui/Link';
import { useNavbarConstants } from '../Shared/navbar.constants';
import { useNavbarLogic } from '../Shared/navbar.hooks';
import LanguageToggle from '../../LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarMobile: React.FC = () => {
  const { t } = useTranslation();
  const { techniques, aboutLinks, lng } = useNavbarConstants();
  const { isActive, pathname } = useNavbarLogic();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close menu on ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-[#0a0f14]/95 backdrop-blur-md transition-colors duration-300 lg:hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo Section */}
          <Link to={`/${lng}/`} className="flex flex-col items-start focus:ring-offset-4 group shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 overflow-hidden rounded-lg border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform">
                <img 
                  src="/LOGO_E_H.jpg" 
                  alt="Yonsei Chiropractic Logo" 
                  className="h-full w-full object-cover object-left"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white leading-none uppercase">
                  Yonsei <span className="text-primary">Chiropractic</span>
                </span>
                <span className="text-[8px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mt-0.5 leading-none">
                  연세 카이로프랙틱
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            {/* Mobile Menu Button */}
            <button 
              className="p-2 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/20 rounded-lg"
              onClick={toggleMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0a0f14] overflow-hidden"
          >
            <div className="p-6 overflow-y-auto max-h-[calc(100vh-64px)]">
              <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
                <Link to={`/${lng}/`} onClick={toggleMenu} className={`text-lg font-black tracking-tight ${isActive(`/${lng}/`) ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{t('nav.home')}</Link>
                
                <div className="flex flex-col space-y-3">
                  <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">{t('nav.about')}</p>
                  <div className="flex flex-col space-y-3 pl-4 border-l-2 border-slate-100 dark:border-slate-800">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={toggleMenu}
                        className={`text-sm font-bold ${isActive(link.path) ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">{t('nav.techniques')}</p>
                  <div className="flex flex-col space-y-3 pl-4 border-l-2 border-slate-100 dark:border-slate-800">
                    {techniques.map((tech) => (
                      <Link
                        key={tech.path}
                        to={tech.path}
                        onClick={toggleMenu}
                        className={`text-sm font-bold ${isActive(tech.path) ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to={`/${lng}/reviews`} onClick={toggleMenu} className={`text-lg font-black tracking-tight ${isActive(`/${lng}/reviews`) ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{t('nav.reviews')}</Link>
                
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <Link 
                      href="tel:2133815500" 
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-bold text-sm"
                    >
                      <span className="material-symbols-outlined text-primary" aria-hidden="true">call</span>
                      <span>(213) 381-5500</span>
                    </Link>
                    <Link 
                      href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                      external
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-bold text-sm"
                    >
                      <span className="material-symbols-outlined text-primary" aria-hidden="true">location_on</span>
                      <span>3200 Wilshire Blvd #302, LA</span>
                    </Link>
                  </div>

                  <Link 
                    to={`/${lng}/contact`} 
                    onClick={toggleMenu} 
                    className="flex items-center justify-center h-14 rounded-2xl bg-primary text-white text-base font-bold shadow-xl shadow-primary/20 active:scale-[0.98] transition-transform"
                  >
                    <span className="mr-2 material-symbols-outlined text-[20px]" aria-hidden="true">calendar_month</span>
                    {t('nav.bookAppointment')}
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarMobile;
