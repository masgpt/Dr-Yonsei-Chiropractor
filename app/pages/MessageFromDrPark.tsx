"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import MessageFromDrParkDesktop from './MessageFromDrPark/Desktop/MessageFromDrPark.desktop';
import MessageFromDrParkMobile from './MessageFromDrPark/Mobile/MessageFromDrPark.mobile';

const MessageFromDrPark: React.FC<{ initialIsMobile?: boolean }> = ({ initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);

  return isMobile ? <MessageFromDrParkMobile /> : <MessageFromDrParkDesktop />;
};

export default MessageFromDrPark;
