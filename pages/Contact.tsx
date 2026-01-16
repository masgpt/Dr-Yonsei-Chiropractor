import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import FormField from '../components/ui/FormField';
import Link from '../components/ui/Link';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Heading */}
        <div className="flex flex-col gap-3 mb-8 sm:mb-10">
          <h1 className="text-text-main dark:text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">{t('contactPage.hero.title')}</h1>
          <p className="text-text-secondary dark:text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
            {t('contactPage.hero.description')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {/* Location & Contact Info */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-text-main dark:text-white text-xl sm:text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.details.title')}</h2>
              </div>
              {/* Address Item */}
              <Link 
                href="https://www.google.com/maps/search/?api=1&query=3200+Wilshire+Blvd+Suite+302+Los+Angeles+CA+90010"
                external
                className="flex gap-4 px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10 sm:size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden="true">location_on</span>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-text-main dark:text-white text-sm sm:text-base font-bold leading-normal group-hover:text-primary transition-colors">{t('footer.address')}</p>
                </div>
              </Link>
              {/* Phone Item */}
              <Link 
                href="tel:2133815500"
                className="flex gap-4 px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10 sm:size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden="true">call</span>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-text-main dark:text-white text-sm sm:text-base font-bold leading-normal group-hover:text-primary transition-colors">(213) 381-5500</p>
                  <p className="text-text-secondary dark:text-slate-400 text-xs sm:text-sm font-normal leading-normal">{t('contactPage.details.phone.label')}</p>
                </div>
              </Link>
              {/* Email Item */}
              <Link 
                href="mailto:yonseichiropractic@gmail.com"
                className="flex gap-4 px-5 sm:px-6 py-4 sm:py-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10 sm:size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl sm:text-2xl" aria-hidden="true">mail</span>
                </div>
                <div className="flex flex-1 flex-col justify-center overflow-hidden">
                  <p className="text-text-main dark:text-white text-sm sm:text-base font-bold leading-normal group-hover:text-primary transition-colors truncate">yonseichiropractic@gmail.com</p>
                  <p className="text-text-secondary dark:text-slate-400 text-xs sm:text-sm font-normal leading-normal">{t('contactPage.details.email.label')}</p>
                </div>
              </Link>
            </div>

            {/* Hours */}
            <section 
              className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
              aria-labelledby="hours-title"
            >
              <div className="px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <h2 id="hours-title" className="text-text-main dark:text-white text-xl sm:text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.hours.title')}</h2>
              </div>
              <div className="px-5 sm:px-6 py-2">
                <div className="flex flex-col">
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">{t('contact.hours.weekdays')}</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">{t('contact.hours.thursday')}</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal">2:00 PM - 6:00 PM</p>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">{t('contact.hours.saturday')}</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal">9:00 AM - 1:00 PM</p>
                  </div>
                  <div className="flex justify-between py-4">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">{t('contact.hours.sunday')}</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-red-500">{t('contact.hours.closed')}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Map & Form */}
          <div className="lg:col-span-7 flex flex-col gap-8 h-full">
            {/* Map Embed */}
            <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm relative">
              <iframe 
                title="Map showing the location of Yonsei Chiropractic Clinic in Los Angeles"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=3200%20Wilshire%20Blvd%20%23302%2C%20Los%20Angeles%2C%20CA%2090010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            <section 
              className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex-1"
              aria-labelledby="form-title"
            >
              <div className="px-5 sm:px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <h2 id="form-title" className="text-text-main dark:text-white text-xl sm:text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.form.title')}</h2>
                <p className="text-text-secondary dark:text-slate-400 text-xs sm:text-sm mt-1">{t('contactPage.form.description')}</p>
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                {isSubmitted ? (
                  <div 
                    className="flex flex-col items-center justify-center h-full min-h-[250px] sm:min-h-[300px] text-center gap-4 animate-in fade-in duration-500"
                    role="status"
                  >
                    <div className="size-14 sm:size-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                      <span className="material-symbols-outlined text-3xl sm:text-4xl" aria-hidden="true">check</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{t('contactPage.form.success.title')}</h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-sm">
                      {t('contactPage.form.success.message')}
                    </p>
                    <Button 
                      variant="ghost"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4"
                    >
                      {t('contactPage.form.success.button')}
                    </Button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-5 sm:gap-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <FormField 
                        label={t('contactPage.form.labels.name')} 
                        name="name" 
                        required
                      >
                        <input 
                          className="w-full h-11 sm:h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-sm sm:text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                          placeholder={t('contactPage.form.placeholders.name')} 
                          type="text" 
                        />
                      </FormField>
                      <FormField 
                        label={t('contactPage.form.labels.phone')} 
                        name="phone" 
                        required
                      >
                        <input 
                          className="w-full h-11 sm:h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-sm sm:text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                          placeholder={t('contactPage.form.placeholders.phone')} 
                          type="tel" 
                        />
                      </FormField>
                    </div>
                    <FormField 
                      label={t('contactPage.form.labels.message')} 
                      name="message" 
                      required
                    >
                      <textarea 
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-sm sm:text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400" 
                        placeholder={t('contactPage.form.placeholders.message')} 
                        rows={4}
                      ></textarea>
                    </FormField>
                    <Button 
                      type="submit" 
                      isLoading={isLoading}
                      className="w-full shadow-md h-11 sm:h-12"
                    >
                      {t('contactPage.form.submit')}
                    </Button>
                  </form>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;