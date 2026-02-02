import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';
import SEO from '../../../components/SEO';
import Modal from '../../../components/ui/Modal';
import { reviews } from '../Shared/home.constants';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const HomeMobile: React.FC = () => {
  const { t } = useTranslation(['translation', 'reviews']);
  const [selectedReview, setSelectedReview] = useState<any | null>(null);

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <>
      <SEO 
        title={t('home.hero.title')}
        description={t('home.hero.description')}
      />
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-[#0a0f14] overflow-hidden" aria-label="Introduction">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/85 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="relative h-[500px] w-full flex items-center">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg')" }}
            role="img"
            aria-label="Yonsei Chiropractic Clinic interior"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </motion.div>
          <div className="relative z-10 px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 uppercase tracking-[0.4em] text-[10px] text-white mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 font-black tracking-[0.4em]">Palmer Upper Cervical</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span className="text-white/70 font-semibold text-[10px]">Los Angeles, CA</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl font-black tracking-tight text-white leading-[1.1] mb-6 uppercase"
            >
              {t('home.hero.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-slate-300 mb-10 max-w-md leading-relaxed font-medium"
            >
              {t('home.hero.description')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <Link to="/contact" className="h-14 px-8 rounded-2xl bg-primary text-white font-black flex items-center justify-center shadow-2xl shadow-primary/30 active:scale-[0.98] transition-all uppercase tracking-widest text-sm">
                {t('home.hero.bookAppointment')}
              </Link>
              <Link to="/techniques/upper-cervical" className="h-14 px-8 rounded-2xl bg-white/10 text-white font-bold border border-white/20 backdrop-blur-md flex items-center justify-center active:scale-[0.98] transition-all">
                {t('home.hero.learnMore')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-slate-50 dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-900" aria-label="Our credentials">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            {[
              { icon: 'verified_user', title: t('home.trustStrip.palmerTitle'), desc: t('home.trustStrip.palmerDesc') },
              { icon: 'workspace_premium', title: t('home.trustStrip.awardTitle'), desc: t('home.trustStrip.awardDesc') },
              { icon: 'self_improvement', title: t('home.trustStrip.healingTitle'), desc: t('home.trustStrip.healingDesc') }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="flex flex-row items-center gap-4 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 flex items-center justify-center text-primary active:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[24px] font-light" aria-hidden="true">{item.icon}</span>
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Intro / Meet Dr. Park */}
      <section className="py-10 bg-white dark:bg-[#0a0f14] relative overflow-hidden" aria-labelledby="meet-doctor-heading">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="max-w-[1280px] mx-auto px-10"
        >
          <div className="grid grid-cols-1 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-3">The Expert Behind Your Care</span>
                <h2 id="meet-doctor-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                  {t('home.meetDoctor.name')}
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1.5 bg-primary mt-4 rounded-full"
                ></motion.div>
              </div>
              <div className="space-y-5">
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic font-medium">
                  "{t('home.meetDoctor.quote')}"
                </p>
                <div className="flex flex-col gap-5 items-start">
                  <Link to="/about" className="h-12 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-widest active:scale-[0.98] transition-all shadow-xl flex items-center justify-center">
                    {t('home.meetDoctor.readBio')}
                  </Link>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Yonsei Chiropractic Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/50" aria-labelledby="services-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col mb-12 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Our Expertise</span>
              <h2 id="services-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-none uppercase">
                {t('home.services.title')}
              </h2>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-sm font-medium leading-relaxed">
              {t('home.services.description')}
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              { to: "/techniques/upper-cervical", img: "/o-14.jpg", title: t('home.services.upperCervicalTitle'), desc: t('home.services.upperCervicalDesc'), label: "Cervical spine X-ray" },
              { to: "/techniques/tmj", img: "/o-5.jpg", title: t('home.services.tmjTitle'), desc: t('home.services.tmjDesc'), label: "Postural symmetry" },
              { to: "/techniques/car-accident", img: "/o-10.jpg", title: t('home.services.injuryTitle'), desc: t('home.services.injuryDesc'), label: "Spine X-rays" }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={service.to} className="group relative flex flex-col bg-slate-900 rounded-[20px] overflow-hidden border border-slate-100/10 transition-all duration-500 !text-inherit h-32">
                  <article className="flex flex-col h-full w-full">
                    <div 
                      className="absolute inset-0 w-full bg-slate-200 bg-cover bg-center grayscale" 
                      style={{ backgroundImage: `url('${service.img}')` }}
                      role="img"
                      aria-label={service.label}
                    >
                      <div className="absolute inset-0 bg-slate-950/70"></div>
                    </div>
                    
                    <div className="relative p-6 flex flex-col justify-center h-full">
                      <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{service.title}</h3>
                      <p className="text-xs text-slate-300 mb-2 truncate font-medium leading-relaxed">{service.desc}</p>
                      <div className="text-primary font-black text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2">
                        {t('home.services.learnMore')} <span className="material-symbols-outlined text-[14px]" aria-hidden="true">east</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white dark:bg-[#0a0f14] relative overflow-hidden" aria-labelledby="reviews-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col justify-between items-start mb-12 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Patient Experiences</span>
              <h2 id="reviews-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-none uppercase">
                {t('hero.title', { ns: 'reviews' })}
              </h2>
            </div>
            <Link to="/reviews" className="h-12 px-8 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest active:bg-slate-50 transition-all flex items-center justify-center">
              {t('readAll', { ns: 'reviews' })}
            </Link>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {reviews.slice(0, 2).map((rev) => {
              const fullText = t(`review${rev.id}.text`, { ns: 'reviews' });
              const isTruncated = fullText.length > 120;

              return (
                <motion.div 
                  key={rev.id}
                  variants={fadeInUp}
                  whileTap={{ scale: 0.98 }}
                >
                  <button 
                    onClick={() => setSelectedReview({ ...rev, text: fullText })}
                    className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-[20px] border border-slate-100 dark:border-slate-800 relative transition-all group text-left block w-full"
                  >
                    <div className="flex gap-1 text-primary mb-2" aria-label="5 star rating">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="material-symbols-outlined text-[16px] fill-current" aria-hidden="true">star</span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 relative z-10 italic font-medium leading-relaxed tracking-tight">
                      {truncateText(fullText)}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-black text-slate-900 dark:text-white text-[10px] uppercase tracking-widest transition-colors truncate">
                          {rev.name}
                        </p>
                        <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">{t('common.location')}</p>
                      </div>
                      {isTruncated && (
                        <div className="shrink-0">
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-primary font-black text-[9px] uppercase tracking-widest shadow-sm border border-slate-100 dark:border-slate-700 active:bg-primary active:text-white transition-all">
                            {t('items.readMore', { ns: 'reviews' }) || 'Read More'}
                            <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Review Modal */}
      <Modal
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        title={selectedReview ? (
          <div className="flex items-center justify-between w-full gap-3 pr-2">
            <div className="min-w-0">
              <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-widest leading-tight truncate">
                {selectedReview.name}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                {t('common.location')}
              </p>
            </div>
            <div className="flex gap-0.5 text-primary shrink-0" aria-label="5 star rating">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="material-symbols-outlined text-[16px] fill-current" aria-hidden="true">star</span>
              ))}
            </div>
          </div>
        ) : ""}
      >
        {selectedReview && (
          <div className="space-y-6">
            <p className="text-base text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
              "{selectedReview.text}"
            </p>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
              <Link to="/reviews" className="text-primary font-black text-xs uppercase tracking-widest text-center py-2">
                {t('readAll', { ns: 'reviews' }) || 'Read All Reviews'}
              </Link>
              <button 
                onClick={() => setSelectedReview(null)}
                className="h-12 w-full rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest active:scale-[0.98] transition-transform"
              >
                {t('common.close') === 'common.close' ? 'Close' : t('common.close')}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Location & Contact Preview */}
      <section className="py-10 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-900" aria-labelledby="location-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-1 gap-10">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Visit Us</span>
                <h2 id="location-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                  {t('contact.title')}
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1.5 bg-primary mt-6 rounded-full"
                ></motion.div>
              </div>
              
              <div className="space-y-8">
                <Link 
                  href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                  external
                  className="flex items-start gap-6 group"
                  aria-label={t('footer.address')}
                >
                  <div className="w-14 h-14 shrink-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-primary active:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-2">{t('contact.labels.address')}</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white leading-snug transition-colors">{t('footer.address')}</p>
                  </div>
                </Link>

                <div className="grid grid-cols-1 gap-8">
                  <Link 
                    href="tel:2133815500"
                    className="flex items-center gap-6 group"
                    aria-label="Call us at (213) 381-5500"
                  >
                    <div className="w-14 h-14 shrink-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-primary active:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[28px]" aria-hidden="true">call</span>
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">{t('contact.labels.call')}</h4>
                      <p className="text-lg font-black text-slate-900 dark:text-white transition-colors tracking-tight">(213) 381-5500</p>
                    </div>
                  </Link>
                  <Link 
                    href="mailto:yonseichiropractic@gmail.com"
                    className="flex items-center gap-6 group"
                    aria-label="Email us at yonseichiropractic@gmail.com"
                  >
                    <div className="w-14 h-14 shrink-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-primary active:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[28px]" aria-hidden="true">mail</span>
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">{t('contact.labels.email')}</h4>
                      <p className="text-xs font-bold text-slate-900 dark:text-white transition-colors truncate">yonseichiropractic@gmail.com</p>
                    </div>
                  </Link>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">schedule</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-3">{t('contact.labels.hours')}</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { label: t('contact.hours.weekdays'), time: '9:00 AM - 6:00 PM' },
                        { label: t('contact.hours.thursday'), time: '2:00 PM - 6:00 PM' },
                        { label: t('contact.hours.saturday'), time: '9:00 AM - 1:00 PM' },
                        { label: t('contact.hours.sunday'), time: t('contact.hours.closed'), highlight: true },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-800 last:border-0">
                          <span className="text-xs font-black uppercase tracking-widest text-slate-500">{item.label}</span>
                          <span className={`text-sm font-bold ${item.highlight ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link 
                  href="https://www.google.com/maps/dir/?api=1&destination=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                  external
                  className="h-14 w-full px-10 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">directions</span>
                  {t('contact.labels.directions')}
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[300px] w-full bg-slate-200 dark:bg-slate-800 rounded-[32px] overflow-hidden shadow-2xl relative border-4 border-white dark:border-slate-800"
            >
              <iframe 
                title="Map showing the location of Yonsei Chiropractic Clinic in Los Angeles"
                className="w-full h-full border-0 grayscale dark:invert dark:hue-rotate-180"
                src="https://maps.google.com/maps?q=3200%20Wilshire%20Blvd%20%23302%2C%20Los%20Angeles%2C%20CA%2090010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMobile;
