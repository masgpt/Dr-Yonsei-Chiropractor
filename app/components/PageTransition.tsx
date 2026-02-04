'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import { useViewport } from '../hooks/useViewport';

export default function PageTransition({ 
  children,
  initialIsMobile 
}: { 
  children: React.ReactNode;
  initialIsMobile?: boolean;
}) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const isFirstMount = useRef(true);
  const { isMobile } = useViewport(initialIsMobile);

  useEffect(() => {
    setIsMounted(true);
    // After the first render completes, future mounts are not the "first"
    isFirstMount.current = false;
  }, []);

  if (!isMounted) {
    return <div className="flex flex-col flex-grow w-full">{children}</div>;
  }

  // Disable motion on mobile to prevent flickering
  if (isMobile) {
    return <div className="flex flex-col flex-grow w-full">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstMount.current ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="flex flex-col flex-grow w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
