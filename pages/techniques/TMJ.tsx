import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TMJ: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 sm:mb-8 leading-tight">{t('techniques.tmj.title')}</h1>
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 mb-6 sm:mb-8 leading-relaxed">
              {t('techniques.tmj.p1')}
            </p>
            
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">{t('techniques.tmj.connection.title')}</h2>
            <p className="mb-6">
              {t('techniques.tmj.connection.p1')}
            </p>
            <p className="mb-6">
              {t('techniques.tmj.connection.p2')}
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-10 sm:mb-12">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.tmj.symptoms.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
                  <span className="text-sm sm:text-base">{t('techniques.tmj.symptoms.pain')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
                  <span className="text-sm sm:text-base">{t('techniques.tmj.symptoms.chewing')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
                  <span className="text-sm sm:text-base">{t('techniques.tmj.symptoms.clicking')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
                  <span className="text-sm sm:text-base">{t('techniques.tmj.symptoms.ear')}</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">{t('techniques.tmj.expertise.title')}</h2>
            <p className="mb-6">
              {t('techniques.tmj.expertise.p1')}
            </p>
            <p className="mb-6">
              {t('techniques.tmj.expertise.p2')}
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('techniques.tmj.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TMJ;