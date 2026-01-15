import React from 'react';
import { Link } from 'react-router-dom';

const CarAccident: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-4 border border-orange-100 dark:border-orange-900/30">
            Immediate Attention Required
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Car Accidents & Whiplash</h1>
          
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pain? No Pain?</h2>
            <p className="mb-6">
              The aftereffect symptoms of a car accident normally show 1~2 days, or even a few months after the accident. <strong>In fact, the absence of pain doesn’t necessarily mean there is no damage.</strong> Many of the symptoms caused by a car accident or trauma lay dormant until later.
            </p>
            <p className="mb-12">
              If nerves are put under pressure after the accident, it will not only result in pain, but it will lead to more severe illness. Car accidents can cause damage in many parts of the body such as <strong>7 possible locations in the upper cervical vertebrae</strong> and 32 joints and muscles throughout the body.
            </p>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Common Symptoms After an Accident:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Dizziness', 'Nausea', 'Vomiting', 
                  'Muscular Rigidity', 'Tinnitus (Ear Ringing)', 'Chronic Pain'
                ].map((symptom) => (
                  <div key={symptom} className="flex items-center gap-2 text-sm font-medium">
                    <span className="material-symbols-outlined text-orange-500 text-sm">warning</span>
                    {symptom}
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Nature of Whiplash</h2>
            <p className="mb-6">
              During a car accident, one’s head experiences an abrupt backward or forward jerking motion. This damages the upper cervical vertebrae. <strong>Such injury is hard to detect even with a CT scan or MRI.</strong>
            </p>
            <p className="mb-12">
              Because of this characteristic, an aftereffect of a car accident can become chronic. If the upper cervical suffers due to excessive pressure, it will prevent normal movement of the body and will lead to further health problems.
            </p>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Nerve Damage vs. Contusion</h3>
              <p className="mb-6">
                Sometimes people confuse nerve damage with simple contusion and try treating symptoms with physical therapy, acupuncture, and massages.
              </p>
              <p className="font-bold text-slate-800 dark:text-white">
                Those treatments cannot recover nerves under pressure and instead only temporarily eliminate pain. Not treating the nerves properly will worsen the condition and result in chronic pain.
              </p>
            </div>

            <p className="text-lg font-bold text-center text-slate-900 dark:text-white italic">
              "The aftereffects of a car accident require immediate attention and continuous care."
            </p>

            <div className="mt-12 flex justify-center">
              <div className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                <img 
                  src="/car_accident_gif.gif" 
                  alt="Illustration of car accident impact and whiplash" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              Book Your Post-Accident Exam
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarAccident;