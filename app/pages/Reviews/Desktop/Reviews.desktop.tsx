import React from 'react';
import Link from '@/components/ui/Link';
import SEO from '../../../components/SEO';
import { useReviewsLogic } from '../Shared/reviews.hooks';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.05
    }
  },
  viewport: { once: true }
};

const ReviewsDesktop: React.FC = () => {
  const { t, reviews, selectedReview, openReview, closeReview } = useReviewsLogic();

  return (
    <>
      <SEO 
        title={t('nav.reviews')}
        description={t('hero.description', { ns: 'reviews' })}
      />
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-12 px-8 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1280px] mx-auto text-center flex flex-col gap-3"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 w-fit mx-auto">
            <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-sm">favorite</span>
            <span className="text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider">{t('hero.badge', { ns: 'reviews' })}</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">
            {t('hero.title', { ns: 'reviews' })}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {t('hero.description', { ns: 'reviews' })}
          </p>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-8 py-12">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              variants={fadeInUp}
              onClick={() => openReview(review)}
              className="flex flex-col gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                  ))}
                </div>
                {review.date ? (
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                ) : (
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.location.split(',')[1]?.trim() || review.location}</span>
                )}
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic whitespace-pre-line line-clamp-6">
                  "{review.text}"
                </p>
                {(review.text.length > 300 || review.text.includes('…') || review.text.includes('...')) && (
                  <div className="text-primary text-xs font-bold mt-2 group-hover:underline inline-flex items-center gap-1">
                    {t('items.readMore', { ns: 'reviews' })}
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-700">
                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{review.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={closeReview}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">
                    {selectedReview.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{selectedReview.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{selectedReview.location}</p>
                  </div>
                </div>
                <button 
                  onClick={closeReview}
                  className="size-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(selectedReview.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-2xl fill-current">star</span>
                    ))}
                  </div>
                  {selectedReview.date && (
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{selectedReview.date}</span>
                  )}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic whitespace-pre-line">
                  "{selectedReview.text}"
                </p>
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                <button 
                  onClick={closeReview}
                  className="w-auto px-6 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="w-full px-8 py-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1280px] mx-auto bg-slate-900 dark:bg-slate-800 rounded-2xl p-12 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <div className="relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-white text-3xl font-black tracking-tight">
              {t('cta.title', { ns: 'reviews' })}
            </h2>
            <p className="text-slate-300 text-lg max-w-[600px]">
              {t('cta.description', { ns: 'reviews' })}
            </p>
            <div className="flex flex-row gap-4 mt-2 w-full max-w-md justify-center">
              <Link to="/contact" className="flex items-center justify-center rounded-lg bg-primary hover:bg-orange-600 transition-all h-12 px-8 text-white text-base font-bold shadow-lg">
                {t('cta.book', { ns: 'reviews' })}
              </Link>
              <a href="tel:2133815500" className="flex items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors h-12 px-8 text-white text-base font-bold backdrop-blur-sm">
                {t('cta.call', { ns: 'reviews' })}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ReviewsDesktop;
