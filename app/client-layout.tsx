'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { MotionConfig } from 'framer-motion';
import { useViewport } from './hooks/useViewport';

export default function ClientLayout({ 
  children,
  initialIsMobile 
}: { 
  children: React.ReactNode;
  initialIsMobile?: boolean;
}) {
  const mainRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { t } = useTranslation();
  const [announcement, setAnnouncement] = useState('');
  const { isMobile } = useViewport(initialIsMobile);

  useEffect(() => {
    // Disable animations on mobile to prevent flickering
    if (isMobile) {
      document.documentElement.classList.add('no-animations');
    } else {
      document.documentElement.classList.remove('no-animations');
    }

    // Move focus to main content on route change for accessibility
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      
      // Announce route change
      const pageTitle = document.title;
      setAnnouncement(t('accessibility.navigatedTo', { title: pageTitle }));
    }
  }, [pathname, t]);

  return (
    <MotionConfig 
      reducedMotion={isMobile ? "always" : "user"}
      transition={isMobile ? { duration: 0, delay: 0 } : undefined}
    >
      {/* Route Announcement Region */}
      <div 
        className="sr-only" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {announcement}
      </div>
      {children}
    </MotionConfig>
  );
}
