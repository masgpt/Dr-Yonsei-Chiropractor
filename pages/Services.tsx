import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-slate-50 dark:bg-background-dark flex justify-center">
        <div className="w-full max-w-[1280px] px-0 sm:px-6 lg:px-8 py-0 sm:py-5">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div 
                className="flex min-h-[350px] sm:min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 sm:p-8 shadow-sm relative overflow-hidden" 
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/cropped-cropped-cropped-cropped-healing-hands-wellness-center-chiropractic-1024x395.jpg')" }}
              >
                <div className="flex flex-col gap-2 text-center max-w-[600px] z-10">
                  <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl drop-shadow-md">
                    {t('servicesPage.hero.title')}
                  </h1>
                  <h2 className="text-slate-100 text-sm sm:text-base font-medium leading-relaxed mt-2 drop-shadow-sm">
                    {t('servicesPage.hero.subtitle')}
                  </h2>
                </div>
                <a href="#treatments" className="z-10 flex w-full sm:w-auto min-w-[140px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-orange-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-lg">
                  <span className="truncate">{t('servicesPage.hero.cta')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Philosophy Section */}
      <div className="w-full flex justify-center py-10 sm:py-12 md:py-16">
        <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs sm:text-sm font-semibold">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified</span>
              {t('servicesPage.philosophy.badge')}
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-2xl sm:text-3xl font-bold leading-tight">
              {t('servicesPage.philosophy.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {t('servicesPage.philosophy.p1')}
            </p>
          </div>
          <div className="flex-1 h-56 sm:h-64 w-full md:h-auto rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-center p-6 sm:p-8">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-5xl sm:text-7xl mb-4">neurology</span>
                <p className="text-primary font-bold text-lg sm:text-xl uppercase tracking-widest">{t('servicesPage.philosophy.method')}</p>
                <p className="text-slate-500 text-[10px] sm:text-sm">{t('servicesPage.philosophy.technique')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments/Features Section */}
      <div id="treatments" className="w-full flex justify-center bg-white dark:bg-[#15202b] py-12 sm:py-16">
        <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col">
          <div className="mb-8 sm:mb-10 text-center md:text-left">
            <h2 className="text-[#0d141b] dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">{t('servicesPage.specialties.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-base sm:text-lg">{t('servicesPage.specialties.description')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Service 1 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-5 sm:p-6 hover:shadow-md transition-shadow">
              <div className="size-10 sm:size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">settings_accessibility</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-base sm:text-lg font-bold leading-tight">{t('servicesPage.specialties.items.upperCervical.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-normal">{t('servicesPage.specialties.items.upperCervical.desc')}</p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-5 sm:p-6 hover:shadow-md transition-shadow">
              <div className="size-10 sm:size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">dentistry</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-base sm:text-lg font-bold leading-tight">{t('servicesPage.specialties.items.tmj.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-normal">{t('servicesPage.specialties.items.tmj.desc')}</p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-5 sm:p-6 hover:shadow-md transition-shadow">
              <div className="size-10 sm:size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">child_care</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-base sm:text-lg font-bold leading-tight">{t('servicesPage.specialties.items.pediatric.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-normal">{t('servicesPage.specialties.items.pediatric.desc')}</p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-5 sm:p-6 hover:shadow-md transition-shadow">
              <div className="size-10 sm:size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">car_crash</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-base sm:text-lg font-bold leading-tight">{t('servicesPage.specialties.items.carAccidents.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-normal">{t('servicesPage.specialties.items.carAccidents.desc')}</p>
              </div>
            </div>
            {/* Service 5 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-5 sm:p-6 hover:shadow-md transition-shadow">
              <div className="size-10 sm:size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">medical_services</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-base sm:text-lg font-bold leading-tight">{t('servicesPage.specialties.items.personalInjury.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-normal">{t('servicesPage.specialties.items.personalInjury.desc')}</p>
              </div>
            </div>
            {/* Service 6 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-5 sm:p-6 hover:shadow-md transition-shadow">
              <div className="size-10 sm:size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                <span className="material-symbols-outlined text-xl sm:text-2xl">accessibility</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-base sm:text-lg font-bold leading-tight">{t('servicesPage.specialties.items.extremity.title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-normal">{t('servicesPage.specialties.items.extremity.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full flex justify-center py-12 sm:py-16 bg-slate-50 dark:bg-background-dark">
        <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col">
          <h2 className="text-[#0d141b] dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-10 sm:mb-12 text-center">{t('servicesPage.process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-10"></div>
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="size-10 sm:size-12 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">1</div>
              <h3 className="text-base sm:text-lg font-bold text-[#0d141b] dark:text-white">{t('servicesPage.process.step1.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{t('servicesPage.process.step1.desc')}</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="size-10 sm:size-12 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">2</div>
              <h3 className="text-base sm:text-lg font-bold text-[#0d141b] dark:text-white">{t('servicesPage.process.step2.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{t('servicesPage.process.step2.desc')}</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="size-10 sm:size-12 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">3</div>
              <h3 className="text-base sm:text-lg font-bold text-[#0d141b] dark:text-white">{t('servicesPage.process.step3.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{t('servicesPage.process.step3.desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex justify-center py-12 sm:py-16 bg-white dark:bg-[#1a2632] border-t border-slate-100 dark:border-slate-800">
        <div className="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0d141b] dark:text-white">{t('servicesPage.cta.title')}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">{t('servicesPage.cta.description')}</p>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto">
              <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">call</span>
                (213) 381-5500
              </div>
              <Link to="/contact" className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-orange-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-md">
                {t('servicesPage.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;