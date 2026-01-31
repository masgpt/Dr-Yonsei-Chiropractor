"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import ReviewsDesktop from './Reviews/Desktop/Reviews.desktop';
import ReviewsMobile from './Reviews/Mobile/Reviews.mobile';

const Reviews: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <ReviewsMobile /> : <ReviewsDesktop />;
};

export default Reviews;