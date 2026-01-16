import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  date?: string;
  rating: number;
}

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const openReview = (review: Review) => {
    setSelectedReview(review);
  };

  const closeReview = () => {
    setSelectedReview(null);
  };

  // Handle body scroll lock and escape key
  React.useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeReview();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedReview]);

  // Static data for reviews that doesn't usually change across languages
  // We keep IDs, ratings, names, and locations here for easy mapping
  const reviewMetadata = [
    { id: 1, name: "Danbi H.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
    { id: 2, name: "Christina J.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
    { id: 3, name: "Jiyun K.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
    { id: 4, name: "Dan K.", location: "La Crescenta-Montrose, CA", date: "February 20, 2016", rating: 5 },
    { id: 5, name: "Roux F.", location: "Porter Ranch, CA", rating: 5 },
    { id: 6, name: "John L.", location: "Los Angeles, CA", rating: 5 },
    { id: 7, name: "Ann L.", location: "Buena Park, CA", rating: 5 },
    { id: 8, name: "Isaac C.", location: "Pasadena, CA", rating: 5 },
    { id: 9, name: "Jeanie C.", location: "Bend, OR", rating: 5 },
    { id: 10, name: "S Y.", location: "Monrovia, CA", rating: 5 },
    { id: 11, name: "Charly P.", location: "Los Angeles, CA", rating: 5 },
    { id: 12, name: "Lolala B.", location: "Las Vegas, NV", rating: 5 },
    { id: 13, name: "Alessandra C.", location: "Montebello, CA", rating: 5 },
    { id: 14, name: "Nora Y.", location: "Los Angeles, CA", rating: 5 },
    { id: 15, name: "Ria K.", location: "Cypress, CA", rating: 5 },
    { id: 16, name: "Han Jun K.", location: "Los Angeles, CA", rating: 5 },
    { id: 17, name: "Eddie K.", location: "Vista, CA", rating: 5 },
    { id: 18, name: "Leo, C.", location: "Los Angeles, CA", rating: 5 },
    { id: 19, name: "Amella C.", location: "Somerville, MA", rating: 5 },
    { id: 20, name: "John J.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
    { id: 21, name: "Johnny K.", location: "Los Angeles, CA", date: "February 20, 2016", rating: 5 },
    { id: 22, name: "SoHee A.", location: "Los Angeles, CA", date: "December 28, 2015", rating: 5 },
    { id: 23, name: "Jenny P.", location: "Northridge, CA", date: "December 28, 2015", rating: 5 },
    { id: 24, name: "Ane S.", location: "Garden Grove, CA", date: "December 28, 2015", rating: 5 },
    { id: 25, name: "Jj K.", location: "Beverly Hills, CA", date: "December 28, 2015", rating: 5 }
  ];

  const reviews: Review[] = reviewMetadata.map(meta => ({
    ...meta,
    text: t(`reviews.items.review${meta.id}.text`)
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col gap-4">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 w-fit mx-auto">
            <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 text-sm">favorite</span>
            <span className="text-yellow-700 dark:text-yellow-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{t('reviews.hero.badge')}</span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
            {t('reviews.hero.title')}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            {t('reviews.hero.description')}
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              onClick={() => openReview(review)}
              className="flex flex-col gap-4 p-5 sm:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-primary/30 hover:scale-[1.01] transition-all duration-300 h-full cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base sm:text-[18px] fill-current">star</span>
                  ))}
                </div>
                {review.date ? (
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">{review.date}</span>
                ) : (
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">{review.location.split(',')[1]?.trim() || review.location}</span>
                )}
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic whitespace-pre-line">
                  "{review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text}"
                </p>
                {(review.text.length > 200 || review.text.endsWith('…')) && (
                  <div className="text-primary text-[10px] sm:text-xs font-bold mt-2 group-hover:underline inline-flex items-center gap-1">
                    {t('reviews.items.readMore')}
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-700">
                <div className="size-8 sm:size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">{review.name}</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">{review.location}</p>
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
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="size-10 sm:size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
                  {selectedReview.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">{selectedReview.name}</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{selectedReview.location}</p>
                </div>
              </div>
              <button 
                onClick={closeReview}
                className="size-8 sm:size-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-6 sm:p-8 custom-scrollbar">
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(selectedReview.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-xl sm:text-2xl fill-current">star</span>
                  ))}
                </div>
                {selectedReview.date && (
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">{selectedReview.date}</span>
                )}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed italic whitespace-pre-line">
                "{selectedReview.text}"
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-slate-700 flex justify-end">
              <button 
                onClick={closeReview}
                className="w-full sm:w-auto px-6 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 mb-10">
        <div className="max-w-[1280px] mx-auto bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 sm:p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <div className="relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              {t('reviews.cta.title')}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-[600px]">
              {t('reviews.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full max-w-md justify-center">
              <Link to="/contact" className="flex items-center justify-center rounded-lg bg-primary hover:bg-orange-600 transition-all h-12 px-8 text-white text-base font-bold shadow-lg">
                {t('reviews.cta.book')}
              </Link>
              <a href="tel:2133815500" className="flex items-center justify-center rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors h-12 px-8 text-white text-base font-bold backdrop-blur-sm">
                {t('reviews.cta.call')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
