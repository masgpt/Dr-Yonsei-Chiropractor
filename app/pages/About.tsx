"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import AboutDesktop from './About/Desktop/About.desktop';
import AboutMobile from './About/Mobile/About.mobile';

const About: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <AboutMobile /> : <AboutDesktop />;
};

export default About;
