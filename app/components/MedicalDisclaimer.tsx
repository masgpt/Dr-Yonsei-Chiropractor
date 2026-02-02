import React from 'react';
import { useTranslation } from 'react-i18next';

const MedicalDisclaimer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-sm">info</span>
        Medical Disclaimer
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        The information provided on this website is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website. The chiropractic techniques described, including Palmer Upper Cervical Specific (H.I.O.), are specialized procedures and results may vary between individuals.
      </p>
    </div>
  );
};

export default MedicalDisclaimer;
