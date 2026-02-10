"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import AboutDesktop from './About/Desktop/About.desktop';
import AboutMobile from './About/Mobile/About.mobile';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

const About: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <div className="flex flex-col">
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-16 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default About;
