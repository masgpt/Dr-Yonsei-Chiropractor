"use client";

import React, { lazy, Suspense, useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';

const HomeDesktop = lazy(() => import('./Home/Desktop/Home.desktop'));
const HomeMobile = lazy(() => import('./Home/Mobile/Home.mobile'));

const Home: React.FC<{ lng?: string }> = ({ lng }) => {
  const { isMobile } = useViewport();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </Suspense>
  );
};

export default Home;