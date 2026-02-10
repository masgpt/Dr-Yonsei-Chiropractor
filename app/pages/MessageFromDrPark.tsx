"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import MessageFromDrParkDesktop from './MessageFromDrPark/Desktop/MessageFromDrPark.desktop';
import MessageFromDrParkMobile from './MessageFromDrPark/Mobile/MessageFromDrPark.mobile';

const MessageFromDrPark: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng, initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return isMobile ? <MessageFromDrParkMobile /> : <MessageFromDrParkDesktop />;
};

export default MessageFromDrPark;
