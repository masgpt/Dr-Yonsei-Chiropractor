import React from 'react';
import { Link } from 'react-router-dom';

const UpperCervical: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">About Upper Cervical Care</h1>
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-8">Palmer Upper Cervical Specific Chiropractic (H.I.O.)</h2>
          
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="mb-6">
              Yonsei Chiropractic Clinic is the first Korean American chiropractic clinic in the United States to specialize in the Palmer Upper Cervical Specific Technique, also known as the <strong>“hole-in-one” method (H.I.O)</strong>.
            </p>
            <p className="mb-6">
              The practice of the H.I.O. is a high degree chiropractic technique that uses only the hands to adjust the upper cervical bones. This specific region, known as the <strong>cervical vertebrae numbers 1 and 2</strong>, is adjusted to absolve the root of all illnesses by relieving the pressure on the nerves.
            </p>
            <p className="mb-12">
              The application of medicine, surgery, physical therapy, acupressure massage, or acupuncture is never utilized. Only the use of the doctor’s hands is employed to adjust the upper cervical in order to target the stem of all illnesses caused by subluxation. By treating subluxation, the body will recover on its own and restore its optimal health once again.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Legacy of Dr. B.J. Palmer</h3>
              <p className="mb-4">
                <strong>Dr. B.J. Palmer (1881-1961)</strong> invented this procedure in 1930 after discovering that many patients with incurable diseases recovered after receiving the miraculous procedure. This has been proven to be effective in his many writings and research findings.
              </p>
              <p className="text-sm italic">
                Because of its technical difficulty and scarcity, very few doctors in the United States are able to perform the H.I.O technique today. As the first Korean chiropractor to utilize the technique, Dr. Hyeon Joo Park practices H.I.O. on patients who suffer from severe pain and chronic diseases.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Advanced Diagnostics</h3>
            <p className="mb-6">
              The treatment is not based solely on observing the symptoms of the illness. It begins with a deep clinical examination:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Precision X-Rays:</strong> Detailed views of the cervical bone structure and the specific nature of the dislocation.</li>
              <li><strong>Nervo-scope & Analagraph:</strong> Specialized instruments used to understand the exact state of the nerves and locate interference.</li>
            </ul>

            <div className="mt-12 p-8 bg-primary text-white rounded-2xl relative">
              <span className="material-symbols-outlined absolute top-4 left-4 text-white/20 text-6xl">format_quote</span>
              <blockquote className="relative z-10">
                <p className="text-xl font-medium italic mb-4">
                  “The human body has the amazing ability to recover itself from illness or injury. However, if the flows of nerve signals are not smooth then that innate ability is inhibited. This phenomenon happens when there is pressure on the nerves from dislocated cervical bones. Therefore, with the adjustment of the cervical bones the body will find its ability to recover itself.”
                </p>
                <footer className="font-bold">— Dr. Hyeon Joo Park</footer>
              </blockquote>
            </div>

            <p className="mt-12 mb-6">
              Patients have seen a remarkable difference in their health, with many visiting from the East Coast or Korea just to receive this treatment. Dr. Park personally diagnoses and treats each and every patient, taking pride in finding, targeting, and connecting the root of illness.
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpperCervical;