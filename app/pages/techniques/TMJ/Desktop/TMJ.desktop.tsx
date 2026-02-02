import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';
import { motion } from 'framer-motion';

const TMJDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('techniques.tmj.title')}
        description={t('techniques.tmj.p1')}
        image="/o-5.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/o-5.jpg')" }}
          role="img"
          aria-label="TMJ / Jaw Anatomy"
        ></motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-black text-white leading-tight drop-shadow-lg"
          >
            {t('techniques.tmj.title')}
          </motion.h1>
        </div>
      </section>

      <section className="py-24 px-10 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
              {t('techniques.tmj.p1')}
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('techniques.tmj.connection.title')}</h2>
            <p className="mb-6">{t('techniques.tmj.connection.p1')}</p>
            <p className="mb-6">{t('techniques.tmj.connection.p2')}</p>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.tmj.symptoms.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {[ 'pain', 'chewing', 'clicking', 'ear' ].map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
                    <span className="text-base">{t(`techniques.tmj.symptoms.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('techniques.tmj.expertise.title')}</h2>
            <p className="mb-6">{t('techniques.tmj.expertise.p1')}</p>
            <p className="mb-6">{t('techniques.tmj.expertise.p2')}</p>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('techniques.tmj.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TMJDesktop;
