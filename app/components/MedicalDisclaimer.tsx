import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';

const MedicalDisclaimer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
      <h3 className="text-sm font-black text-slate-900 dark:text-white mb-3 flex items-center gap-2 uppercase tracking-widest">
        <span className="material-symbols-outlined text-primary text-lg">info</span>
        {t('disclaimerPage.sections.noMedicalAdvice.title')}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
        {t('disclaimerPage.sections.noMedicalAdvice.body')}
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
        <Link
          to="/disclaimer"
          className="text-[10px] font-bold text-primary hover:text-orange-600 uppercase tracking-widest transition-colors flex items-center gap-1"
        >
          View Full Disclaimer
          <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
        </Link>
        <div className="hidden sm:block w-px h-3 bg-slate-200 dark:bg-slate-800"></div>
        <p className="text-[10px] text-slate-400 dark:text-slate-600 italic">
          {t('disclaimerPage.sections.emergency.body')}
        </p>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;
