import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-slate-50 dark:bg-background-dark flex justify-center">
        <div className="w-full max-w-[960px] px-4 lg:px-10 py-5">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div 
                className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-8 shadow-sm relative overflow-hidden" 
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4CI_stkT1Sbg72Xey5aaSQvOfqMJ2HvhQY0GzI8vO1lTTRnNtOiNN5R7XT3br557OJbR4wd-rqiGlXZVmvsJgYweV49c70JHnGLwjzaCZAmw3OTd5iUFwlQpqqo_sIfp82SCtCbQnd-mCLjLveS91K5GU0rNklqe5u5DDUVgYKnvRMvJH4hdq2zgJsPTrXqfbgWZFC7MTQrYJt-bW0_vsss2b-YP4wzdI1tHaGLHj99iKpWo5X0zdBQ1jZP9U-a_CItGdMC95I03s')" }}
              >
                <div className="flex flex-col gap-2 text-center max-w-[600px] z-10">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl drop-shadow-md">
                    Our Specialized Care
                  </h1>
                  <h2 className="text-slate-100 text-base font-medium leading-relaxed mt-2 drop-shadow-sm">
                    Specializing in the Palmer Upper Cervical Specific Technique (H.I.O) and comprehensive chiropractic services in Los Angeles.
                  </h2>
                </div>
                <a href="#treatments" className="z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-lg">
                  <span className="truncate">View Specialties</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Philosophy Section */}
      <div className="w-full flex justify-center py-10">
        <div className="w-full max-w-[960px] px-4 lg:px-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-sm font-semibold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Upper Cervical Care
            </div>
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight">
              Re-activating Brain-to-Body Communication
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Misalignment at the point where the head and neck join can cause interference, or "subluxation," preventing the brain from sending healing messages. Upper Cervical Corrective Health Care is designed to restore this alignment and allow the body's natural self-healing process to begin.
            </p>
          </div>
          <div className="flex-1 h-64 w-full md:h-auto rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-center p-8">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-7xl mb-4">neurology</span>
                <p className="text-primary font-bold text-xl uppercase tracking-widest">H.I.O Method</p>
                <p className="text-slate-500 text-sm">Hole-In-One Technique</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments/Features Section */}
      <div id="treatments" className="w-full flex justify-center bg-white dark:bg-[#15202b] py-12">
        <div className="w-full max-w-[960px] px-4 lg:px-10 flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Our Specialties</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Comprehensive care ranging from specialized neck adjustments to personal injury.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-6 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">settings_accessibility</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Upper Cervical Specific</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">The "Hole-In-One" (H.I.O) method focusing on the atlas and axis to restore full body health.</p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-6 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">dentistry</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">TMJ/TMD Disorders</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">Specialized adjustments for Temporomandibular Joint Disorders to relieve jaw pain and tension.</p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-6 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">child_care</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Pediatric & Pre-natal</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">Gentle and safe chiropractic care for infants, children, and expecting mothers.</p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-6 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">car_crash</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Car Accidents</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">Expert treatment for whiplash and other injuries sustained in automobile accidents.</p>
              </div>
            </div>
            {/* Service 5 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-6 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">medical_services</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Personal Injury</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">Comprehensive recovery plans for slips, falls, and other personal injury cases.</p>
              </div>
            </div>
            {/* Service 6 */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#e7edf3] dark:border-slate-700 bg-slate-50 dark:bg-[#1a2632] p-6 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">accessibility</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Extremity Adjustments</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-normal">Realigning joints in the shoulders, elbows, wrists, hips, knees, and ankles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full flex justify-center py-16 bg-slate-50 dark:bg-background-dark">
        <div className="w-full max-w-[960px] px-4 lg:px-10 flex flex-col">
          <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">The Path to Healing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-10"></div>
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">1</div>
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-white">Examination</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Dr. Park takes X-rays of the upper cervical region and full spine to examine the degree of misalignment.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">2</div>
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-white">Adjustment</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">The procedure is performed by the doctor's hands to restore head, neck, and spinal alignment.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">3</div>
              <h3 className="text-lg font-bold text-[#0d141b] dark:text-white">Self-Healing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">As the vertebrae align, the brain sends healing messages to the body to begin natural self-healing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex justify-center py-16 bg-white dark:bg-[#1a2632] border-t border-slate-100 dark:border-slate-800">
        <div className="w-full max-w-[960px] px-4 lg:px-10">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/10">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0d141b] dark:text-white">Ready for a new method?</h2>
              <p className="text-slate-600 dark:text-slate-300">Experience the difference of Upper Cervical chiropractic care today.</p>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-end">
              <div className="flex items-center gap-2 text-lg font-semibold text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined text-primary">call</span>
                (213) 381-5500
              </div>
              <Link to="/contact" className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-md">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;