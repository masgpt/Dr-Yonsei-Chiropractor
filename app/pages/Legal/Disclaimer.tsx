"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const Disclaimer: React.FC = () => {
    const { t } = useTranslation();

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="flex-grow w-full max-w-[800px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
            <SEO
                title={t('disclaimerPage.title')}
                description={t('disclaimerPage.intro')}
            />
            <motion.div
                initial="initial"
                animate="animate"
                className="space-y-12"
            >
                <motion.div {...fadeInUp} className="text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        {t('disclaimerPage.title')}
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t('disclaimerPage.intro')}
                    </p>
                </motion.div>

                <div className="space-y-10">
                    <motion.section
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">medical_services</span>
                            {t('disclaimerPage.sections.noMedicalAdvice.title')}
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t('disclaimerPage.sections.noMedicalAdvice.body')}
                        </div>
                    </motion.section>

                    <motion.section
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">group</span>
                            {t('disclaimerPage.sections.noRelationship.title')}
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t('disclaimerPage.sections.noRelationship.body')}
                        </div>
                    </motion.section>

                    <motion.section
                        {...fadeInUp}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">verified</span>
                            {t('disclaimerPage.sections.outcomes.title')}
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t('disclaimerPage.sections.outcomes.body')}
                        </div>
                    </motion.section>

                    <motion.section
                        {...fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">gavel</span>
                            {t('disclaimerPage.sections.jurisdiction.title')}
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t('disclaimerPage.sections.jurisdiction.body')}
                        </div>
                    </motion.section>

                    <motion.section
                        {...fadeInUp}
                        transition={{ delay: 0.5 }}
                        className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-2xl"
                    >
                        <h2 className="text-lg font-bold text-red-900 dark:text-red-400 flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined">e911_emergency</span>
                            {t('disclaimerPage.sections.emergency.title')}
                        </h2>
                        <p className="text-red-700 dark:text-red-300 font-medium">
                            {t('disclaimerPage.sections.emergency.body')}
                        </p>
                    </motion.section>
                </div>

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.6 }}
                    className="pt-12 border-t border-slate-100 dark:border-slate-800 text-center"
                >
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        Last updated: February 9, 2026
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Disclaimer;
