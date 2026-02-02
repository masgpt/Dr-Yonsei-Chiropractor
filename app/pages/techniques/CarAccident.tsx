"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import CarAccidentDesktop from './CarAccident/Desktop/CarAccident.desktop';
import CarAccidentMobile from './CarAccident/Mobile/CarAccident.mobile';
import MedicalDisclaimer from '../../components/MedicalDisclaimer';
import { useTranslation } from 'react-i18next';

const CarAccident: React.FC<{ lng?: string }> = ({ lng }) => {
  const { isMobile } = useViewport();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <div className="flex flex-col">
      {isMobile ? <CarAccidentMobile /> : <CarAccidentDesktop />}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-12 w-full">
        <MedicalDisclaimer />
      </div>
    </div>
  );
};

export default CarAccident;
