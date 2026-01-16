import React from 'react';
import { useTranslation } from 'react-i18next';

const Accessibility: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          {t('accessibilityPage.title')}
        </h1>
        
        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6">
          <p>
            {t('accessibilityPage.intro')}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
            {t('accessibilityPage.conformance.title')}
          </h2>
          <p>
            {t('accessibilityPage.conformance.body')}
          </p>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
            {t('accessibilityPage.feedback.title')}
          </h2>
          <p>
            {t('accessibilityPage.feedback.body')}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('accessibilityPage.feedback.phone')}</li>
            <li>{t('accessibilityPage.feedback.email')}</li>
            <li>{t('accessibilityPage.feedback.address')}</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
            {t('accessibilityPage.technical.title')}
          </h2>
          <p>
            {t('accessibilityPage.technical.body')}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('accessibilityPage.technical.items.html')}</li>
            <li>{t('accessibilityPage.technical.items.aria')}</li>
            <li>{t('accessibilityPage.technical.items.css')}</li>
            <li>{t('accessibilityPage.technical.items.js')}</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
            {t('accessibilityPage.assessment.title')}
          </h2>
          <p>
            {t('accessibilityPage.assessment.body')}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('accessibilityPage.assessment.items.self')}</li>
            <li>{t('accessibilityPage.assessment.items.automated')}</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
            {t('accessibilityPage.approval.title')}
          </h2>
          <p>
            {t('accessibilityPage.approval.body')}
          </p>
          <p>
            {t('accessibilityPage.approval.date')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;