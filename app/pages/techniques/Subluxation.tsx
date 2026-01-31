"use client";

import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import SubluxationDesktop from './Subluxation/Desktop/Subluxation.desktop';
import SubluxationMobile from './Subluxation/Mobile/Subluxation.mobile';

const Subluxation: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <SubluxationMobile /> : <SubluxationDesktop />;
};

export default Subluxation;
