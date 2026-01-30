import React, { lazy, Suspense } from 'react';
import { useViewport } from '../hooks/useViewport';

const HomeDesktop = lazy(() => import('./Home/Desktop/Home.desktop'));
const HomeMobile = lazy(() => import('./Home/Mobile/Home.mobile'));

const Home: React.FC = () => {
  const { isMobile } = useViewport();

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </Suspense>
  );
};

export default Home;