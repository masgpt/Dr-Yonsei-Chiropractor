import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';
import { specialtyKeys } from '../Shared/services.constants';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const ServicesDesktop: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language || 'en';

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-slate-50 dark:bg-background-dark flex justify-center overflow-hidden">
        <div className="w-full max-w-[1280px] px-8 py-5">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="w-full"
          >
            <motion.div 
              variants={{
                initial: { opacity: 0, scale: 1.05 },
                animate: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
              }}
              className="flex min-h-[400px] flex-col gap-8 rounded-xl items-center justify-center p-8 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/cropped-cropped-cropped-cropped-healing-hands-wellness-center-chiropractic-1024x395.jpg')" }}
              role="img"
              aria-label="Chiropractor's hands supporting a patient's spine during healing care"
            >
              <div className="flex flex-col gap-2 text-center max-w-[800px] z-10">
                <motion.h1 
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                  }}
                  className="text-white text-5xl font-black leading-tight tracking-tight drop-shadow-md uppercase"
                >
                  {t('servicesPage.hero.title')}
                </motion.h1>
                <motion.h2 
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                  }}
                  className="text-slate-100 text-lg font-medium leading-relaxed mt-2 drop-shadow-sm"
                >
                  {t('servicesPage.hero.subtitle')}
                </motion.h2>
              </div>
              <motion.a 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                href="#treatments" 
                className="z-10 flex w-auto min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-orange-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-widest uppercase shadow-lg"
              >
                <span className="truncate">{t('servicesPage.hero.cta')}</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Intro Philosophy Section */}
      <div className="w-full flex justify-center py-16 overflow-hidden">
        <div className="w-full max-w-[1280px] px-8 flex flex-row gap-16 items-center">
          <div 
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-black uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              {t('servicesPage.philosophy.badge')}
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-4xl font-black leading-tight uppercase tracking-tight">
              {t('servicesPage.philosophy.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
              {t('servicesPage.philosophy.p1')}
            </p>
            <div className="pt-4">
              <Link to={`/${lng}/techniques/about-chiropractic`} className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:underline">
                Learn the Science Behind Chiropractic
                <span className="material-symbols-outlined text-sm">east</span>
              </Link>
            </div>
          </div>
          <div 
            className="flex-1 h-auto w-full rounded-3xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative min-h-[300px] border-4 border-white dark:border-slate-800 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-center p-8">
              <div className="flex flex-col items-center">
                <span 
                  className="material-symbols-outlined text-primary text-8xl mb-4 opacity-80"
                >
                  neurology
                </span>
                <p className="text-primary font-black text-2xl uppercase tracking-[0.2em]">{t('servicesPage.philosophy.method')}</p>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">{t('servicesPage.philosophy.technique')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments/Features Section */}
      <div id="treatments" className="w-full flex justify-center bg-white dark:bg-[#0a0f14] py-24">
        <div className="w-full max-w-[1280px] px-8 flex flex-col">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-16 text-left"
          >
            <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Core Competencies</span>
            <h2 className="text-[#0d141b] dark:text-white text-5xl font-black leading-tight tracking-tight uppercase">{t('servicesPage.specialties.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-xl font-medium max-w-2xl">{t('servicesPage.specialties.description')}</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8"
          >
            {specialtyKeys.map((item) => (
              <motion.div 
                key={item.key} 
                variants={fadeInUp}
                className="flex flex-col gap-6 rounded-[32px] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-8 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group"
              >
                <div className="size-14 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl font-light">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-[#0d141b] dark:text-white text-xl font-black leading-tight uppercase tracking-tight">{t(`servicesPage.specialties.items.${item.key}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">{t(`servicesPage.specialties.items.${item.key}.desc`)}</p>
                </div>
                {item.path ? (
                  <Link 
                    to={`/${lng}${item.path}`} 
                    className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] hover:underline mt-2"
                  >
                    View Deep Knowledge
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                ) : (
                  <div className="h-[22px]"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full flex justify-center py-16 bg-slate-50 dark:bg-background-dark">
        <div className="w-full max-w-[1280px] px-8 flex flex-col">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight tracking-tight mb-12 text-center"
          >
            {t('servicesPage.process.title')}
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 relative"
          >
            {/* Connecting Line for Desktop */}
            <div className="absolute top-6 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-10"></div>
            {[1, 2, 3].map((step) => (
              <motion.div key={step} variants={fadeInUp} className="flex flex-col items-center text-center gap-4">
                <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">{step}</div>
                <h3 className="text-lg font-bold text-[#0d141b] dark:text-white">{t(`servicesPage.process.step${step}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{t(`servicesPage.process.step${step}.desc`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex justify-center py-16 bg-white dark:bg-[#1a2632] border-t border-slate-100 dark:border-slate-800">
        <div className="w-full max-w-[1280px] px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-12 flex flex-row items-center justify-between gap-8 border border-primary/10"
          >
            <div className="flex flex-col gap-2 text-left">
              <h2 className="text-3xl font-bold text-[#0d141b] dark:text-white">{t('servicesPage.cta.title')}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">{t('servicesPage.cta.description')}</p>
            </div>
            <div className="flex flex-col gap-4 items-end w-auto">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined text-primary text-2xl">call</span>
                (213) 381-5500
              </div>
              <Link to="mailto:yonseichiropractic@gmail.com" className="flex w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-orange-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-md">
                {t('servicesPage.cta.button')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServicesDesktop;
