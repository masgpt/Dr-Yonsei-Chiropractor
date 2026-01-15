import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset after a few seconds if desired, or keep the success message
  };

  return (
    <>
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-40 py-8">
        {/* Page Heading */}
        <div className="flex flex-col gap-3 mb-10">
          <h1 className="text-text-main dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Visit Our Clinic</h1>
          <p className="text-text-secondary dark:text-slate-400 text-lg font-normal leading-normal max-w-2xl">
            Expert Chiropractic Care in Los Angeles. We are dedicated to your healing journey with a calm, professional environment tailored to your needs.
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
                  <p className="text-text-main dark:text-white text-base font-bold leading-normal">15720 Ventura Blvd, Suite 504</p>
                  <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Encino, CA 91436</p>
                </div>
              </div>
              {/* Phone Item */}
              <div className="flex gap-4 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-text-main dark:text-white text-base font-bold leading-normal">(818) 886-1406</p>
                  <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">Call us for immediate assistance</p>
                </div>
              </div>
              <div className="p-6 pt-2">
                <button className="w-full flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md">
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  <span className="truncate">Call Now</span>
                </button>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Hours of Operation</h2>
              </div>
              <div className="p-6 pt-2">
                <div className="grid grid-cols-[30%_1fr] gap-x-6">
                  <div className="col-span-2 grid grid-cols-subgrid border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">Monday</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-right text-red-500">Closed</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">Tue - Fri</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-right">10:00 AM - 6:00 PM</p>
                  </div>
                  <div className="col-span-2 grid grid-cols-subgrid border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">Saturday</p>
                    <p className="text-text-main dark:text-white text-sm font-bold leading-normal text-right">10:00 AM - 2:00 PM</p>
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
                title="Map showing the location of the chiropractic clinic in Encino"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=15720%20Ventura%20Blvd%20%23504%2C%20Encino%2C%20CA%2091436&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex-1">
              <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Send Us a Message</h2>
                <p className="text-text-secondary dark:text-slate-400 text-sm mt-1">Have a question? Fill out the form below and we'll get back to you shortly.</p>
              </div>
              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4 animate-in fade-in duration-500">
                    <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                      <span className="material-symbols-outlined text-4xl">check</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                      Thank you for contacting us. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-text-main dark:text-slate-200 text-sm font-bold" htmlFor="name">Full Name</label>
                        <div className="relative">
                          <input 
                            className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                            id="name" 
                            required
                            placeholder="John Doe" 
                            type="text" 
                          />
                          <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400">person</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-text-main dark:text-slate-200 text-sm font-bold" htmlFor="phone">Phone Number</label>
                        <div className="relative">
                          <input 
                            className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                            id="phone" 
                            required
                            placeholder="(555) 000-0000" 
                            type="tel" 
                          />
                          <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400">phone</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-text-main dark:text-slate-200 text-sm font-bold" htmlFor="message">Message</label>
                      <textarea 
                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400" 
                        id="message" 
                        required
                        placeholder="How can we help you today?" 
                        rows={4}
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-text-secondary dark:text-slate-500 hidden md:block">
                        <span className="material-symbols-outlined text-[14px] align-text-bottom mr-1">lock</span>
                        Your information is secure and encrypted.
                      </p>
                      <button className="w-full md:w-auto min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md" type="submit">
                        Send Message
                      </button>
                    </div>
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