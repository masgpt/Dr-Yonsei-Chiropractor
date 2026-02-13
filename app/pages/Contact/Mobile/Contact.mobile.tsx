import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0 }
};

const ContactMobile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-grow w-full px-4 py-8 overflow-hidden transition-colors duration-300">
      {/* Page Heading */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        className="flex flex-col gap-3 mb-8 text-center"
      >
        <h1 className="text-text-main dark:text-white text-3xl font-black leading-tight tracking-tight uppercase">{t('contactPage.hero.title')}</h1>
        <p className="text-text-secondary dark:text-slate-400 text-base font-normal leading-relaxed">
          {t('contactPage.hero.description')}
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* Location & Details */}
        <div className="flex flex-col gap-6 order-1">
          {/* Info Card */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight uppercase">{t('contactPage.details.title')}</h2>
            </div>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
              external
              className="flex gap-4 px-5 py-4 border-b border-slate-100 dark:border-slate-800 transition-colors"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">location_on</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-sm font-bold leading-normal">{t('footer.address')}</p>
              </div>
            </Link>
            <Link
              href="tel:2133815500"
              className="flex gap-4 px-5 py-4 border-b border-slate-100 dark:border-slate-800 transition-colors"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">call</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-sm font-bold leading-normal">(213) 381-5500</p>
                <p className="text-text-secondary dark:text-slate-400 text-xs font-normal leading-normal">{t('contactPage.details.phone.label')}</p>
              </div>
            </Link>
            <Link
              href="mailto:yonseichiropractic@gmail.com"
              className="flex gap-4 px-5 py-4 transition-colors"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">mail</span>
              </div>
              <div className="flex flex-1 flex-col justify-center overflow-hidden">
                <p className="text-text-main dark:text-white text-sm font-bold leading-normal truncate">yonseichiropractic@gmail.com</p>
                <p className="text-text-secondary dark:text-slate-400 text-xs font-normal leading-normal">{t('contactPage.details.email.label')}</p>
              </div>
            </Link>
          </motion.div>

          {/* Hours Card */}
          <motion.section
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
            aria-labelledby="hours-title"
          >
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 id="hours-title" className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight uppercase">{t('contactPage.hours.title')}</h2>
            </div>
            <div className="px-5 py-2">
              <div className="flex flex-col">
                {[
                  { label: t('contact.hours.weekdays'), value: '9:00 AM - 6:00 PM' },
                  { label: t('contact.hours.thursday'), value: '2:00 PM - 6:00 PM' },
                  { label: t('contact.hours.saturday'), value: '9:00 AM - 1:00 PM' },
                  { label: t('contact.hours.sunday'), value: t('contact.hours.closed'), highlight: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-xs font-medium leading-normal">{item.label}</p>
                    <p className={`text-xs font-bold leading-normal ${item.highlight ? 'text-red-500' : 'text-text-main dark:text-white'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Map Last */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="w-full h-[250px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm relative"
          >
            <iframe
              title="Map showing the location of Yonsei Chiropractic in Los Angeles"
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?q=3200%20Wilshire%20Blvd%20%23302%2C%20Los%20Angeles%2C%20CA%2090010&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
