import React from 'react';
import { Link } from 'react-router-dom';

const Subluxation: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase">Subluxation</h1>
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8">
              Subluxation is when the spinal bones become slightly dislocated, developing on the nerves, resulting in a disruption of the natural flow of signals between the body and the brain.
            </p>
            
            <p className="mb-6">
              One of the World Health Organization’s (WHO) main principle is that “(h)ealth is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.” This is very true in most cases. Just because a person does not feel pain or have any diagnoses of disease, it does not mean they are 100% in good condition.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Silent Progress of Illness</h3>
              <p className="mb-4">
                Our body is made up of neurons, in which 67% of them are efferent nerves. These nerves do not send immediate pain signals until significant amount of damage is present.
              </p>
              <p className="font-bold text-primary">
                Therefore, even without pain there can be an organ disorder in progress.
              </p>
            </div>

            <p className="mb-6">
              Without knowing it, your body may have high blood pressure, arthritis may be in progress, or cancer cells may be multiplying. If the flow of signals is blocked and nerves have pressure put on them, the result is failure in function, leading to illnesses. It is a misconception that illnesses happen immediately. However, it takes a while before most serious illnesses steadily display themselves.
            </p>

            <p className="mb-12">
              The body’s nerves are put under pressure over a long period of time and in the end start to show symptoms of pain. We are always worried and focused on the individual organs in our body and trying to take away the pain immediately if there is a disturbance.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Targeting the Cause</h3>
            <p className="mb-6">
              However, it is necessary to first target the cause. The real source lies within the alignment of the spine and the nerve signals that are being sent out.
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold transition-all shadow-lg">
              Get an Evaluation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subluxation;