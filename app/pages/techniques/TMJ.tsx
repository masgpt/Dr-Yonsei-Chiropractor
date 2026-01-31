"use client";

import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import TMJDesktop from './TMJ/Desktop/TMJ.desktop';
import TMJMobile from './TMJ/Mobile/TMJ.mobile';

const TMJ: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <TMJMobile /> : <TMJDesktop />;
};

export default TMJ;
