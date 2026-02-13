import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const UpperCervicalDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/o-14.jpg')" }}
          role="img"
          aria-label="Upper Cervical Care"
        ></motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-black text-white leading-tight drop-shadow-lg mb-2"
          >
            {t('techniques.upperCervical.title')}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg font-bold text-orange-300 drop-shadow-md"
          >
            {t('techniques.upperCervical.subtitle')}
          </motion.h2>
        </div>
      </section>

      <section className="py-24 px-10 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="prose md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none"
          >
            <p className="mb-6 leading-relaxed">{t('techniques.upperCervical.p1')}</p>
            <p className="mb-6 leading-relaxed">{t('techniques.upperCervical.p2')}</p>
            <p className="mb-12 leading-relaxed">{t('techniques.upperCervical.p3')}</p>

            <motion.div variants={fadeInUp} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.upperCervical.legacy.title')}</h3>
              <p className="mb-4">{t('techniques.upperCervical.legacy.p1')}</p>
              <p className="text-sm italic opacity-80">{t('techniques.upperCervical.legacy.p2')}</p>
            </motion.div>

            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('techniques.upperCervical.diagnostics.title')}</motion.h3>
            <motion.p variants={fadeInUp} className="mb-6">{t('techniques.upperCervical.diagnostics.p1')}</motion.p>
            <motion.ul variants={fadeInUp} className="list-disc pl-6 mb-8 space-y-3">
              <li>{t('techniques.upperCervical.diagnostics.xrays')}</li>
              <li>{t('techniques.upperCervical.diagnostics.instruments')}</li>
            </motion.ul>

            <motion.div variants={fadeInUp} className="mt-12 p-8 bg-primary text-white rounded-2xl relative overflow-hidden">
              <span className="material-symbols-outlined absolute top-2 left-2 text-white/10 text-8xl select-none">format_quote</span>
              <blockquote className="relative z-10">
                <p className="text-xl font-medium italic mb-6 leading-relaxed">{t('techniques.upperCervical.quote')}</p>
                <footer className="font-bold text-lg">??{t('home.meetDoctor.name')}</footer>
              </blockquote>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-12 mb-6">{t('techniques.upperCervical.p4')}</motion.p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="mailto:yonseichiropractic@gmail.com" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('techniques.upperCervical.cta')}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default UpperCervicalDesktop;
