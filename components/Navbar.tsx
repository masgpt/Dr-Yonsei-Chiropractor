import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

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
    `text-sm font-medium transition-colors ${
      isActive(path) 
        ? 'text-primary font-bold' 
        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
    }`;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (techniquesRef.current && !techniquesRef.current.contains(event.target as Node)) {
        setIsTechniquesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    { name: t('nav.messageFromDrPark'), path: '/message' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#101922]/95 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col items-start">
            <img 
              src="/LOGO_E_H.jpg" 
              alt="Yonsei Chiropractic Logo" 
              className="h-8 w-auto object-contain rounded"
            />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-0.5 leading-none">
              Dr. Hyeon Joo Park
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass('/')}>{t('nav.home')}</Link>
            
            {/* About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button 
                onClick={() => {
                  setIsAboutOpen(!isAboutOpen);
                  setIsTechniquesOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive('/about') || isActive('/message')
                    ? 'text-primary font-bold' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                }`}
              >
                {t('nav.about')}
                <span className={`material-symbols-outlined text-[18px] transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsAboutOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white transition-colors"
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
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  location.pathname.startsWith('/techniques') 
                    ? 'text-primary font-bold' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
                }`}
              >
                {t('nav.techniques')}
                <span className={`material-symbols-outlined text-[18px] transition-transform ${isTechniquesOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              
              {isTechniquesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {techniques.map((tech) => (
                    <Link
                      key={tech.path}
                      to={tech.path}
                      onClick={() => setIsTechniquesOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white transition-colors"
                    >
                      {tech.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/reviews" className={navLinkClass('/reviews')}>{t('nav.reviews')}</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>{t('nav.contact')}</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Link to="/contact" className="flex items-center justify-center h-10 px-5 rounded-lg bg-primary hover:bg-orange-600 text-white text-sm font-bold shadow-sm transition-all focus:ring-2 focus:ring-primary/20">
              <span className="mr-2 material-symbols-outlined text-[18px]">calendar_month</span>
              <span>{t('nav.bookAppointment')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] p-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className={navLinkClass('/')}>{t('nav.home')}</Link>
            
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">{t('nav.about')}</p>
              {aboutLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`px-4 py-1 text-sm ${isActive(link.path) ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2">{t('nav.techniques')}</p>
              {techniques.map((tech) => (
                <Link
                  key={tech.path}
                  to={tech.path}
                  onClick={toggleMenu}
                  className={`px-4 py-1 text-sm ${isActive(tech.path) ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300'}`}
                >
                  {tech.name}
                </Link>
              ))}
            </div>

            <Link to="/reviews" onClick={toggleMenu} className={navLinkClass('/reviews')}>{t('nav.reviews')}</Link>
            <Link to="/contact" onClick={toggleMenu} className={navLinkClass('/contact')}>{t('nav.contact')}</Link>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Language / 언어</span>
              <LanguageToggle />
            </div>
            <Link to="/contact" onClick={toggleMenu} className="flex items-center justify-center h-10 px-5 rounded-lg bg-primary text-white text-sm font-bold">
              {t('nav.bookAppointment')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
