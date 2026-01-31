import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../ui/Link';
import ContactBanner from '../../ContactBanner';
import { useNavbarConstants } from '../Shared/navbar.constants';
import { useNavbarLogic } from '../Shared/navbar.hooks';

const NavbarMobile: React.FC = () => {
  const { t } = useTranslation();
  const { techniques, aboutLinks } = useNavbarConstants();
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
      <ContactBanner />
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col items-start focus:ring-offset-4 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-lg border border-slate-100 dark:border-slate-800 group-hover:scale-105 transition-transform">
                <img 
                  src="/LOGO_E_H.jpg" 
                  alt="Yonsei Chiropractic Logo" 
                  className="h-full w-full object-cover object-left"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white leading-none uppercase">
                  Yonsei <span className="text-primary">Chiropractic</span> Clinic
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.05em] mt-1 leading-none flex items-center gap-2">
                  <span>연세 카이로프랙틱</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                  <span>Dr. Park, D.C., M.S.</span>
                </span>
              </div>
            </div>
          </Link>

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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0a0f14] p-6 overflow-y-auto max-h-[calc(100vh-150px)] animate-in slide-in-from-top duration-300"
        >
          <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
            <Link to="/" onClick={toggleMenu} className={`text-lg font-black tracking-tight ${isActive('/') ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{t('nav.home')}</Link>
            
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

            <Link to="/reviews" onClick={toggleMenu} className={`text-lg font-black tracking-tight ${isActive('/reviews') ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{t('nav.reviews')}</Link>
            
            <div className="pt-4 flex flex-col gap-4">
              <Link 
                to="/contact" 
                onClick={toggleMenu} 
                className="flex items-center justify-center h-14 rounded-2xl bg-primary text-white text-base font-bold shadow-xl shadow-primary/20 active:scale-[0.98] transition-transform"
              >
                <span className="mr-2 material-symbols-outlined text-[20px]" aria-hidden="true">calendar_month</span>
                {t('nav.bookAppointment')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavbarMobile;
