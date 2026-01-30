import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import AboutChiropracticDesktop from './AboutChiropractic/Desktop/AboutChiropractic.desktop';
import AboutChiropracticMobile from './AboutChiropractic/Mobile/AboutChiropractic.mobile';

const AboutChiropractic: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <AboutChiropracticMobile /> : <AboutChiropracticDesktop />;
};

export default AboutChiropractic;
