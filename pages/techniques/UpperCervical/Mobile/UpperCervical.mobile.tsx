import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';

const UpperCervicalMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('techniques.upperCervical.title')}
        description={t('techniques.upperCervical.p1')}
        image="/o-14.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[120px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/o-14.jpg')" }}
          role="img"
          aria-label="Upper Cervical Care"
        ></div>
        <div className="relative z-10 w-full px-4 text-center">
          <h1 className="text-2xl font-black text-white leading-tight drop-shadow-lg mb-1">
            {t('techniques.upperCervical.title')}
          </h1>
          <h2 className="text-sm font-bold text-orange-300 drop-shadow-md">
            {t('techniques.upperCervical.subtitle')}
          </h2>
        </div>
      </section>

      <section className="py-12 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="mb-6 leading-relaxed">{t('techniques.upperCervical.p1')}</p>
            <p className="mb-6 leading-relaxed">{t('techniques.upperCervical.p2')}</p>
            <p className="mb-10 leading-relaxed">{t('techniques.upperCervical.p3')}</p>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 mb-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.upperCervical.legacy.title')}</h3>
              <p className="mb-4">{t('techniques.upperCervical.legacy.p1')}</p>
              <p className="text-xs italic opacity-80">{t('techniques.upperCervical.legacy.p2')}</p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.upperCervical.diagnostics.title')}</h3>
            <p className="mb-6">{t('techniques.upperCervical.diagnostics.p1')}</p>
            <ul className="list-disc pl-5 mb-8 space-y-3">
              <li>{t('techniques.upperCervical.diagnostics.xrays')}</li>
              <li>{t('techniques.upperCervical.diagnostics.instruments')}</li>
            </ul>

            <div className="mt-10 p-6 bg-primary text-white rounded-2xl relative overflow-hidden">
              <span className="material-symbols-outlined absolute top-2 left-2 text-white/10 text-6xl select-none">format_quote</span>
              <blockquote className="relative z-10">
                <p className="text-lg font-medium italic mb-6 leading-relaxed">{t('techniques.upperCervical.quote')}</p>
                <footer className="font-bold text-base">— {t('home.meetDoctor.name')}</footer>
              </blockquote>
            </div>

            <p className="mt-10 mb-6">{t('techniques.upperCervical.p4')}</p>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center w-full h-12 px-8 rounded-lg bg-primary text-white font-bold transition-all shadow-lg">
              {t('techniques.upperCervical.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpperCervicalMobile;
