import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../../components/SEO';

const InnateIntelligenceMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('techniques.innateIntelligence.title')}
        description={t('techniques.innateIntelligence.p1')}
        image="/o-1.jpg"
      />
      {/* Hero Section */}
      <section className="relative w-full h-[120px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/o-1.jpg')" }}
          role="img"
          aria-label="Natural Healing"
        ></div>
        <div className="relative z-10 w-full px-4 text-center">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest mb-3 border border-white/30">
            {t('techniques.innateIntelligence.badge')}
          </div>
          <h1 className="text-2xl font-black text-white leading-tight drop-shadow-lg">
            {t('techniques.innateIntelligence.title')}
          </h1>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-sm dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-6 leading-relaxed">
              {t('techniques.innateIntelligence.p1')}
            </p>
            
            <p className="mb-6">{t('techniques.innateIntelligence.p2')}</p>

            <div className="flex flex-col gap-8 items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-10">
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.innateIntelligence.vital.title')}</h3>
                <p className="mb-4">{t('techniques.innateIntelligence.vital.p1')}</p>
                <p className="font-bold text-primary">{t('techniques.innateIntelligence.vital.p2')}</p>
              </div>
              <div className="size-24 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-5xl">auto_awesome</span>
              </div>
            </div>

            <p className="mb-6">{t('techniques.innateIntelligence.p3')}</p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('techniques.innateIntelligence.consequence.title')}</h3>
            <p className="mb-6">{t('techniques.innateIntelligence.consequence.p1')}</p>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[ 'heart', 'lungs', 'liver', 'kidneys', 'stomach' ].map((key) => (
                <div key={key} className="flex flex-col items-center p-3 bg-slate-100 dark:bg-slate-700 rounded-xl text-center">
                  <span className="material-symbols-outlined text-primary mb-2 text-xl">emergency_home</span>
                  <span className="text-[10px] font-bold uppercase">{t(`techniques.innateIntelligence.consequence.organs.${key}`)}</span>
                </div>
              ))}
            </div>

            <p className="mb-6">{t('techniques.innateIntelligence.consequence.p2')}</p>

            <div className="mt-10 p-6 bg-slate-900 text-white rounded-2xl border-l-4 border-primary">
              <p className="text-lg font-medium italic mb-6 leading-relaxed">{t('techniques.innateIntelligence.quote')}</p>
              <p className="text-base opacity-90">{t('techniques.innateIntelligence.cause')}</p>
            </div>

            <p className="mt-10">{t('techniques.innateIntelligence.p4')}</p>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="mailto:yonseichiropractic@gmail.com" className="inline-flex items-center justify-center w-full h-12 px-8 rounded-lg bg-primary text-white font-bold transition-all shadow-lg">
              {t('techniques.innateIntelligence.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnateIntelligenceMobile;
