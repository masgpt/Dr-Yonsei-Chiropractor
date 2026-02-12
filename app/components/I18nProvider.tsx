'use client';

import React, { useEffect } from 'react';
import i18n from '../i18n';

export default function I18nProvider({ 
  children, 
  lng 
}: { 
  children: React.ReactNode;
  lng: string;
}) {
  useEffect(() => {
    if (lng && i18n.language !== lng) {
      void i18n.changeLanguage(lng);
    }
  }, [lng]);

  return <>{children}</>;
}
