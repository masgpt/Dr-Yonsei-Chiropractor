"use client";

import React from 'react';
import { useViewport } from '../../hooks/useViewport';
import InnateIntelligenceDesktop from './InnateIntelligence/Desktop/InnateIntelligence.desktop';
import InnateIntelligenceMobile from './InnateIntelligence/Mobile/InnateIntelligence.mobile';

const InnateIntelligence: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <InnateIntelligenceMobile /> : <InnateIntelligenceDesktop />;
};

export default InnateIntelligence;
