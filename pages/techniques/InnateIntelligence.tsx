import React from 'react';
import { Link } from 'react-router-dom';

const InnateIntelligence: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            The Miracle of Life
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Innate Intelligence</h1>
          
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8">
              Since the moment of your conception, a miracle began for you. This miracle called life has an “innate (inborn) intelligence” that caused two cells to multiply and differentiate into the trillions of cells that became you.
            </p>
            
            <p className="mb-6">
              The innate intelligence knew exactly what you needed, and exactly when you needed it. All of this development happens naturally as long there is no interference. Otherwise, that flow of the intelligence cannot go through properly.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mb-12">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">A Vital System</h3>
                <p className="mb-4">
                  As the number of cells grew, your innate intelligence needed a system to send and receive messages in order to control and coordinate all functions and parts of the body. 
                </p>
                <p className="font-bold text-primary">
                  This vital system was the first to develop and began within 18 days of conception.
                </p>
              </div>
              <div className="size-32 md:size-48 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-7xl">auto_awesome</span>
              </div>
            </div>

            <p className="mb-6">
              It is so valuable and delicate that its primary parts are the only organs encased in bone. This system is your <strong>nervous system</strong> and the primary parts are the brain protected by the skull and the spinal cord protected by the spine.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Consequence of Interference</h3>
            <p className="mb-6">
              What would happen if this intelligence, which flows through the nerves and is filled with vital life messages, could not reach the proper destination at the right time?
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {['Heart', 'Lungs', 'Liver', 'Kidneys', 'Stomach'].map((organ) => (
                <div key={organ} className="flex flex-col items-center p-4 bg-slate-100 dark:bg-slate-700 rounded-xl text-center">
                  <span className="material-symbols-outlined text-primary mb-2">emergency_home</span>
                  <span className="text-xs font-bold uppercase">{organ}</span>
                </div>
              ))}
            </div>

            <p className="mb-6">
              What if this interference blocked messages being sent to your vital organs? Do you think this would cause these organs and yourself not to live at your highest potential? Of course, it would. 
            </p>

            <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl border-l-8 border-primary">
              <p className="text-xl font-medium italic mb-6">
                “All diseases result from a disruption of the flow of intelligence.”
              </p>
              <p className="text-lg opacity-90">
                Chiropractically speaking, <strong>“The one cause of all disease is our inability to adapt.”</strong>
              </p>
            </div>

            <p className="mt-12">
              Our goal at Yonsei Chiropractic is to remove the interference in your nervous system, allowing your innate intelligence to flow perfectly once again and restoring your body's natural ability to adapt and heal.
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              Unlock Your Highest Potential
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnateIntelligence;