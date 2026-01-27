import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../components/ui/Link';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-background-dark lg:pt-20 lg:pb-24" aria-label="Introduction">
        {/* Mobile Hero (Overlay) */}
        <div className="lg:hidden relative h-[500px] w-full flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg')" }}
            role="img"
            aria-label="Yonsei Chiropractic Clinic interior"
          >
            <div className="absolute inset-0 bg-slate-900/60"></div>
          </div>
          <div className="relative z-10 px-6 w-full">
            <h1 className="text-4xl font-black tracking-tight text-white leading-tight mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-md">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="h-12 px-6 rounded-lg bg-primary text-white font-bold flex items-center justify-center focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary">
                {t('home.hero.bookAppointment')}
              </Link>
              <Link to="/techniques/upper-cervical" className="h-12 px-6 rounded-lg bg-white/10 text-white font-bold border border-white/20 backdrop-blur-sm flex items-center justify-center focus:ring-2 focus:ring-white/50">
                {t('home.hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Hero (Side-by-Side) */}
        <div className="hidden lg:block max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                {t('home.hero.descriptionDesktop')}
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="tel:2133815500" className="h-12 px-6 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center min-w-[140px] focus:ring-2 focus:ring-primary/20 focus:ring-offset-2">
                  {t('home.hero.callNow')}
                </Link>
                <Link to="/contact" className="h-12 px-6 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold transition-all flex items-center justify-center border border-slate-200 dark:border-slate-700 min-w-[180px] focus:ring-2 focus:ring-slate-500/20">
                  {t('home.hero.requestAppointment')}
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2" aria-hidden="true">
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2w7qoKRIiZhLjhCgAHeX3vg67xyRGXuLFl1OoNLnR0Yec1rY2AeAdvsrPOhvjSOROpCN8hMFqSjvXWQ-_hik9od6ezTmbeJ1vd8ULFEAoQEioNMfKJTS5jB3APbbMDQpSMeQp1v_mfxHtHYoVDnhKY9AE6c1dUWIcUMuP_TU21IaznqkUNEy4KW4H2i2jN5xNsvYntDA94zBjSdbAcZFK8JlUdw12I-i3oNeejOJrXzuXdxGJ7iuEWYQM-68csN1YHkbLEKb66NA7')" }}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTiBxzYw56CdOrXypz_qix82KnvcJCL9VvI-v8wLOPhKd4f08zzfDtBtgnT6zaDamQeeOHmYN_V6fUtZmB1owh-saFa06itbczl0-ZhkQ_ctYDPsOZU8HSC0Ogn2ceGvN3iCUqZI--jhsnbDeo5g7LTpRv0ILwHmy8iK8ePqNkE-LP61J8SYZk0tTUlvxQC2o8jwgYgQ52bcsFIs-_ZgRtmkw1_y2c4K_5JSsRNFh0tLv9uONeVSTcdTmr9TLU5Pj9MWkvcFIITfeJ')" }}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-slate-200 flex items-center justify-center text-[10px] font-bold bg-slate-100">+50</div>
                </div>
                <p>{t('home.hero.trustedBy')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 scale-[0.98] -z-10"></div>
            <div 
              className="bg-slate-100 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-cover bg-center" 
              style={{ backgroundImage: "url('/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg')" }}
              role="img"
              aria-label="Chiropractor's hands performing an upper cervical adjustment on a patient"
            ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark" aria-label="Our credentials">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">verified_user</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('home.trustStrip.palmerTitle')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('home.trustStrip.palmerDesc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('home.trustStrip.awardTitle')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('home.trustStrip.awardDesc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">self_improvement</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('home.trustStrip.healingTitle')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('home.trustStrip.healingDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Meet Dr. Park */}
      <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark" aria-labelledby="meet-doctor-heading">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 md:gap-8 mb-6">
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-48 md:h-48 flex-shrink-0 bg-slate-200 rounded-full md:rounded-2xl overflow-hidden bg-cover bg-center border-2 border-slate-100 dark:border-slate-700 shadow-sm" 
                style={{ backgroundImage: "url('/dr-park.png')" }}
                role="img"
                aria-label="Dr. Hyeon Joo Park, D.C., M.S."
              ></div>
              <div className="flex flex-col justify-center">
                <div className="mb-1">
                  <span className="px-2 py-0.5 rounded bg-orange-50 dark:bg-orange-900/20 text-primary dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider">{t('home.meetDoctor.badge')}</span>
                </div>
                <h2 id="meet-doctor-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">{t('home.meetDoctor.name')}</h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Yonsei Chiropractic Clinic</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed italic text-sm sm:text-base border-l-4 border-primary/20 pl-4 py-1">
                {t('home.meetDoctor.quote')}
              </p>
              <div className="flex justify-start">
                <Link to="/about" className="h-10 px-5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold transition-all flex items-center justify-center text-sm focus:ring-2 focus:ring-slate-500/20">
                  {t('home.meetDoctor.readBio')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark" aria-labelledby="services-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">{t('home.services.title')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t('home.services.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link to="/techniques/upper-cervical" className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all !text-inherit hover:!text-inherit no-underline focus:ring-2 focus:ring-primary/50">
              <article className="flex flex-col h-full">
                <div 
                  className="h-48 bg-slate-200 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/o-14.jpg')" }}
                  role="img"
                  aria-label="Side-view cervical spine X-ray highlighting the upper cervical alignment"
                ></div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{t('home.services.upperCervicalTitle')}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{t('home.services.upperCervicalDesc')}</p>
                  <div className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('home.services.learnMore')} <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                  </div>
                </div>
              </article>
            </Link>
            {/* Service 2 */}
            <Link to="/techniques/tmj" className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all !text-inherit hover:!text-inherit no-underline focus:ring-2 focus:ring-primary/50">
              <article className="flex flex-col h-full">
                <div 
                  className="h-48 bg-slate-200 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/o-5.jpg')" }}
                  role="img"
                  aria-label="Before and after photos of heel lifts showing improved postural symmetry"
                ></div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{t('home.services.tmjTitle')}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{t('home.services.tmjDesc')}</p>
                  <div className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('home.services.learnMore')} <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                  </div>
                </div>
              </article>
            </Link>
            {/* Service 3 */}
            <Link to="/techniques/car-accident" className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all !text-inherit hover:!text-inherit no-underline focus:ring-2 focus:ring-primary/50">
              <article className="flex flex-col h-full">
                <div 
                  className="h-48 bg-slate-200 bg-cover bg-center" 
                  style={{ backgroundImage: "url('/o-10.jpg')" }}
                  role="img"
                  aria-label="Front and back spine X-rays with alignment markers used for car accident recovery"
                ></div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{t('home.services.injuryTitle')}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{t('home.services.injuryDesc')}</p>
                  <div className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('home.services.learnMore')} <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50" aria-labelledby="reviews-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="max-w-2xl">
              <h2 id="reviews-heading" className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">{t('home.reviews.title')}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t('home.reviews.description')}</p>
            </div>
            <Link to="/reviews" className="text-primary font-bold hover:underline whitespace-nowrap">{t('home.reviews.readAll')}</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/reviews" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative hover:shadow-md transition-all group !text-inherit hover:!text-inherit no-underline focus:ring-2 focus:ring-primary/50">
              <span className="material-symbols-outlined absolute top-6 right-6 text-slate-200 dark:text-slate-700 text-5xl select-none group-hover:text-primary/20 transition-colors" aria-hidden="true">format_quote</span>
              <div className="flex gap-1 text-yellow-400 mb-4" aria-label="5 star rating">
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">{t('home.reviews.items.review1')}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">DH</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">Danbi H.</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{t('common.location')}</p>
                </div>
              </div>
            </Link>
            <Link to="/reviews" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative hover:shadow-md transition-all group !text-inherit hover:!text-inherit no-underline focus:ring-2 focus:ring-primary/50">
              <span className="material-symbols-outlined absolute top-6 right-6 text-slate-200 dark:text-slate-700 text-5xl select-none group-hover:text-primary/20 transition-colors" aria-hidden="true">format_quote</span>
              <div className="flex gap-1 text-yellow-400 mb-4" aria-label="5 star rating">
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">{t('home.reviews.items.review2')}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">CJ</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">Christina J.</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{t('common.location')}</p>
                </div>
              </div>
            </Link>
            <Link to="/reviews" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative hover:shadow-md transition-all group hidden lg:block !text-inherit hover:!text-inherit no-underline focus:ring-2 focus:ring-primary/50">
              <span className="material-symbols-outlined absolute top-6 right-6 text-slate-200 dark:text-slate-700 text-5xl select-none group-hover:text-primary/20 transition-colors" aria-hidden="true">format_quote</span>
              <div className="flex gap-1 text-yellow-400 mb-4" aria-label="5 star rating">
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current" aria-hidden="true">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">{t('home.reviews.items.review3')}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">JP</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">Jenny P.</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Northridge, CA</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Contact Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800" aria-labelledby="location-heading">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 id="location-heading" className="text-3xl font-black text-slate-900 dark:text-white mb-6">{t('contact.title')}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">{t('contact.description')}</p>
              <div className="space-y-6">
                <Link 
                  href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                  external
                  className="flex items-start gap-4 group hover:bg-slate-50 dark:hover:bg-slate-800/50 p-3 -m-3 rounded-xl transition-all"
                  aria-label={t('footer.address')}
                >
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{t('contact.labels.address')}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{t('footer.address')}</p>
                  </div>
                </Link>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="tel:2133815500"
                    className="flex-1 flex items-center gap-4 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group"
                    aria-label="Call us at (213) 381-5500"
                  >
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined" aria-hidden="true">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t('contact.labels.call')}</h4>
                      <p className="text-primary font-bold">(213) 381-5500</p>
                    </div>
                  </Link>
                  <Link 
                    href="mailto:yonseichiropractic@gmail.com"
                    className="flex-1 flex items-center gap-4 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-md transition-all group"
                    aria-label="Email us at yonseichiropractic@gmail.com"
                  >
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined" aria-hidden="true">mail</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t('contact.labels.email')}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs truncate">yonseichiropractic@gmail.com</p>
                    </div>
                  </Link>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary">
                    <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t('contact.labels.hours')}</h4>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      <p><span className="font-medium w-40 inline-block">{t('contact.hours.weekdays')}</span> 9:00 AM - 6:00 PM</p>
                      <p><span className="font-medium w-40 inline-block">{t('contact.hours.thursday')}</span> 2:00 PM - 6:00 PM</p>
                      <p><span className="font-medium w-40 inline-block">{t('contact.hours.saturday')}</span> 9:00 AM - 1:00 PM</p>
                      <p><span className="font-medium w-40 inline-block">{t('contact.hours.sunday')}</span> {t('contact.hours.closed')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link 
                  href="https://www.google.com/maps/dir/?api=1&destination=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                  external
                  className="h-12 w-fit px-6 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold transition-all shadow flex items-center gap-2"
                  aria-label={t('contact.labels.directions')}
                >
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">directions</span>
                  {t('contact.labels.directions')}
                </Link>
              </div>
            </div>
            <div className="h-[400px] w-full bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative">
              <iframe 
                title="Map showing the location of Yonsei Chiropractic Clinic in Los Angeles"
                className="w-full h-full border-0"
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

export default Home;
