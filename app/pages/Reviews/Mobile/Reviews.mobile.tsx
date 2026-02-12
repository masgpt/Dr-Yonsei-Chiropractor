import React from 'react';
import Link from '@/components/ui/Link';
import Modal from '@/components/ui/Modal';
import { useReviewsLogic } from '../Shared/reviews.hooks';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0 }
};

const staggerContainer = {
  initial: {},
  animate: {},
  whileInView: {
    transition: {
      staggerChildren: 0
    }
  }
};

const ReviewsMobile: React.FC = () => {
  const { t, reviews, selectedReview, openReview, closeReview } = useReviewsLogic();

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-8 px-4 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
          <motion.div 
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          className="max-w-[1280px] mx-auto text-center flex flex-col gap-3"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 w-fit mx-auto">
            <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-sm">favorite</span>
            <span className="text-yellow-700 dark:text-yellow-400 text-[10px] font-bold uppercase tracking-wider">{t('hero.badge', { ns: 'reviews' })}</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-2xl font-black leading-tight tracking-tight">
            {t('hero.title', { ns: 'reviews' })}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
            {t('hero.description', { ns: 'reviews' })}
          </p>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4"
        >
          {reviews.map((review) => {
            const isTruncated = review.text.length > 300 || review.text.includes('…') || review.text.includes('...');
            return (
              <motion.div 
                key={review.id} 
                variants={fadeInUp}
                onClick={() => openReview(review)}
                className="flex flex-col bg-primary text-white p-5 rounded-[20px] border border-primary/30 relative active:shadow-xl transition-all group cursor-pointer h-full"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex text-white">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-base fill-current">star</span>
                      ))}
                    </div>
                    {review.date && (
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">{review.date}</span>
                    )}
                  </div>
                  
                  <p className="text-white text-xs leading-relaxed italic whitespace-pre-line line-clamp-6 mb-4">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-white/30">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="size-8 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest leading-tight truncate">{review.name}</h4>
                        <p className="text-[9px] font-bold text-white/80 uppercase tracking-wider mt-1">{review.location}</p>
                      </div>
                    </div>
                    {isTruncated && (
                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/20 text-white font-black text-[9px] uppercase tracking-widest shadow-sm border border-white/20 hover:bg-white/40 transition-all">
                          {t('items.readMore', { ns: 'reviews' })}
                          <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Review Modal */}
      <Modal
        isOpen={!!selectedReview}
        onClose={closeReview}
        title={selectedReview ? (
          <div className="flex items-center justify-between w-full gap-3 pr-2">
            <div className="min-w-0">
              <h3 className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-widest leading-tight truncate">
                {selectedReview.name}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5">
                {selectedReview.location}
              </p>
            </div>
            <div className="flex gap-0.5 text-yellow-400 shrink-0" aria-label={`${selectedReview.rating} star rating`}>
              {[...Array(selectedReview.rating)].map((_, j) => (
                <span key={j} className="material-symbols-outlined text-[16px] fill-current" aria-hidden="true">star</span>
              ))}
            </div>
          </div>
        ) : ""}
      >
        {selectedReview && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              {selectedReview.date && (
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{selectedReview.date}</span>
              )}
            </div>
            
            <p className="text-base text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
              "{selectedReview.text}"
            </p>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button 
                onClick={closeReview}
                className="w-full h-12 px-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest transition-all"
              >
                {t('common.close', { defaultValue: 'Close' })}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* CTA Section */}
      <section className="w-full px-4 py-6 mb-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1280px] mx-auto bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <div className="relative z-10 flex flex-col gap-5 items-center">
            <h2 className="text-white text-xl font-black tracking-tight">
              {t('cta.title', { ns: 'reviews' })}
            </h2>
            <p className="text-slate-300 text-sm max-w-[600px]">
              {t('cta.description', { ns: 'reviews' })}
            </p>
            <div className="flex flex-col gap-3 mt-1 w-full max-w-md justify-center">
              <Link to="/contact" className="flex items-center justify-center rounded-lg bg-primary h-12 px-8 text-white text-base font-bold shadow-lg">
                {t('cta.book', { ns: 'reviews' })}
              </Link>
              <a href="tel:2133815500" className="flex items-center justify-center rounded-lg bg-white/10 border border-white/20 h-12 px-8 text-white text-base font-bold backdrop-blur-sm">
                {t('cta.call', { ns: 'reviews' })}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ReviewsMobile;
