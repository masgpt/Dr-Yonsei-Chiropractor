import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) => 
    `text-sm font-medium transition-colors ${
      isActive(path) 
        ? 'text-primary font-bold' 
        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white'
    }`;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#101922]/95 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[20px]">local_hospital</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Dr. Nader Farsar, DC
            </h2>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
            <Link to="/reviews" className={navLinkClass('/reviews')}>Reviews</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="flex items-center justify-center h-10 px-5 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-sm transition-all focus:ring-2 focus:ring-primary/20">
              <span className="mr-2 material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className={navLinkClass('/')}>Home</Link>
            <Link to="/about" onClick={toggleMenu} className={navLinkClass('/about')}>About</Link>
            <Link to="/services" onClick={toggleMenu} className={navLinkClass('/services')}>Services</Link>
            <Link to="/reviews" onClick={toggleMenu} className={navLinkClass('/reviews')}>Reviews</Link>
            <Link to="/contact" onClick={toggleMenu} className={navLinkClass('/contact')}>Contact</Link>
            <Link to="/contact" onClick={toggleMenu} className="flex items-center justify-center h-10 px-5 rounded-lg bg-primary text-white text-sm font-bold">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;