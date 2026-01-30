import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';
import { specialtyKeys } from '../Shared/services.constants';

const ServicesMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.techniques')}
        description={t('servicesPage.hero.subtitle')}
      />
      {/* Hero Section */}
      <div className="w-full bg-slate-50 dark:bg-background-dark flex justify-center">
        <div className="w-full px-0 py-0">
          <div 
            className="flex min-h-[350px] flex-col gap-6 items-center justify-center p-6 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/cropped-cropped-cropped-cropped-healing-hands-wellness-center-chiropractic-1024x395.jpg')" }}
            role="img"
            aria-label="Chiropractor's hands supporting a patient's spine during healing care"
          >
            <div className="flex flex-col gap-2 text-center z-10">
              <h1 className="text-white text-3xl font-black leading-tight tracking-tight drop-shadow-md">
                {t('servicesPage.hero.title')}
              </h1>
              <h2 className="text-slate-100 text-sm font-medium leading-relaxed mt-2 drop-shadow-sm">
                {t('servicesPage.hero.subtitle')}
              </h2>
            </div>
            <a href="#treatments" className="z-10 flex w-full min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary transition-colors text-slate-50 text-base font-bold shadow-lg">
              <span className="truncate">{t('servicesPage.hero.cta')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Intro Philosophy Section */}
      <div className="w-full flex justify-center py-10">
        <div className="w-full px-4 flex flex-col gap-8 items-center">
          <div className="w-full space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              {t('servicesPage.philosophy.badge')}
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight">
              {t('servicesPage.philosophy.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {t('servicesPage.philosophy.p1')}
            </p>
          </div>
          <div className="h-56 w-full rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-center p-6">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-4">neurology</span>
                <p className="text-primary font-bold text-lg uppercase tracking-widest">{t('servicesPage.philosophy.method')}</p>
                <p className="text-slate-500 text-[10px]">{t('servicesPage.philosophy.technique')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments/Features Section */}
      <div id="treatments" className="w-full flex justify-center bg-white dark:bg-[#15202b] py-12">
        <div className="w-full px-4 flex flex-col">
          <div className="mb-8 text-center">
            <h2 className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-tight">{t('servicesPage.specialties.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">{t('servicesPage.specialties.description')}</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {specialtyKeys.map((item) => (
              <div key={item.key} className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-5 active:shadow-md transition-shadow">
                <div className="size-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#0d141b] dark:text-white text-base font-bold leading-tight">{t(`servicesPage.specialties.items.${item.key}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-normal">{t(`servicesPage.specialties.items.${item.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full flex justify-center py-12 bg-slate-50 dark:bg-background-dark">
        <div className="w-full px-4 flex flex-col">
          <h2 className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-tight mb-10 text-center">{t('servicesPage.process.title')}</h2>
          <div className="grid grid-cols-1 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center text-center gap-4">
                <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">{step}</div>
                <h3 className="text-base font-bold text-[#0d141b] dark:text-white">{t(`servicesPage.process.step${step}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">{t(`servicesPage.process.step${step}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex justify-center py-12 bg-white dark:bg-[#1a2632] border-t border-slate-100 dark:border-slate-800">
        <div className="w-full px-4">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 flex flex-col items-center justify-between gap-8 border border-primary/10">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-xl font-bold text-[#0d141b] dark:text-white">{t('servicesPage.cta.title')}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm">{t('servicesPage.cta.description')}</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="flex items-center gap-2 text-base font-semibold text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                (213) 381-5500
              </div>
              <Link to="/contact" className="flex w-full min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary transition-colors text-slate-50 text-base font-bold shadow-md">
                {t('servicesPage.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMobile;
