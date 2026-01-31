"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import NotFoundDesktop from './NotFound/Desktop/NotFound.desktop';
import NotFoundMobile from './NotFound/Mobile/NotFound.mobile';

const NotFound: React.FC = () => {
  const { isMobile } = useViewport();

  return isMobile ? <NotFoundMobile /> : <NotFoundDesktop />;
};

export default NotFound;
