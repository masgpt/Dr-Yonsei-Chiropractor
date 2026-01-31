"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import AccessibilityDesktop from './Accessibility/Desktop/Accessibility.desktop';
import AccessibilityMobile from './Accessibility/Mobile/Accessibility.mobile';

const Accessibility: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <AccessibilityMobile /> : <AccessibilityDesktop />;
};

export default Accessibility;
