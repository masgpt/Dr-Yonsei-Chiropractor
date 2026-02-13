import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';

const MessageFromDrParkDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.philosophy')}
        description={t('message.intro')}
        image="/dr-park.png"
      />
      <section className="py-24 px-10 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            {t('message.badge')}
          </div>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">{t('message.title')}</h1>
          
          <div className="prose md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
              {t('message.intro')}
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('message.q1')}</h3>
            <p className="mb-6">{t('message.a1')}</p>
            <p className="mb-6">{t('message.innate')}</p>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-12">
              <p className="italic font-medium text-lg leading-relaxed">
                "{t('message.quote')}"
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('message.philosophy.title')}</h3>
            <p className="mb-6">{t('message.philosophy.p1')}</p>
            <p className="mb-6">{t('message.philosophy.p2')}</p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('message.technique.title')}</h3>
            <p className="mb-6">{t('message.technique.p1')}</p>
            <p className="mb-6">{t('message.technique.p2')}</p>

            <div className="bg-slate-900 text-white p-8 rounded-2xl my-12 border-l-8 border-primary">
              <h4 className="text-xl font-bold mb-4">{t('message.paradigm.title')}</h4>
              <p className="mb-0 text-base opacity-90 leading-relaxed">
                {t('message.paradigm.content')}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('message.key.title')}</h3>
            <p className="mb-6">{t('message.key.p1')}</p>
            <p className="mb-12">{t('message.key.p2')}</p>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t('home.meetDoctor.name')}, D.C., M.S.</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest">{t('common.doctorTitle')}</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="mailto:yonseichiropractic@gmail.com" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              {t('message.cta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageFromDrParkDesktop;
