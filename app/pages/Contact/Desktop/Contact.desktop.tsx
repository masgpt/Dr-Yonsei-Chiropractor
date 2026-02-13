import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';

const ContactDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-8 py-12 overflow-hidden">
      {/* Page Heading */}
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
        className="flex flex-col gap-3 mb-10"
      >
        <motion.h1
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-text-main dark:text-white text-5xl font-black leading-tight tracking-tight"
        >
          {t('contactPage.hero.title')}
        </motion.h1>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-text-secondary dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl"
        >
          {t('contactPage.hero.description')}
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-12">
        {/* Left Column: Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="col-span-5 flex flex-col gap-8"
        >
          {/* Location & Contact Info */}
          <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.details.title')}</h2>
            </div>
            {/* Address Item */}
            <Link
              href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
              external
              className="flex gap-4 px-6 py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">location_on</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors">{t('footer.address')}</p>
              </div>
            </Link>
            {/* Phone Item */}
            <Link
              href="tel:2133815500"
              className="flex gap-4 px-6 py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">call</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors">(213) 381-5500</p>
                <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">{t('contactPage.details.phone.label')}</p>
              </div>
            </Link>
            {/* Email Item */}
            <Link
              href="mailto:yonseichiropractic@gmail.com"
              className="flex gap-4 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">mail</span>
              </div>
              <div className="flex flex-1 flex-col justify-center overflow-hidden">
                <p className="text-text-main dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors truncate">yonseichiropractic@gmail.com</p>
                <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">{t('contactPage.details.email.label')}</p>
              </div>
            </Link>
          </div>

          {/* Hours */}
          <section
            className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
            aria-labelledby="hours-title"
          >
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 id="hours-title" className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.hours.title')}</h2>
            </div>
            <div className="px-6 py-2">
              <div className="flex flex-col">
                {[
                  { label: t('contact.hours.weekdays'), value: '9:00 AM - 6:00 PM' },
                  { label: t('contact.hours.thursday'), value: '2:00 PM - 6:00 PM' },
                  { label: t('contact.hours.saturday'), value: '9:00 AM - 1:00 PM' },
                  { label: t('contact.hours.sunday'), value: t('contact.hours.closed'), highlight: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">{item.label}</p>
                    <p className={`text-sm font-bold leading-normal ${item.highlight ? 'text-red-500' : 'text-text-main dark:text-white'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>

        {/* Right Column: Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="col-span-7 flex flex-col gap-8 h-full"
        >
          {/* Map Embed */}
          <div className="w-full h-[400px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm relative">
            <iframe
              title="Map showing the location of Yonsei Chiropractic in Los Angeles"
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?q=3200%20Wilshire%20Blvd%20%23302%2C%20Los%20Angeles%2C%20CA%2090010&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ContactDesktop;
