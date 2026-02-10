"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import AccessibilityDesktop from './Accessibility/Desktop/Accessibility.desktop';
import AccessibilityMobile from './Accessibility/Mobile/Accessibility.mobile';

const Accessibility: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return isMobile ? <AccessibilityMobile /> : <AccessibilityDesktop />;
};

export default Accessibility;
