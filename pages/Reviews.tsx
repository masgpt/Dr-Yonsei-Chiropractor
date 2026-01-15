import React from 'react';
import { Link } from 'react-router-dom';

const Reviews: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-16 px-6 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[800px] mx-auto text-center flex flex-col gap-4">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 w-fit mx-auto">
            <span className="material-symbols-outlined text-primary text-sm">favorite</span>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">Community Trust</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            Patient Feedback
          </h1>
          <p className="text-text-secondary dark:text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Read what our Los Angeles community has to say about their recovery journey and wellness experience with Dr. Farsar.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full max-w-[960px] mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Review Card 1 */}
          <div className="flex flex-col md:flex-row gap-6 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="size-16 rounded-full bg-slate-200 bg-center bg-cover border-2 border-white dark:border-slate-600 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkB6iW7jrZbMgnTIw3w_idCigEV4TfCRxLq5yAAivPn4Gwsz-5Ba82HwjXQOZIpImQw3MyfLmFnbnyo4UVj5tAL65ftqf-tBeNZqAtoE9TjGQS04JphlDrctliWGwNNCk7Dtfngr6zNMO8Vm3_mn9Td5jHjDm-u6FKX_VMJ48i7JBg_H7P5LIFsOO3GaTm7DUbVhz_ChcNLWVXXklV69ZJannCdvF6OCph_K7E5MgtrpAJQ0yr143WQXG-ojybaHXrmHc8-4NUcshP')" }}></div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Sarah Jenkins
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium">
                      <span className="material-symbols-outlined text-[14px]">verified</span> Verified Patient
                    </span>
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-slate-400 mt-1">October 12, 2023</p>
                </div>
                <div className="flex text-primary">
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                "I couldn't walk without pain before visiting Dr. Farsar. His treatment plan was specific to my needs and the relief was almost immediate. I appreciate how he explains every step of the process so I understand my own recovery."
              </p>
            </div>
          </div>
          {/* Review Card 2 */}
          <div className="flex flex-col md:flex-row gap-6 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="size-16 rounded-full bg-slate-200 bg-center bg-cover border-2 border-white dark:border-slate-600 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlgzjvU4-Dtg1gVUIxYYHPR-QFt2hiGXvfILd4tNyAuxYru0XXA384CFEzvTlCJSsdqPwlfRVD0oOJ2ySsMwFHRahW70u-wYQiMMbVQdmqboKIFDTMgc_94Fal45rem-QQIrUKXmsFjBo9LxtrMQJMxCf84xGRmqK6I0kYdkiUwWR0PUiR6kPDMptQkuQW1Bpc0Ce6PFuvj2levFIfjO_cYj8KbNv41C9kB5033Q5leloMAB_j-dj535oV-ghsVg7FR7CihBGqejXN')" }}></div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Michael Torres
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium">
                      <span className="material-symbols-outlined text-[14px]">verified</span> Verified Patient
                    </span>
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-slate-400 mt-1">September 28, 2023</p>
                </div>
                <div className="flex text-primary">
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                "Dr. Farsar is incredibly knowledgeable and kind. The office atmosphere is so calming, and I always feel heard during my appointments. It's rare to find a doctor who genuinely takes the time to listen."
              </p>
            </div>
          </div>
          {/* Review Card 3 */}
          <div className="flex flex-col md:flex-row gap-6 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center size-16 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-slate-600 text-primary dark:text-blue-300 text-xl font-bold shadow-sm">
                LG
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    Linda G.
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium">
                      <span className="material-symbols-outlined text-[14px]">verified</span> Verified Patient
                    </span>
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-slate-400 mt-1">August 15, 2023</p>
                </div>
                <div className="flex text-primary">
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                  <span className="material-symbols-outlined text-[20px]">star</span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                "Maintenance care here has changed my life. I used to have chronic migraines, but regular adjustments have kept them at bay for years. I highly recommend Dr. Farsar to anyone looking for holistic pain management."
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="text-primary hover:text-blue-700 font-medium flex items-center gap-2 transition-colors">
            Load more reviews
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-10 mb-10">
        <div className="max-w-[960px] mx-auto bg-white dark:bg-slate-800 rounded-2xl p-10 md:p-16 text-center shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-[-0.033em]">
              New Patients Welcome
            </h2>
            <p className="text-text-secondary dark:text-slate-400 text-lg max-w-[600px]">
              Ready to start your recovery? We are currently accepting new patients for consultations and adjustments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full max-w-md justify-center">
              <Link to="/contact" className="flex items-center justify-center rounded-lg bg-primary hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 h-12 px-8 text-white text-base font-bold shadow-md">
                Schedule Consultation
              </Link>
              <button className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors h-12 px-8 text-slate-700 dark:text-white text-base font-bold">
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;