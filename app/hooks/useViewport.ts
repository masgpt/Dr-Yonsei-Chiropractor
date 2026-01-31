import { useState, useEffect } from 'react';

export const useViewport = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
