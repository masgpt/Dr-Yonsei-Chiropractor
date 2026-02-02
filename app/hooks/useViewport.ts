import { useState, useEffect } from 'react';
import { isMobileUserAgent } from '../lib/is-mobile';

export const useViewport = (initialIsMobile?: boolean) => {
  // Keep first render aligned with what the server chose to avoid hydration flashes.
  const [isMobile, setIsMobile] = useState<boolean>(initialIsMobile ?? false);

  useEffect(() => {
    // If we didn't get a server hint (e.g., not-found), fall back to UA on mount once.
    if (initialIsMobile === undefined && typeof navigator !== 'undefined') {
      setIsMobile(isMobileUserAgent(navigator.userAgent));
    }

    const checkViewport = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    // Initial check
    checkViewport();

    // Event listener for window resize
    window.addEventListener('resize', checkViewport);

    // Cleanup
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return { isMobile };
};
