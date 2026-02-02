"use client";

import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import InnateIntelligenceDesktop from './InnateIntelligence/Desktop/InnateIntelligence.desktop';
import InnateIntelligenceMobile from './InnateIntelligence/Mobile/InnateIntelligence.mobile';

const InnateIntelligence: React.FC<{ initialIsMobile?: boolean }> = ({ initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);

  return isMobile ? <InnateIntelligenceMobile /> : <InnateIntelligenceDesktop />;
};

export default InnateIntelligence;
