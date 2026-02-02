'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasMounted = useRef(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={hasMounted.current ? { opacity: 0, y: 10 } : false}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        onAnimationComplete={() => { hasMounted.current = true; }}
        className="flex flex-col flex-grow w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
