import React from 'react';
import { Link } from 'react-router-dom';

const AboutChiropractic: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">About Chiropractic</h1>
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8">
              At Yonsei Chiropractic Clinic, we believe the human body has an amazing, innate ability to recover itself from illness or injury.
            </p>
            <p className="mb-6">
              The chiropractic method is the best approach to health because it allows the body to work <strong>without the use of any drugs</strong>, whether prescribed or non-prescribed. Our practice is built on the philosophy that true healing comes from removing interference in the nervous system.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">A Pure Manual Technique</h3>
              <p className="mb-4">
                We strictly follow the principle that the application of medicine, surgery, physical therapy, acupressure massage, or acupuncture is never utilized for spinal correction.
              </p>
              <p className="font-bold text-primary">
                Only the use of the doctor’s hands is employed to adjust the spine in order to target the stem of all illnesses caused by subluxation.
              </p>
            </div>

            <p className="mb-6">
              When there is pressure on the nerves from dislocated vertebrae, the flows of nerve signals are not smooth, and the body's innate ability to heal is inhibited. This phenomenon is what we address through specific adjustments.
            </p>
            <p className="mb-12">
              By treating subluxation, the body will recover on its own and restore its optimal health once again. Our staff can promise you a comfortable environment and experience conducive to your healing journey.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Comprehensive Care</h3>
            <p className="mb-6">
              On each visit, Dr. Park seeks to regain and maintain the proper alignment of the spine, aiding each patient through the process of recovery and healing. Once the body and its organs are able to regain their <strong>mental impulse supply</strong>, then they are able to rebuild and perform their proper functions.
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              Visit Our Clinic
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutChiropractic;