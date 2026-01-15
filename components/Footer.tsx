import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 w-full">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-[24px]">local_hospital</span>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Dr. Nader Farsar
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Restoring balance and health through expert chiropractic care. Your journey to a pain-free life starts here.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Dr. Farsar</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Patient Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Chiropractic Adjustments</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Sports Injury Rehab</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Massage Therapy</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Wellness Care</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Emergency</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Need immediate assistance?</p>
            <a className="text-lg font-bold text-primary hover:text-blue-600 transition-colors block mb-4" href="tel:8188861406">(818) 886-1406</a>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2024 Dr. Nader Farsar, DC. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-slate-900 dark:hover:text-slate-300" href="#">Privacy Policy</a>
            <a className="hover:text-slate-900 dark:hover:text-slate-300" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;