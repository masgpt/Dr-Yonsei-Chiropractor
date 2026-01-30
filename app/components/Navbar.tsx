import React, { lazy, Suspense } from 'react';
import { useViewport } from '../hooks/useViewport';

const NavbarDesktop = lazy(() => import('./Navbar/Desktop/Navbar.desktop'));
const NavbarMobile = lazy(() => import('./Navbar/Mobile/Navbar.mobile'));

const Navbar: React.FC = () => {
  const { isMobile } = useViewport();

  return (
    <Suspense fallback={<div className="h-16 sm:h-20 bg-white/95 dark:bg-[#0a0f14]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800" />}>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </Suspense>
  );
};

export default Navbar;