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
                Yonsei Chiropractic
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Specializing in Palmer Upper Cervical Specific Technique to restore your body's natural healing power.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Dr. Park</Link></li>
              <li><Link to="/message" className="hover:text-primary transition-colors">Message From Dr. Park</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Patient Reviews</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Techniques</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/techniques/about-chiropractic" className="hover:text-primary transition-colors">About Chiropractic</Link></li>
              <li><Link to="/techniques/innate-intelligence" className="hover:text-primary transition-colors">Innate Intelligence</Link></li>
              <li><Link to="/techniques/upper-cervical" className="hover:text-primary transition-colors">Upper Cervical</Link></li>
              <li><Link to="/techniques/car-accident" className="hover:text-primary transition-colors">Car Accident & Injury</Link></li>
              <li><Link to="/techniques/tmj" className="hover:text-primary transition-colors">TMJ Treatment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">location_on</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  3200 Wilshire Blvd, Suite 302<br />
                  Los Angeles, CA 90010
                </p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span>
                <a className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href="tel:2133815500">(213) 381-5500</a>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">mail</span>
                <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors truncate" href="mailto:yonseichiropractic@gmail.com">yonseichiropractic@gmail.com</a>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center w-full h-10 px-5 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-all shadow-sm mt-2"
              >
                <span className="mr-2 material-symbols-outlined text-[18px]">calendar_month</span>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2026 Yonsei Chiropractic Clinic. All rights reserved.</p>
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