"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import HomeDesktop from './Home/Desktop/Home.desktop';
import HomeMobile from './Home/Mobile/Home.mobile';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

const Home: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <div className="flex flex-col">
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default Home;
