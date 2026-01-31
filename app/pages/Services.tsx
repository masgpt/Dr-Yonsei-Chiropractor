"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import ServicesDesktop from './Services/Desktop/Services.desktop';
import ServicesMobile from './Services/Mobile/Services.mobile';

const Services: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <ServicesMobile /> : <ServicesDesktop />;
};

export default Services;