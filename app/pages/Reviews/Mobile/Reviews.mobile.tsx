import React from 'react';
import { Link } from 'react-router';
import SEO from '../../../components/SEO';
import { useReviewsLogic } from '../Shared/reviews.hooks';

const ReviewsMobile: React.FC = () => {
  const { t, reviews, selectedReview, openReview, closeReview } = useReviewsLogic();

  return (
    <>
      <SEO 
        title={t('nav.reviews')}
        description={t('hero.description', { ns: 'reviews' })}
      />
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-8 px-4 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col gap-3">
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
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              onClick={() => openReview(review)}
              className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 active:shadow-md active:border-primary/30 transition-all duration-300 h-full cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base fill-current">star</span>
                  ))}
                </div>
                {review.date ? (
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                ) : (
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{review.location.split(',')[1]?.trim() || review.location}</span>
                )}
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed italic whitespace-pre-line line-clamp-6">
                  "{review.text}"
                </p>
                {(review.text.length > 300 || review.text.includes('…') || review.text.includes('...')) && (
                  <div className="text-primary text-[10px] font-bold mt-2 inline-flex items-center gap-1">
                    {t('items.readMore', { ns: 'reviews' })}
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-50 dark:border-slate-700">
                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{review.name}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeReview}
          />
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base shrink-0">
                  {selectedReview.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{selectedReview.name}</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{selectedReview.location}</p>
                </div>
              </div>
              <button 
                onClick={closeReview}
                className="size-8 rounded-full flex items-center justify-center text-slate-400 active:bg-slate-100 dark:active:bg-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 custom-scrollbar">
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(selectedReview.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-xl fill-current">star</span>
                  ))}
                </div>
                {selectedReview.date && (
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{selectedReview.date}</span>
                )}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed italic whitespace-pre-line">
                "{selectedReview.text}"
              </p>
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-700 flex justify-end">
              <button 
                onClick={closeReview}
                className="w-full px-6 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="w-full px-4 py-6 mb-8">
        <div className="max-w-[1280px] mx-auto bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden">
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
        </div>
      </section>
    </>
  );
};

export default ReviewsMobile;
