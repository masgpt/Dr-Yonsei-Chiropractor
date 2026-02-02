"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';
import TMJDesktop from './TMJ/Desktop/TMJ.desktop';
import TMJMobile from './TMJ/Mobile/TMJ.mobile';
import { useTranslation } from 'react-i18next';

const TMJ: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return isMobile ? <TMJMobile /> : <TMJDesktop />;
};

export default TMJ;
