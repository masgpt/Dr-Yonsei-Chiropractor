import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';
import { specialtyKeys } from '../Shared/services.constants';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0 }
};

const staggerContainer = {
  initial: {},
  animate: {},
  whileInView: {
    transition: {
      staggerChildren: 0
    }
  }
};

const ServicesMobile: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language || 'en';

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-slate-50 dark:bg-background-dark flex justify-center overflow-hidden">
        <div className="w-full px-0 py-0">
          <div 
            className="flex min-h-[400px] flex-col gap-6 items-center justify-center p-6 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/cropped-cropped-cropped-cropped-healing-hands-wellness-center-chiropractic-1024x395.jpg')" }}
            role="img"
            aria-label="Chiropractor's hands supporting a patient's spine during healing care"
          >
            <div className="flex flex-col gap-2 text-center z-10">
              <motion.h1 
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}
                className="text-white text-3xl font-black leading-tight tracking-tight drop-shadow-md uppercase"
              >
                {t('servicesPage.hero.title')}
              </motion.h1>
              <motion.h2 
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}
                className="text-slate-100 text-sm font-medium leading-relaxed mt-2 drop-shadow-sm uppercase tracking-wide"
              >
                {t('servicesPage.hero.subtitle')}
              </motion.h2>
            </div>
            <motion.a 
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 }}
              href="#treatments" 
              className="z-10 flex w-full min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary transition-colors text-slate-50 text-base font-bold shadow-lg uppercase tracking-widest"
            >
              <span className="truncate">{t('servicesPage.hero.cta')}</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Intro Philosophy Section */}
      <div className="w-full flex justify-center py-10 overflow-hidden">
        <div className="w-full px-4 flex flex-col gap-8 items-center">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="w-full space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-[10px] font-black uppercase tracking-widest">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              {t('servicesPage.philosophy.badge')}
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-2xl font-black leading-tight uppercase">
              {t('servicesPage.philosophy.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-medium">
              {t('servicesPage.philosophy.p1')}
            </p>
            <div className="pt-2">
              <Link to={`/${lng}/techniques/about-chiropractic`} className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] hover:underline">
                Learn the Science Behind Chiropractic
                <span className="material-symbols-outlined text-xs">east</span>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0 }}
            className="h-56 w-full rounded-2xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative min-h-[220px] border-4 border-white dark:border-slate-800 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-center p-6">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-4 opacity-80">neurology</span>
                <p className="text-primary font-black text-lg uppercase tracking-[0.2em]">{t('servicesPage.philosophy.method')}</p>
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mt-1">{t('servicesPage.philosophy.technique')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Treatments/Features Section */}
      <div id="treatments" className="w-full flex justify-center bg-white dark:bg-[#0a0f14] py-16">
        <div className="w-full px-4 flex flex-col">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] block mb-3">Core Competencies</span>
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-black leading-tight tracking-tight uppercase">{t('servicesPage.specialties.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 text-base font-medium">{t('servicesPage.specialties.description')}</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {specialtyKeys.map((item) => (
              <motion.div 
                key={item.key}
                variants={fadeInUp}
                className="flex flex-col gap-4 rounded-[28px] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 transition-all group"
              >
                <div className="size-12 rounded-xl bg-white dark:bg-slate-800 shadow-lg shadow-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl font-light">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#0d141b] dark:text-white text-lg font-black leading-tight uppercase tracking-tight">{t(`servicesPage.specialties.items.${item.key}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{t(`servicesPage.specialties.items.${item.key}.desc`)}</p>
                </div>
                {item.path ? (
                  <Link 
                    to={`/${lng}${item.path}`} 
                    className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] active:underline mt-1"
                  >
                    View Deep Knowledge
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                ) : (
                  <div className="h-[18px]"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full flex justify-center py-12 bg-slate-50 dark:bg-background-dark">
        <div className="w-full px-4 flex flex-col">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-tight mb-10 text-center"
          >
            {t('servicesPage.process.title')}
          </motion.h2>
          <div className="grid grid-cols-1 gap-8">
            {[1, 2, 3].map((step) => (
              <motion.div 
                key={step} 
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">{step}</div>
                <h3 className="text-base font-bold text-[#0d141b] dark:text-white">{t(`servicesPage.process.step${step}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">{t(`servicesPage.process.step${step}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex justify-center py-12 bg-white dark:bg-[#1a2632] border-t border-slate-100 dark:border-slate-800">
        <div className="w-full px-4">
          <div 
            className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 flex flex-col items-center justify-between gap-8 border border-primary/10"
          >
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
