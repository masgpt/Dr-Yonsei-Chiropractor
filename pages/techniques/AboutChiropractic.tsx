import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';

const AboutChiropractic: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('techniques.about.title')}
        description={t('techniques.about.p1')}
        image="/front-pic_31.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[120px] sm:h-[160px] md:h-[200px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/front-pic_31.jpg')" }}
          role="img"
          aria-label="Chiropractic Care"
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg">
            {t('techniques.about.title')}
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 mb-6 sm:mb-8 leading-relaxed">
              {t('techniques.about.p1')}
            </p>
            <p className="mb-6">
              {t('techniques.about.p2')}
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-10 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.about.manual.title')}</h3>
              <p className="mb-4">
                {t('techniques.about.manual.p1')}
              </p>
              <p className="font-bold text-primary">
                {t('techniques.about.manual.p2')}
              </p>
            </div>

            <p className="mb-6">
              {t('techniques.about.p3')}
            </p>
            <p className="mb-10 sm:mb-12">
              {t('techniques.about.p4')}
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">{t('techniques.about.comprehensive.title')}</h3>
            <p className="mb-6">
              {t('techniques.about.comprehensive.p1')}
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('techniques.about.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutChiropractic;