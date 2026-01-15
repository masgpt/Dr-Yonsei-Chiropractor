import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-8">
        {/* Page Heading */}
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="text-text-main dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Get in Touch</h1>
          <p className="text-text-secondary dark:text-slate-400 text-lg font-normal leading-normal max-w-2xl">
            Yonsei Chiropractic Clinic is dedicated to helping you reach your optimal health. Contact us today to schedule your consultation with Dr. Hyeon Joo Park.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Location & Contact Info */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Location &amp; Contact</h2>
              </div>
              {/* Address Item */}
              <div className="flex gap-4 px-6 py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-text-main dark:text-white text-base font-bold leading-normal">3200 Wilshire Blvd, Suite 302</p>
                  <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Los Angeles, CA 90010</p>
                </div>
              </div>
              {/* Phone Item */}
              <div className="flex gap-4 px-6 py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-text-main dark:text-white text-base font-bold leading-normal">(213) 381-5500</p>
                  <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Call or Text for appointments</p>
                </div>
              </div>
              {/* Email Item */}
              <div className="flex gap-4 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-text-main dark:text-white text-base font-bold leading-normal">yonseichiropractic@gmail.com</p>
                  <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Email us anytime</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Hours of Operation</h2>
              </div>
              <div className="p-6 pt-2">
                <div className="grid grid-cols-[40%_1fr] gap-x-6">
                  <div className="col-span-2 grid grid-cols-subgrid border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">Mon, Tue, Wed, Fri</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-right">9:00 AM - 6:00 PM</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">Thursday</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-right">2:00 PM - 6:00 PM</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">Saturday</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-right">9:00 AM - 1:00 PM</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid py-4">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">Sunday</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-right text-red-500">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map & Form */}
          <div className="lg:col-span-7 flex flex-col gap-8 h-full">
            {/* Map Embed */}
            <div className="w-full h-[300px] lg:h-[400px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm relative">
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
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex-1">
              <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Request Appointment</h2>
                <p className="text-text-secondary dark:text-slate-400 text-sm mt-1">Leave your details and we'll contact you to confirm a time.</p>
              </div>
              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4 animate-in fade-in duration-500">
                    <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                      <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Request Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                      Thank you for contacting us. We will get back to you shortly to schedule your appointment.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-primary font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-text-main dark:text-slate-200 text-sm font-bold" htmlFor="name">Full Name</label>
                        <input 
                          className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                          id="name" 
                          required
                          placeholder="John Doe" 
                          type="text" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-text-main dark:text-slate-200 text-sm font-bold" htmlFor="phone">Phone Number</label>
                        <input 
                          className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                          id="phone" 
                          required
                          placeholder="(555) 000-0000" 
                          type="tel" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-text-main dark:text-slate-200 text-sm font-bold" htmlFor="message">How can we help?</label>
                      <textarea 
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400" 
                        id="message" 
                        required
                        placeholder="Tell us about your symptoms or preferred appointment time..." 
                        rows={4}
                      ></textarea>
                    </div>
                    <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-orange-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md" type="submit">
                      Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;