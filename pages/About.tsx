import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../components/ui/Link';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 md:py-20 max-w-[1280px] mx-auto" aria-labelledby="about-hero-title">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-12">
            <h1 id="about-hero-title" className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {t('about.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/contact" className="bg-primary hover:bg-orange-600 text-white text-base font-bold h-12 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center min-w-[160px] focus:ring-2 focus:ring-primary/20 focus:ring-offset-2">
                {t('about.hero.book')}
              </Link>
              <Link to="/techniques/upper-cervical" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-base font-medium h-12 px-6 rounded-lg transition-colors flex items-center justify-center focus:ring-2 focus:ring-slate-500/20">
                {t('about.hero.hio')}
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div 
                className="w-full h-full bg-center bg-cover bg-no-repeat bg-slate-200 dark:bg-slate-800" 
                style={{ backgroundImage: "url('/dr-park.png')" }}
                role="img"
                aria-label="Dr. Hyeon Joo Park"
              ></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-lg leading-tight">{t('home.meetDoctor.name')}</p>
                <p className="text-sm opacity-90">D.C., M.S., C.C.E.P.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor / Bio Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-24 border-y border-slate-100 dark:border-slate-800" aria-labelledby="bio-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 mb-8 sm:mb-12">
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-wider">{t('about.bio.badge')}</span>
            <h2 id="bio-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{t('about.bio.title')}</h2>
          </div>
          
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
            <p className="mb-6">
              {t('about.bio.p1')}
            </p>
            <p className="mb-6">
              {t('about.bio.p2')}
            </p>
            <p className="mb-6">
              {t('about.bio.p3')}
            </p>

            <section className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl my-10 sm:my-12 border border-slate-100 dark:border-slate-700" aria-labelledby="specializations-heading">
              <h3 id="specializations-heading" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('about.bio.specializations.title')}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">check_circle</span>
                  <span>{t('about.bio.specializations.hio')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">check_circle</span>
                  <span>{t('about.bio.specializations.tmj')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">check_circle</span>
                  <span>{t('about.bio.specializations.extremity')}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">check_circle</span>
                  <span>{t('about.bio.specializations.pediatric')}</span>
                </li>
              </ul>
            </section>

            <section aria-labelledby="education-heading">
              <h3 id="education-heading" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('about.bio.education.title')}</h3>
              <ul className="list-disc pl-5 sm:pl-6 mb-12 space-y-3">
                <li>{t('about.bio.education.yonsei')}</li>
                <li>{t('about.bio.education.lifeDc')}</li>
                <li>{t('about.bio.education.lifeMs')}</li>
                <li>{t('about.bio.education.ccep')}</li>
              </ul>
            </section>
          </div>

          {/* Awards Section */}
          <section className="mt-12 sm:mt-16" aria-labelledby="awards-heading">
            <h3 id="awards-heading" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">{t('about.awards.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex gap-4 p-5 sm:p-6 bg-slate-900 text-white rounded-xl shadow-lg border-l-4 border-yellow-500">
                <span className="material-symbols-outlined text-yellow-500 text-3xl sm:text-4xl shrink-0" aria-hidden="true">workspace_premium</span>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">{t('about.awards.presidential.title')}</h4>
                  <p className="text-xs sm:text-sm opacity-80">{t('about.awards.presidential.subtitle')}</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 sm:p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl shrink-0" aria-hidden="true">military_tech</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">{t('about.awards.clinical.title')}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{t('about.awards.clinical.subtitle')}</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 items-center">
                <span className="material-symbols-outlined text-slate-400 shrink-0" aria-hidden="true">award_star</span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{t('about.awards.county')}</p>
              </div>
              <div className="flex gap-3 p-3 items-center">
                <span className="material-symbols-outlined text-slate-400 shrink-0" aria-hidden="true">award_star</span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{t('about.awards.city')}</p>
              </div>
              <div className="flex gap-3 p-3 items-center">
                <span className="material-symbols-outlined text-slate-400 shrink-0" aria-hidden="true">award_star</span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{t('about.awards.cityAppreciation')}</p>
              </div>
              <div className="flex gap-3 p-3 items-center">
                <span className="material-symbols-outlined text-slate-400 shrink-0" aria-hidden="true">award_star</span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{t('about.awards.radio')}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-primary text-white py-12 sm:py-16 px-4" aria-labelledby="about-cta-heading">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 id="about-cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold">{t('about.cta.title')}</h2>
          <p className="text-orange-100 text-base sm:text-lg max-w-2xl">
            {t('about.cta.description')}
          </p>
          <Link to="/contact" className="bg-white text-primary hover:bg-orange-50 font-bold h-12 px-8 rounded-lg shadow-lg transition-colors mt-2 flex items-center justify-center w-full sm:w-auto focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary">
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;