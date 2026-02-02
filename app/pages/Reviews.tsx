"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import ReviewsDesktop from './Reviews/Desktop/Reviews.desktop';
import ReviewsMobile from './Reviews/Mobile/Reviews.mobile';
import { reviewMetadata } from './Reviews/Shared/reviews.constants';
import { useTranslation } from 'react-i18next';

const Reviews: React.FC<{ lng?: string }> = ({ lng }) => {
  const { isMobile } = useViewport();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Yonsei Chiropractic Clinic",
    "image": "https://yonseichiro.com/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3200 Wilshire Blvd, Suite 302",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90010",
      "addressCountry": "US"
    },
    "telephone": "+1-213-381-5500",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": reviewMetadata.length.toString()
    },
    "review": reviewMetadata.slice(0, 10).map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date ? new Date(review.date).toISOString().split('T')[0] : "2016-02-20",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {isMobile ? <ReviewsMobile /> : <ReviewsDesktop />}
    </>
  );
};

export default Reviews;