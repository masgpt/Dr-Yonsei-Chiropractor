import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';
import ContactBanner from './ContactBanner';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTechniquesOpen, setIsTechniquesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const techniquesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => 
    `text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
      isActive(path) 
        ? 'text-primary bg-primary/5' 
        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
    }`;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  // Close dropdowns when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (techniquesRef.current && !techniquesRef.current.contains(event.target as Node)) {
        setIsTechniquesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsTechniquesOpen(false);
        setIsAboutOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const techniques = [
    { name: t('nav.aboutChiropractic'), path: '/techniques/about-chiropractic' },
    { name: t('nav.subluxation'), path: '/techniques/subluxation' },
    { name: t('nav.innateIntelligence'), path: '/techniques/innate-intelligence' },
    { name: t('nav.upperCervical'), path: '/techniques/upper-cervical' },
    { name: t('nav.carAccident'), path: '/techniques/car-accident' },
    { name: t('nav.tmj'), path: '/techniques/tmj' },
  ];

  const aboutLinks = [
    { name: t('nav.aboutDrPark'), path: '/about' },
    { name: t('nav.philosophy'), path: '/message' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-[#0a0f14]/95 backdrop-blur-md transition-colors duration-300">
      <ContactBanner />
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">
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

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
            <Link to="/" className={navLinkClass('/')}>{t('nav.home')}</Link>
            
            {/* About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button 
                onClick={() => {
                  setIsAboutOpen(!isAboutOpen);
                  setIsTechniquesOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isAboutOpen}
                className={`flex items-center gap-1 text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  isActive('/about') || isActive('/message')
                    ? 'text-primary bg-primary/5' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {t('nav.about')}
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isAboutOpen ? 'rotate-180 text-primary' : ''}`} aria-hidden="true">
                  expand_more
                </span>
              </button>
              
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsAboutOpen(false)}
                      className="block px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Techniques Dropdown */}
            <div className="relative" ref={techniquesRef}>
              <button 
                onClick={() => {
                  setIsTechniquesOpen(!isTechniquesOpen);
                  setIsAboutOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={isTechniquesOpen}
                className={`flex items-center gap-1 text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
                  location.pathname.startsWith('/techniques') 
                    ? 'text-primary bg-primary/5' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {t('nav.techniques')}
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isTechniquesOpen ? 'rotate-180 text-primary' : ''}`} aria-hidden="true">
                  expand_more
                </span>
              </button>
              
              {isTechniquesOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {techniques.map((tech) => (
                    <Link
                      key={tech.path}
                      to={tech.path}
                      onClick={() => setIsTechniquesOpen(false)}
                      className="block px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white transition-colors"
                    >
                      {tech.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/reviews" className={navLinkClass('/reviews')}>{t('nav.reviews')}</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/contact" 
              className="flex items-center justify-center h-11 px-6 rounded-xl bg-primary hover:bg-orange-600 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
            >
              <span className="mr-2 material-symbols-outlined text-[20px]" aria-hidden="true">calendar_month</span>
              <span>{t('nav.bookAppointment')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/20 rounded-lg"
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
          className="lg:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0a0f14] p-6 overflow-y-auto max-h-[calc(100vh-150px)] animate-in slide-in-from-top duration-300"
        >
          <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
            <Link to="/" onClick={toggleMenu} className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{t('nav.home')}</Link>
            
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

            <Link to="/reviews" onClick={toggleMenu} className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{t('nav.reviews')}</Link>
            
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

export default Navbar;

