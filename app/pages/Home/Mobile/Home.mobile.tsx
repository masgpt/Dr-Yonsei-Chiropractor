import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../../../components/ui/Link';
import SEO from '../../../components/SEO';
import { reviews } from '../Shared/home.constants';

const HomeMobile: React.FC = () => {
  const { t } = useTranslation(['translation', 'reviews']);

  return (
    <>
      <SEO 
        title={t('home.hero.title')}
        description={t('home.hero.description')}
      />
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-[#0a0f14] overflow-hidden" aria-label="Introduction">
        <div className="relative h-[450px] w-full flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg')" }}
            role="img"
            aria-label="Yonsei Chiropractic Clinic interior"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 w-full">
            <h1 className="text-4xl font-black tracking-tight text-white leading-[1.1] mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-md leading-relaxed font-medium">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="h-14 px-8 rounded-2xl bg-primary text-white font-bold flex items-center justify-center shadow-2xl shadow-primary/30 active:scale-[0.98] transition-transform">
                {t('home.hero.bookAppointment')}
              </Link>
              <Link to="/techniques/upper-cervical" className="h-14 px-8 rounded-2xl bg-white/10 text-white font-bold border border-white/20 backdrop-blur-md flex items-center justify-center active:scale-[0.98] transition-transform">
                {t('home.hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-slate-50 dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-900" aria-label="Our credentials">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-row items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[24px] font-light" aria-hidden="true">verified_user</span>
              </div>
              <div className="space-y-0.5">
                <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-white">{t('home.trustStrip.palmerTitle')}</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('home.trustStrip.palmerDesc')}</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[24px] font-light" aria-hidden="true">workspace_premium</span>
              </div>
              <div className="space-y-0.5">
                <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-white">{t('home.trustStrip.awardTitle')}</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('home.trustStrip.awardDesc')}</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[24px] font-light" aria-hidden="true">self_improvement</span>
              </div>
              <div className="space-y-0.5">
                <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-white">{t('home.trustStrip.healingTitle')}</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('home.trustStrip.healingDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Meet Dr. Park */}
      <section className="py-10 bg-white dark:bg-[#0a0f14] relative overflow-hidden" aria-labelledby="meet-doctor-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-1 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-3">The Expert Behind Your Care</span>
                <h2 id="meet-doctor-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                  {t('home.meetDoctor.name')}
                </h2>
                <div className="h-1.5 w-20 bg-primary mt-4 rounded-full"></div>
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950/50" aria-labelledby="services-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="flex flex-col mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Our Expertise</span>
              <h2 id="services-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-none uppercase">
                {t('home.services.title')}
              </h2>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-sm font-medium leading-relaxed">
              {t('home.services.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Service 1 */}
            <Link to="/techniques/upper-cervical" className="group relative flex flex-col bg-slate-900 rounded-[20px] overflow-hidden border border-slate-100/10 active:scale-[0.98] transition-all duration-500 !text-inherit">
              <article className="flex flex-col h-full w-full">
                <div 
                  className="absolute inset-0 w-full bg-slate-200 bg-cover bg-center grayscale" 
                  style={{ backgroundImage: "url('/o-14.jpg')" }}
                  role="img"
                  aria-label="Side-view cervical spine X-ray highlighting the upper cervical alignment"
                >
                  <div className="absolute inset-0 bg-slate-950/70"></div>
                </div>
                
                <div className="relative p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{t('home.services.upperCervicalTitle')}</h3>
                  <p className="text-xs text-slate-300 mb-4 flex-1 font-medium leading-relaxed">{t('home.services.upperCervicalDesc')}</p>
                  <div className="text-primary font-black text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2">
                    {t('home.services.learnMore')} <span className="material-symbols-outlined text-[14px]" aria-hidden="true">east</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Service 2 */}
            <Link to="/techniques/tmj" className="group relative flex flex-col bg-slate-900 rounded-[20px] overflow-hidden border border-slate-100/10 active:scale-[0.98] transition-all duration-500 !text-inherit">
              <article className="flex flex-col h-full w-full">
                <div 
                  className="absolute inset-0 w-full bg-slate-200 bg-cover bg-center grayscale" 
                  style={{ backgroundImage: "url('/o-5.jpg')" }}
                  role="img"
                  aria-label="Before and after photos of heel lifts showing improved postural symmetry"
                >
                  <div className="absolute inset-0 bg-slate-950/70"></div>
                </div>
                <div className="relative p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{t('home.services.tmjTitle')}</h3>
                  <p className="text-xs text-slate-300 mb-4 flex-1 font-medium leading-relaxed">{t('home.services.tmjDesc')}</p>
                  <div className="text-primary font-black text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2">
                    {t('home.services.learnMore')} <span className="material-symbols-outlined text-[14px]" aria-hidden="true">east</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Service 3 */}
            <Link to="/techniques/car-accident" className="group relative flex flex-col bg-slate-900 rounded-[20px] overflow-hidden border border-slate-100/10 active:scale-[0.98] transition-all duration-500 !text-inherit">
              <article className="flex flex-col h-full w-full">
                <div 
                  className="absolute inset-0 w-full bg-slate-200 bg-cover bg-center grayscale" 
                  style={{ backgroundImage: "url('/o-10.jpg')" }}
                  role="img"
                  aria-label="Front and back spine X-rays with alignment markers used for car accident recovery"
                >
                  <div className="absolute inset-0 bg-slate-950/70"></div>
                </div>
                <div className="relative p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{t('home.services.injuryTitle')}</h3>
                  <p className="text-xs text-slate-300 mb-4 flex-1 font-medium leading-relaxed">{t('home.services.injuryDesc')}</p>
                  <div className="text-primary font-black text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2">
                    {t('home.services.learnMore')} <span className="material-symbols-outlined text-[14px]" aria-hidden="true">east</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white dark:bg-[#0a0f14] relative overflow-hidden" aria-labelledby="reviews-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="flex flex-col justify-between items-start mb-12 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Patient Experiences</span>
              <h2 id="reviews-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-none uppercase">
                {t('hero.title', { ns: 'reviews' })}
              </h2>
            </div>
            <Link to="/reviews" className="h-12 px-8 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest active:bg-slate-50 transition-all flex items-center justify-center">
              {t('readAll', { ns: 'reviews' })}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {reviews.slice(0, 2).map((rev) => (
              <Link key={rev.id} to="/reviews" className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-[20px] border border-slate-100 dark:border-slate-800 relative active:shadow-xl transition-all group !text-inherit">
                <div className="flex flex-row gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs shrink-0">
                    {rev.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 text-primary mb-2" aria-label="5 star rating">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="material-symbols-outlined text-[16px] fill-current" aria-hidden="true">star</span>
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 relative z-10 italic font-medium leading-relaxed tracking-tight">
                      {t(`review${rev.id}.text`, { ns: 'reviews' })}
                    </p>
                    <div>
                      <p className="font-black text-slate-900 dark:text-white text-[10px] uppercase tracking-widest transition-colors">
                        {rev.name}
                      </p>
                      <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">{t('common.location')}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Preview */}
      <section className="py-10 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-900" aria-labelledby="location-heading">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-8">
              <div>
                <span className="text-primary font-black text-xs uppercase tracking-[0.3em] block mb-4">Visit Us</span>
                <h2 id="location-heading" className="text-4xl font-black text-slate-900 dark:text-white leading-tight uppercase">
                  {t('contact.title')}
                </h2>
                <div className="h-1.5 w-20 bg-primary mt-6 rounded-full"></div>
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
            </div>
            <div className="h-[300px] w-full bg-slate-200 dark:bg-slate-800 rounded-[32px] overflow-hidden shadow-2xl relative border-4 border-white dark:border-slate-800">
              <iframe 
                title="Map showing the location of Yonsei Chiropractic Clinic in Los Angeles"
                className="w-full h-full border-0 grayscale dark:invert dark:hue-rotate-180"
                src="https://maps.google.com/maps?q=3200%20Wilshire%20Blvd%20%23302%2C%20Los%20Angeles%2C%20CA%2090010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMobile;
