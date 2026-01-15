import React from 'react';
import { Link } from 'react-router-dom';

const MessageFromDrPark: React.FC = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            A Personal Note
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">Message From Dr. Park</h1>
          
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            <p className="text-xl font-medium text-slate-800 dark:text-slate-200 mb-8">
              Everyone has been in pain once. But of those people, there are patients and families who have to carry the enormous pain of living with illnesses.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why am I in so much pain? Why am I getting sick?</h3>
            <p className="mb-6">
              Regarding “Why?”, modern medicine is unable to provide a precise answer and simply puts the focus on treating the symptoms. However, there is surely bound to be a cause of pain and sickness. That exact cause is the <strong>“block of nerve flow”</strong> in the upper cervical vertebrae.
            </p>

            <p className="mb-6">
              The human body has infinite vitality; basically everyone is born with <strong>“Innate Intelligence”</strong>. The human body is a super computer which modern medicine is no match in imitating. Our body was not made to survive by us consciously manipulating it. Without us paying attention to it, our body “automatically” controls our heartbeat, adrenaline levels, blood pressure, digestion of our food and more. This is vitality and all people are born with it.
            </p>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 my-12">
              <p className="italic font-medium">
                "However, this ability is inhibited when pressure is put on the nerves that pass through the upper cervical vertebrae and the flow of signals isn’t smooth, therefore leading to many illnesses."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Philosophy of Chiropractic</h3>
            <p className="mb-6">
              Chiropractic is a healing method with a profound philosophy of restoring the body’s “Innate Intelligence” using only the hands for the procedure (Chiro= hand, practic= practice). Basically, it is the coming together of philosophy, science, and art.
            </p>
            <p className="mb-6">
              Unlike modern medicine that solely pursues the treatment of symptoms, chiropractic is a practice that focuses on treating the main cause of many diseases, <strong>SUBLUXATION</strong>, and letting the body work on recovering and restoring its natural ability to recuperate.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">A Rare and Specific Technique</h3>
            <p className="mb-6">
              Chiropractic is not a massage, but a correcting procedure performed using the doctor’s hands to adjust the patient’s spine and remove subluxation so the body can recover on its own.
            </p>
            <p className="mb-6">
              This doctor has studied under the last remaining pupil of the legendary Dr. B.J. Palmer (1881-1961), the late <strong>Dr. Clarence Jensen</strong>. Dr. Park treats the nerve adjustment as her mission, spreading her knowledge and making it her goal to guard the health of the community.
            </p>

            <div className="bg-slate-900 text-white p-8 rounded-2xl my-12 border-l-8 border-primary">
              <h4 className="text-xl font-bold mb-4">A Paradigm Shift</h4>
              <p className="mb-0">
                Chiropractic is not about diagnosing and treating the symptoms. By eliminating subluxation, the body will show its amazing ability to recover by itself. When the Creator made humans, He made them to live happily and healthy, not to live sick and in pain.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Key to Healthiness</h3>
            <p className="mb-6">
              The difference between healthy and unhealthy people is found in the upper cervical vertebrae. With a slight dislocation, people may not recognize the pressure being put on the nerve until they get sick, which may even lead to disastrous results. 
            </p>
            <p className="mb-12">
              <strong>The most important factor is prevention.</strong> Instead of trying to treat pain and sickness when it has progressed, it would be best to look out for your health while you’re still healthy. This is why everyone from children to the elderly should get their upper cervical vertebrae checked regularly.
            </p>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">Dr. Hyeon Joo Park, D.C., M.S.</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest">Palmer Upper Cervical Specific Chiropractor</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary hover:bg-orange-600 text-white font-bold transition-all shadow-lg">
              Schedule Your Health Check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MessageFromDrPark;