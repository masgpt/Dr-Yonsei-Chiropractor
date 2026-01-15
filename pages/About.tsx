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
              A Legacy of <br className="hidden lg:block"/>Specific Healing
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              Dr. Hyeon Joo Park is one of only a handful of doctors in the United States, and the first and only Korean American, capable of practicing the Palmer Upper Cervical Specific Chiropractic technique.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact" className="bg-primary hover:bg-blue-600 text-white text-base font-bold h-12 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center min-w-[160px]">
                Book Appointment
              </Link>
              <Link to="/techniques/upper-cervical" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-base font-medium h-12 px-6 rounded-lg transition-colors flex items-center justify-center">
                The H.I.O. Technique
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <div className="w-full h-full bg-center bg-cover bg-no-repeat bg-slate-200 dark:bg-slate-800" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop')" }}></div>
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-lg">Dr. Hyeon Joo Park</p>
                <p className="text-sm opacity-90">D.C., M.S., C.C.E.P.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor / Bio Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-16 md:py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">The Successor of a Master</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Meet Dr. Hyeon Joo Park</h2>
          </div>
          
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed max-w-none">
            <p className="mb-6">
              Dr. Hyeon Joo Park is Board Certified and an expert in the field of Palmer Upper Cervical Specific Chiropractic. A graduate of <strong>Yonsei University</strong>—one of Korea's most prestigious research institutions—she went on to receive her doctorate from <strong>Life University</strong> in Atlanta, where she graduated <em>summa cum laude</em> and received the prestigious Clinical Excellence Award.
            </p>
            <p className="mb-6">
              Dr. Park considers it the most fortunate opportunity in her life to have met her mentor, the late <strong>Dr. Clarence Jenson</strong>. As a former leader and teacher of Palmer Upper Cervical Specific Chiropractic, Dr. Jenson was trained directly under <strong>Dr. B.J. Palmer</strong>, the developer of chiropractic. Dr. Park is proud to be a successor of this distinguished lineage.
            </p>
            <p className="mb-6">
              Beyond her clinical practice, Dr. Park is a passionate community leader. She has been hosting a <strong>40-minute weekly radio show on Radio Korea for 12 years</strong>, helping the community gain a better understanding of chiropractic benefits and techniques.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl my-12 border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Clinical Specializations</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>B.J. Palmer Upper Cervical Specific (H.I.O.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Cranial Adjustment/T.M.J. (S.O.T.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Extremity Manipulation (C.C.E.P.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Pediatric Chiropractic Care (I.C.P.A.)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education & Credentials</h3>
            <ul className="list-disc pl-6 mb-12 space-y-2">
              <li><strong>Yonsei University:</strong> B.S. in Biotechnology</li>
              <li><strong>Life University:</strong> Doctor of Chiropractic (D.C.), <em>Summa Cum Laude</em></li>
              <li><strong>Life University:</strong> M.S. in Sport Injury Management</li>
              <li><strong>Certified Chiropractic Extremity Practitioner (C.C.E.P.)</strong></li>
            </ul>
          </div>

          {/* Awards Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">Distinguished Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-6 bg-slate-900 text-white rounded-xl shadow-lg border-l-4 border-yellow-500">
                <span className="material-symbols-outlined text-yellow-500 text-4xl">workspace_premium</span>
                <div>
                  <h4 className="font-bold text-lg">The President’s Volunteer Service Award</h4>
                  <p className="text-sm opacity-80">President Barack Obama, The White House (2012)</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-4xl">military_tech</span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Clinical Excellence Award</h4>
                  <p className="text-sm text-slate-500">Life University (2001)</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <span className="material-symbols-outlined text-slate-400">award_star</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">County of Los Angeles Commendation (2004)</p>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <span className="material-symbols-outlined text-slate-400">award_star</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">City of Los Angeles Certificates of Recognition (2005, 2009)</p>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <span className="material-symbols-outlined text-slate-400">award_star</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">City of Los Angeles Certificate of Appreciation (2006)</p>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <span className="material-symbols-outlined text-slate-400">award_star</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">Appreciation Award, Radio Korea (2010)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Trusted Expert Care</h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            Experience the difference of care from a distinguished leader in Palmer Specific Chiropractic.
          </p>
          <Link to="/contact" className="bg-white text-primary hover:bg-blue-50 font-bold h-12 px-8 rounded-lg shadow-lg transition-colors mt-2 flex items-center justify-center">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;