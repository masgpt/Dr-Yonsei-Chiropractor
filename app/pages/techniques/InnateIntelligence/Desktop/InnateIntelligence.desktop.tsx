import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';
import { motion } from 'framer-motion';

const InnateIntelligenceDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('techniques.innateIntelligence.title')}
        description={t('techniques.innateIntelligence.p1')}
        image="/o-1.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/o-1.jpg')" }}
          role="img"
          aria-label="Natural Healing"
        ></motion.div>
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
          className="relative z-10 max-w-4xl mx-auto px-8 text-center"
        >
          <motion.div 
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/30"
          >
            {t('techniques.innateIntelligence.badge')}
          </motion.div>
          <motion.h1 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-5xl font-black text-white leading-tight drop-shadow-lg"
          >
            {t('techniques.innateIntelligence.title')}
          </motion.h1>
        </motion.div>
      </section>

      <section className="py-24 px-10 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
              {t('techniques.innateIntelligence.p1')}
            </p>
            
            <p className="mb-6">{t('techniques.innateIntelligence.p2')}</p>

            <div className="flex flex-row gap-8 items-center bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-12">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.innateIntelligence.vital.title')}</h3>
                <p className="mb-4">{t('techniques.innateIntelligence.vital.p1')}</p>
                <p className="font-bold text-primary">{t('techniques.innateIntelligence.vital.p2')}</p>
              </div>
              <div className="size-48 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-7xl">auto_awesome</span>
              </div>
            </div>

            <p className="mb-6">{t('techniques.innateIntelligence.p3')}</p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('techniques.innateIntelligence.consequence.title')}</h3>
            <p className="mb-6">{t('techniques.innateIntelligence.consequence.p1')}</p>
            
            <div className="grid grid-cols-5 gap-4 mb-8">
              {[ 'heart', 'lungs', 'liver', 'kidneys', 'stomach' ].map((key) => (
                <div key={key} className="flex flex-col items-center p-4 bg-slate-100 dark:bg-slate-700 rounded-xl text-center">
                  <span className="material-symbols-outlined text-primary mb-2 text-2xl">emergency_home</span>
                  <span className="text-xs font-bold uppercase">{t(`techniques.innateIntelligence.consequence.organs.${key}`)}</span>
                </div>
              ))}
            </div>

            <p className="mb-6">{t('techniques.innateIntelligence.consequence.p2')}</p>

            <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl border-l-8 border-primary">
              <p className="text-xl font-medium italic mb-6 leading-relaxed">{t('techniques.innateIntelligence.quote')}</p>
              <p className="text-lg opacity-90">{t('techniques.innateIntelligence.cause')}</p>
            </div>

            <p className="mt-12">{t('techniques.innateIntelligence.p4')}</p>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('techniques.innateIntelligence.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnateIntelligenceDesktop;
