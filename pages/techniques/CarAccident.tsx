import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CarAccident: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[120px] sm:h-[160px] md:h-[200px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/o-10.jpg')" }}
          role="img"
          aria-label="Car Accident Recovery"
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/30">
            {t('techniques.carAccident.badge')}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-lg">
            {t('techniques.carAccident.title')}
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">{t('techniques.carAccident.pain.title')}</h2>
            <p className="mb-6">
              {t('techniques.carAccident.pain.p1')}
            </p>
            <p className="mb-10 sm:mb-12">
              {t('techniques.carAccident.pain.p2')}
            </p>

            <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-10 sm:mb-12">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.carAccident.symptoms.title')}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  t('techniques.carAccident.symptoms.items.dizziness'),
                  t('techniques.carAccident.symptoms.items.nausea'),
                  t('techniques.carAccident.symptoms.items.vomiting'),
                  t('techniques.carAccident.symptoms.items.rigidity'),
                  t('techniques.carAccident.symptoms.items.tinnitus'),
                  t('techniques.carAccident.symptoms.items.pain')
                ].map((symptom) => (
                  <div key={symptom} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-base">warning</span>
                    {symptom}
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">{t('techniques.carAccident.whiplash.title')}</h2>
            <p className="mb-6">
              {t('techniques.carAccident.whiplash.p1')}
            </p>
            <p className="mb-10 sm:mb-12">
              {t('techniques.carAccident.whiplash.p2')}
            </p>

            <div className="bg-primary/5 p-6 sm:p-8 rounded-2xl border border-primary/10 mb-10 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.carAccident.damage.title')}</h3>
              <p className="mb-6">
                {t('techniques.carAccident.damage.p1')}
              </p>
              <p className="font-bold text-slate-800 dark:text-white">
                {t('techniques.carAccident.damage.p2')}
              </p>
            </div>

            <p className="text-base sm:text-lg font-bold text-center text-slate-900 dark:text-white italic leading-relaxed">
              "{t('techniques.carAccident.quote')}"
            </p>

            <div className="mt-10 sm:mt-12 flex justify-center">
              <div className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                <img 
                  src="/car_accident.gif" 
                  alt="Illustration of car accident impact and whiplash" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('techniques.carAccident.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarAccident;