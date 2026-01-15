import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-background-dark lg:pt-20 lg:pb-24">
        {/* Mobile Hero (Overlay) */}
        <div className="lg:hidden relative h-[500px] w-full flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXfEVQRMkGxJtCUGpeigvuagQPKeRAWnl1RkrvAuGLs9n-4aa9PaPu4lnuc1Pc7QUhXtU5YBos4G8IYwJGlJsBOUJCm0jFIEp2fDrPwvhjM12pcWW4vVk86hpk0yQvCgwi9RvK2BlO3d17PUuHQQAcHvGVW7WavqOO5c6D-IqUs_Y8CSZr6rkKpOb8Z7BS78r3HfuKU2YNlTisYYgbPHV8KNK60kqRy2VD7iXmlNEoAQep3hAO8OQjY45KSjeaC6_NglreLWjDEhkf')" }}
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
              <Link to="/contact" className="h-12 px-6 rounded-lg bg-primary text-white font-bold flex items-center justify-center">
                {t('home.hero.bookAppointment')}
              </Link>
              <Link to="/techniques/upper-cervical" className="h-12 px-6 rounded-lg bg-white/10 text-white font-bold border border-white/20 backdrop-blur-sm flex items-center justify-center">
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
                <a href="tel:2133815500" className="h-12 px-6 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center min-w-[140px]">
                  {t('home.hero.callNow')}
                </a>
                <Link to="/contact" className="h-12 px-6 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold transition-all flex items-center justify-center border border-slate-200 dark:border-slate-700 min-w-[180px]">
                  {t('home.hero.requestAppointment')}
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2w7qoKRIiZhLjhCgAHeX3vg67xyRGXuLFl1OoNLnR0Yec1rY2AeAdvsrPOhvjSOROpCN8hMFqSjvXWQ-_hik9od6ezTmbeJ1vd8ULFEAoQEioNMfKJTS5jB3APbbMDQpSMeQp1v_mfxHtHYoVDnhKY9AE6c1dUWIcUMuP_TU21IaznqkUNEy4KW4H2i2jN5xNsvYntDA94zBjSdbAcZFK8JlUdw12I-i3oNeejOJrXzuXdxGJ7iuEWYQM-68csN1YHkbLEKb66NA7')" }}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTiBxzYw56CdOrXypz_qix82KnvcJCL9VvI-v8wLOPhKd4f08zzfDtBtgnT6zaDamQeeOHmYN_V6fUtZmB1owh-saFa06itbczl0-ZhkQ_ctYDPsOZU8HSC0Ogn2ceGvN3iCUqZI--jhsnbDeo5g7LTpRv0ILwHmy8iK8ePqNkE-LP61J8SYZk0tTUlvxQC2o8jwgYgQ52bcsFIs-_ZgRtmkw1_y2c4K_5JSsRNFh0tLv9uONeVSTcdTmr9TLU5Pj9MWkvcFIITfeJ')" }}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-slate-200 flex items-center justify-center text-[10px] font-bold bg-slate-100">+50</div>
                </div>
                <p>{t('home.hero.trustedBy')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 scale-[0.98] -z-10"></div>
              <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXfEVQRMkGxJtCUGpeigvuagQPKeRAWnl1RkrvAuGLs9n-4aa9PaPu4lnuc1Pc7QUhXtU5YBos4G8IYwJGlJsBOUJCm0jFIEp2fDrPwvhjM12pcWW4vVk86hpk0yQvCgwi9RvK2BlO3d17PUuHQQAcHvGVW7WavqOO5c6D-IqUs_Y8CSZr6rkKpOb8Z7BS78r3HfuKU2YNlTisYYgbPHV8KNK60kqRy2VD7iXmlNEoAQep3hAO8OQjY45KSjeaC6_NglreLWjDEhkf')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                <span className="material-symbols-outlined text-[28px]">verified_user</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('home.trustStrip.palmerTitle')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('home.trustStrip.palmerDesc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t('home.trustStrip.awardTitle')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t('home.trustStrip.awardDesc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-1">
                <span className="material-symbols-outlined text-[28px]">self_improvement</span>
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
      <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 bg-slate-200 rounded-full md:rounded-xl overflow-hidden bg-cover bg-center border-4 border-white dark:border-slate-800 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop')" }}></div>
            <div className="flex flex-col text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-xs font-bold uppercase tracking-wider">{t('home.meetDoctor.badge')}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">{t('home.meetDoctor.name')}</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {t('home.meetDoctor.quote')}
              </p>
              <div>
                <Link to="/about" className="text-primary font-bold hover:underline inline-flex items-center gap-1 group">
                  {t('home.meetDoctor.readBio')}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">{t('home.services.title')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t('home.services.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="h-48 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYJkFVchDwUDpuvYTHDMX7wcB2o4-KRkHS66YUphI15fxlOZQECfwLgzMKfdElT-W9iSdIY3q48gUCSOiMfqtTSrcbwHREpbS2CjWPSpDQ0vHMrEdZQmj8DTgKSRtABHXPPFkWjYx2zZrCr5ujoLJd9UDsc62-QAZD7Zq_2n4r4ZAT1zCdVSF01umEzn9IkV3T80CS52luafxQx4B4vabbBLJ4iPFY16_Im0Bfme2tWGEM0EzBZehYYx5sN7L6YAb0lkfWxzgDtmFH')" }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('home.services.upperCervicalTitle')}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{t('home.services.upperCervicalDesc')}</p>
                <Link to="/techniques/upper-cervical" className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('home.services.learnMore')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Service 2 */}
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="h-48 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTjhtTODS6SjxrML8dTUejNLNDLgJcV45vBggsscxieRdPgVE7xd4VMDtQ8HofIE3FDsW_YqZkCKWd4OfnCrlXSEUNe1rAGy22F4z_g_fjodEc7s6jXpd2sM40wFgfFpN87wrqIKXypZd5E0twvw-qm15nJDgJb5_jKEHg--faP0Ih9bb0LS1NoZuRSll2ZUv0yWJa4-75qxwOvzmgOn8dMupQ7ID08Gc8jd5DSQdQMKaYSnYIKVxs-8SWA4kKuFgUIfD-CHhBblYH')" }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('home.services.tmjTitle')}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{t('home.services.tmjDesc')}</p>
                <Link to="/techniques/tmj" className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('home.services.learnMore')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Service 3 */}
            <div className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
              <div className="h-48 bg-slate-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0bD2IlNX-ZvcW5TsKJzlHegY-bx7Qgy5OSerdPMAzcrUi3cg2Xy2riDRNdUsVFm4qBcBXbCGNArl4l9obiP6j06Z1AMS7g9gEzytEgk9j_NnC7odi60wbNbmYNDL9-Wj85EPg1atCf7BsPHO277o3KHXr2KoWhlSYeZjksd1Xd0t-tTaAfoy7bgBuyHFdjN2wnhn2n96ryug0j9jxwVNvt6I_NZ1jfri1RwBgo4rJby495mj4ygJXb947gmBmXPwKP8Rc4HZPL3hh')" }}></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('home.services.injuryTitle')}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{t('home.services.injuryDesc')}</p>
                <Link to="/techniques/car-accident" className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t('home.services.learnMore')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">Patient Stories</h2>
              <p className="text-slate-600 dark:text-slate-400">See what our patients in Los Angeles have to say about their recovery.</p>
            </div>
            <Link to="/reviews" className="text-primary font-bold hover:underline whitespace-nowrap">Read All Reviews</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative">
              <span className="material-symbols-outlined absolute top-6 right-6 text-slate-200 dark:text-slate-700 text-5xl select-none">format_quote</span>
              <div className="flex gap-1 text-yellow-400 mb-4">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">"Before I received any treatments, I suffered a lot with frequent headaches. After receiving treatment my headaches disappeared for good and it was hard for me to believe that it was the power of the adjustment."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">DH</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Danbi H.</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Los Angeles, CA</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative">
              <span className="material-symbols-outlined absolute top-6 right-6 text-slate-200 dark:text-slate-700 text-5xl select-none">format_quote</span>
              <div className="flex gap-1 text-yellow-400 mb-4">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">"Within two months, my headaches were completely gone. After having experienced such agony and pain every single day for two years straight, this was truly a miracle for me!!!!!!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">CJ</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Christina J.</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Los Angeles, CA</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 relative hidden lg:block">
              <span className="material-symbols-outlined absolute top-6 right-6 text-slate-200 dark:text-slate-700 text-5xl select-none">format_quote</span>
              <div className="flex gap-1 text-yellow-400 mb-4">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10 italic">"My period came back to normal within these two weeks and my TMJ is basically gone. I can open my mouth without my jaw getting stuck and my migraines have disappeared as well. Dr. Park really knows what she’s doing!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">JP</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Jenny P.</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Northridge, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Visit Our Office</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">Conveniently located in the heart of Los Angeles, we offer expert care with a focus on Palmer Upper Cervical techniques. Free parking validation available.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Address</h4>
                    <p className="text-slate-600 dark:text-slate-400">3200 Wilshire Blvd, Suite 302<br/>Los Angeles, CA 90010</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Hours</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      <span className="block"><span className="font-medium w-32 inline-block">Mon, Tue, Wed, Fri:</span> 9:00 AM - 6:00 PM</span>
                      <span className="block"><span className="font-medium w-32 inline-block">Thursday:</span> 2:00 PM - 6:00 PM</span>
                      <span className="block"><span className="font-medium w-32 inline-block">Saturday:</span> 9:00 AM - 1:00 PM</span>
                      <span className="block"><span className="font-medium w-32 inline-block">Sunday:</span> Closed</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="h-12 w-fit px-6 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold transition-all shadow flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">directions</span>
                  Get Directions
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