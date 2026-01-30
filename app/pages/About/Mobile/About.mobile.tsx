import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';
import SEO from '../../../components/SEO';

const AboutMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.about')}
        description={t('about.hero.description')}
        image="/dr-park.png"
      />
      {/* Hero Section */}
      <section className="w-full px-6 py-8 max-w-[1280px] mx-auto" aria-labelledby="about-hero-title">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div 
              className="w-20 h-20 flex-shrink-0 bg-slate-200 rounded-full border-2 border-slate-100 dark:border-slate-800 shadow-sm bg-center bg-cover" 
              style={{ backgroundImage: "url('/dr-park.png')" }}
              role="img"
              aria-label="Dr. Hyeon Joo Park, D.C., M.S."
            ></div>
            <div className="flex flex-col">
              <h1 id="about-hero-title" className="text-slate-900 dark:text-white text-2xl font-black leading-tight">
                {t('about.hero.title')}
              </h1>
              <p className="text-primary font-bold text-xs uppercase tracking-wider">{t('home.meetDoctor.name')}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              {t('about.hero.description')}
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <Link to="/contact" className="bg-primary hover:bg-orange-600 text-white text-base font-bold h-11 px-6 rounded-lg transition-all shadow-md flex items-center justify-center w-full focus:ring-2 focus:ring-primary/20 focus:ring-offset-2">
                {t('about.hero.book')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor / Bio Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-12 border-y border-slate-100 dark:border-slate-800" aria-labelledby="bio-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-primary font-bold text-xs uppercase tracking-wider">{t('about.bio.badge')}</span>
            <h2 id="bio-heading" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{t('about.bio.title')}</h2>
          </div>
          
          <div className="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
            <p className="mb-6">{t('about.bio.p1')}</p>
            <p className="mb-6">{t('about.bio.p2')}</p>
            <p className="mb-6">{t('about.bio.p3')}</p>

            <section className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl my-10 border border-slate-100 dark:border-slate-700" aria-labelledby="specializations-heading">
              <h3 id="specializations-heading" className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t('about.bio.specializations.title')}</h3>
              <ul className="grid grid-cols-1 gap-4 list-none pl-0">
                {[ 'hio', 'tmj', 'extremity', 'pediatric' ].map(key => (
                  <li key={key} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">check_circle</span>
                    <span>{t(`about.bio.specializations.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="education-heading">
              <h3 id="education-heading" className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t('about.bio.education.title')}</h3>
              <ul className="list-disc pl-5 mb-12 space-y-3">
                <li>{t('about.bio.education.yonsei')}</li>
                <li>{t('about.bio.education.lifeDc')}</li>
                <li>{t('about.bio.education.lifeMs')}</li>
                <li>{t('about.bio.education.ccep')}</li>
              </ul>
            </section>
          </div>

          {/* Awards Section */}
          <section className="mt-12" aria-labelledby="awards-heading">
            <h3 id="awards-heading" className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">{t('about.awards.title')}</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-4 p-5 bg-slate-900 text-white rounded-xl shadow-lg border-l-4 border-yellow-500">
                <span className="material-symbols-outlined text-yellow-500 text-3xl shrink-0" aria-hidden="true">workspace_premium</span>
                <div>
                  <h4 className="font-bold text-base">{t('about.awards.presidential.title')}</h4>
                  <p className="text-xs opacity-80">{t('about.awards.presidential.subtitle')}</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0" aria-hidden="true">military_tech</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{t('about.awards.clinical.title')}</h4>
                  <p className="text-xs text-slate-500">{t('about.awards.clinical.subtitle')}</p>
                </div>
              </div>
              {[ 'county', 'city', 'cityAppreciation', 'radio' ].map(key => (
                <div key={key} className="flex gap-3 p-3 items-center">
                  <span className="material-symbols-outlined text-slate-400 shrink-0" aria-hidden="true">award_star</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{t(`about.awards.${key}`)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-primary text-white py-12 px-6" aria-labelledby="about-cta-heading">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 id="about-cta-heading" className="text-2xl font-bold">{t('about.cta.title')}</h2>
          <p className="text-orange-100 text-base max-w-2xl">
            {t('about.cta.description')}
          </p>
          <Link to="/contact" className="bg-white text-primary hover:bg-orange-50 font-bold h-12 px-8 rounded-lg shadow-lg transition-colors mt-2 flex items-center justify-center w-full focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary">
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutMobile;
