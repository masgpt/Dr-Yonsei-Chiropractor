'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // On the very first render (server or first client), we don't want any animation.
  // framer-motion's initial={false} on AnimatePresence handles the very first mount,
  // but we use this state to be extra sure during hydration.
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={!isHydrated ? false : { opacity: 0, y: 10 }}
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
