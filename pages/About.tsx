import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-4 py-12 md:px-8 md:py-20 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-6 md:w-1/2 md:pr-12">
            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Patient-Focused <br className="hidden lg:block"/>Chiropractic Care
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              Dedicated to providing attentive, holistic care that targets the root of your pain. Dr. Farsar listens to your needs to create a personalized path to wellness right here in Los Angeles.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="bg-primary hover:bg-blue-600 text-white text-base font-bold h-12 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center min-w-[160px]">
                Schedule Visit
              </Link>
              <Link to="/services" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-base font-medium h-12 px-6 rounded-lg transition-colors flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <div className="w-full h-full bg-center bg-cover bg-no-repeat bg-slate-200 dark:bg-slate-800" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6IqWeFpVfdwmFlPROrBplgdSio--liy5fPvRN_MsfiuQPg3DQosmg0V3_BUVXtweaHZysakPqL-CrbAki-fl-UrsueNyPD7l_VZk7fWrnEUzjGb73YN09p8QQ6moeuEc9aL_YZG5iiePpmp8TQbI1nBKOjKcFFNWPigpIxOkg_9m4F6XbddpHZQGdupG_1vDRE-UdVGTbrqps615k9EZxc13kovNXOxmT7PZbONn7dEgK9XpJYg1lXaL2m2JdR0GiSqBGYJ4n0VZQ')" }}></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-lg">Dr. Nader Farsar</p>
                <p className="text-sm opacity-90">Doctor of Chiropractic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio & Philosophy Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-16 md:py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">About The Doctor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">A Philosophy of Listening First</h2>
          </div>
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="mb-6">
              Dr. Nader Farsar believes that effective chiropractic care starts with listening. With a philosophy rooted in patience and precision, he takes the time to understand the unique lifestyle and physical challenges of every patient.
            </p>
            <p className="mb-6">
              Rather than rushing through adjustments, Dr. Farsar focuses on a comprehensive approach that promotes long-term mobility and relief. He combines traditional chiropractic techniques with modern rehabilitative exercises to ensure your recovery is sustainable.
            </p>
            <p>
              Having served the Los Angeles community for over two decades, Dr. Farsar has built a reputation not just for relieving back pain, but for empowering patients to take control of their health through education and compassionate care.
            </p>
          </div>
          {/* Pull Quote */}
          <div className="mt-12 p-8 bg-background-light dark:bg-slate-800 rounded-xl border-l-4 border-primary relative">
            <span className="material-symbols-outlined absolute top-6 left-6 text-primary/20 text-6xl -z-10">format_quote</span>
            <blockquote className="relative z-10">
              <p className="text-xl font-medium italic text-slate-800 dark:text-slate-200">
                "My goal isn't just to treat the symptom, but to understand the person behind the pain. True healing happens when we work together."
              </p>
              <footer className="mt-4 font-bold text-primary">— Dr. Nader Farsar</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Credentials &amp; Experience</h2>
            <div className="space-y-6">
              {/* Credential Item */}
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Doctor of Chiropractic</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Cleveland Chiropractic College, Los Angeles</p>
                </div>
              </div>
              {/* Credential Item */}
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Licensed Chiropractor</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">California State Board of Chiropractic Examiners</p>
                </div>
              </div>
              {/* Credential Item */}
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">20+ Years Experience</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Providing clinical care since 2003</p>
                </div>
              </div>
              {/* Credential Item */}
              <div className="flex gap-4 items-start p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Specialized Techniques</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Proficient in Diversified, Activator, and Drop Table methods.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 h-full flex items-center justify-center">
            <div className="relative w-full aspect-square md:aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-xl bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply"></div>
              <div className="w-full h-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgaPVjDB6YkbHwnHovKWxNXFV0m_NXp3w32os2JRJByF8mqMVbSn_1S0eErivSakb-3OZYtH2Md9UAbOPb6expQVzajwyM6gMNdDUeOXtK1aWF2dJMcHUIIY4eWCRza1xw1tP4R0G0uGWKrQ2Jr7PUrIfk-WO6QOw9PTkPbk9rSb1TzZupDh0TLYa_8ErVPRyAw_ntaItbOlqgFxGBcGvvtlF1sxaVqUUrLOr3vOMtij9Gvnt2eNdJxyYI1D38Q8ahg3HezSGgFXi1')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to feel better?</h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            Schedule your initial consultation with Dr. Farsar today and take the first step towards a pain-free life.
          </p>
          <Link to="/contact" className="bg-white text-primary hover:bg-blue-50 font-bold h-12 px-8 rounded-lg shadow-lg transition-colors mt-2 flex items-center justify-center">
            Book Appointment Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;