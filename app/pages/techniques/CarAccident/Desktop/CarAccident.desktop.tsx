import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const CarAccidentDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('techniques.carAccident.title')}
        description={t('techniques.carAccident.pain.p1')}
        image="/o-10.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[200px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/o-10.jpg')" }}
          role="img"
          aria-label="Car Accident Recovery"
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
            {t('techniques.carAccident.badge')}
          </motion.div>
          <motion.h1 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-5xl font-black text-white leading-tight drop-shadow-lg"
          >
            {t('techniques.carAccident.title')}
          </motion.h1>
        </motion.div>
      </section>

      <section className="py-24 px-10 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('techniques.carAccident.pain.title')}</h2>
            <p className="mb-6">{t('techniques.carAccident.pain.p1')}</p>
            <p className="mb-12">{t('techniques.carAccident.pain.p2')}</p>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.carAccident.symptoms.title')}</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  'dizziness', 'nausea', 'vomiting', 'rigidity', 'tinnitus', 'pain'
                ].map((key) => (
                  <div key={key} className="flex items-center gap-2 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-base">warning</span>
                    {t(`techniques.carAccident.symptoms.items.${key}`)}
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('techniques.carAccident.whiplash.title')}</h2>
            <p className="mb-6">{t('techniques.carAccident.whiplash.p1')}</p>
            <p className="mb-12">{t('techniques.carAccident.whiplash.p2')}</p>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.carAccident.damage.title')}</h3>
              <p className="mb-6">{t('techniques.carAccident.damage.p1')}</p>
              <p className="font-bold text-slate-800 dark:text-white">{t('techniques.carAccident.damage.p2')}</p>
            </div>

            <p className="text-lg font-bold text-center text-slate-900 dark:text-white italic leading-relaxed">
              "{t('techniques.carAccident.quote')}"
            </p>

            <div className="mt-12 flex justify-center">
              <div className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                <img 
                  src="/car_accident.gif" 
                  alt="Illustration of car accident impact and whiplash" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="mailto:yonseichiropractic@gmail.com" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('techniques.carAccident.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarAccidentDesktop;
