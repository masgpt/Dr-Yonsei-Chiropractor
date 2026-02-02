"use client";

import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import AboutChiropracticDesktop from './AboutChiropractic/Desktop/AboutChiropractic.desktop';
import AboutChiropracticMobile from './AboutChiropractic/Mobile/AboutChiropractic.mobile';

const AboutChiropractic: React.FC<{ initialIsMobile?: boolean }> = ({ initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);

  return isMobile ? <AboutChiropracticMobile /> : <AboutChiropracticDesktop />;
};

export default AboutChiropractic;
