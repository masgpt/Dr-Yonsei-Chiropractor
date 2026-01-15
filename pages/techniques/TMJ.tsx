import React from 'react';
import { Link } from 'react-router-dom';

const TMJ: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">TMJ / TMD Treatment</h1>
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8">
              Specialized chiropractic care for Temporomandibular Joint Disorders and related jaw tension.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Upper Cervical Connection</h2>
            <p className="mb-6">
              Because the upper cervical spine (the top two vertebrae in the neck) sits so closely to the jaw joints, misalignment in the neck can often manifest as TMJ/TMD symptoms.
            </p>
            <p className="mb-6">
              Head and neck misalignment can cause interference in the nervous system, leading to muscle tension in the jaw, clicking, popping, and pain.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Symptoms We Treat</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">chevron_right</span>
                  <span>Jaw pain and tenderness</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">chevron_right</span>
                  <span>Difficulty chewing or opening wide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">chevron_right</span>
                  <span>Clicking or popping sounds in the jaw</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">chevron_right</span>
                  <span>Facial aching or ear pain</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Dr. Park's Expertise</h2>
            <p className="mb-6">
              Dr. Hyeon Joo Park is dedicated to using her professional expertise to help patients with TMJ/TMD. By restoring head/neck alignment and utilizing specialty extremity adjustments, we address the root cause of the jaw dysfunction.
            </p>
            <p className="mb-6">
              Our approach is drug-free and seeks to re-activate the body's natural self-healing process.
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold transition-all shadow-lg">
              Relieve Your Jaw Pain Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TMJ;