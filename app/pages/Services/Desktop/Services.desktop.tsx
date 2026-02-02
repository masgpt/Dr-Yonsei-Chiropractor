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
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.techniques')}
        description={t('servicesPage.hero.subtitle')}
      />
      {/* Hero Section */}
      <div className="w-full bg-slate-50 dark:bg-background-dark flex justify-center overflow-hidden">
        <div className="w-full max-w-[1280px] px-8 py-5">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex min-h-[400px] flex-col gap-8 rounded-xl items-center justify-center p-8 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/cropped-cropped-cropped-cropped-healing-hands-wellness-center-chiropractic-1024x395.jpg')" }}
            role="img"
            aria-label="Chiropractor's hands supporting a patient's spine during healing care"
          >
            <div className="flex flex-col gap-2 text-center max-w-[600px] z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white text-5xl font-black leading-tight tracking-tight drop-shadow-md"
              >
                {t('servicesPage.hero.title')}
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-slate-100 text-base font-medium leading-relaxed mt-2 drop-shadow-sm"
              >
                {t('servicesPage.hero.subtitle')}
              </motion.h2>
            </div>
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              href="#treatments" 
              className="z-10 flex w-auto min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-orange-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-lg"
            >
              <span className="truncate">{t('servicesPage.hero.cta')}</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Intro Philosophy Section */}
      <div className="w-full flex justify-center py-16 overflow-hidden">
        <div className="w-full max-w-[1280px] px-8 flex flex-row gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              {t('servicesPage.philosophy.badge')}
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight">
              {t('servicesPage.philosophy.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {t('servicesPage.philosophy.p1')}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-auto w-full rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative min-h-[220px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-center p-8">
              <div className="flex flex-col items-center">
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                  className="material-symbols-outlined text-primary text-7xl mb-4"
                >
                  neurology
                </motion.span>
                <p className="text-primary font-bold text-xl uppercase tracking-widest">{t('servicesPage.philosophy.method')}</p>
                <p className="text-slate-500 text-sm">{t('servicesPage.philosophy.technique')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Treatments/Features Section */}
      <div id="treatments" className="w-full flex justify-center bg-white dark:bg-[#15202b] py-16">
        <div className="w-full max-w-[1280px] px-8 flex flex-col">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-10 text-left"
          >
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight tracking-tight">{t('servicesPage.specialties.title')}</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">{t('servicesPage.specialties.description')}</p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {specialtyKeys.map((item) => (
              <motion.div 
                key={item.key} 
                variants={fadeInUp}
                className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-6 hover:shadow-md transition-shadow"
              >
                <div className="size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-500 shrink-0">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">{t(`servicesPage.specialties.items.${item.key}.title`)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">{t(`servicesPage.specialties.items.${item.key}.desc`)}</p>
                </div>
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
              <Link to="/contact" className="flex w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-orange-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-md">
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
