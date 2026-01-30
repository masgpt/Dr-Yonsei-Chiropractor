import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MessageFromDrPark = lazy(() => import('./pages/MessageFromDrPark'));
const Accessibility = lazy(() => import('./pages/Accessibility'));

// Techniques Pages
const AboutChiropractic = lazy(() => import('./pages/techniques/AboutChiropractic'));
const InnateIntelligence = lazy(() => import('./pages/techniques/InnateIntelligence'));
const UpperCervical = lazy(() => import('./pages/techniques/UpperCervical'));
const CarAccident = lazy(() => import('./pages/techniques/CarAccident'));
const TMJ = lazy(() => import('./pages/techniques/TMJ'));
const Subluxation = lazy(() => import('./pages/techniques/Subluxation'));

const Loading = () => (
  <div className="flex-grow flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  const { t } = useTranslation();
  const [announcement, setAnnouncement] = React.useState('');

  useEffect(() => {
    // Instant scroll to top
    window.scrollTo(0, 0);
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    
    // Move focus to main content on route change for accessibility
    if (mainRef.current) {
      mainRef.current.focus();
      
      // Announce route change
      const pageTitle = document.title;
      setAnnouncement(t('accessibility.navigatedTo', { title: pageTitle }));
    }
  }, [pathname, t]);

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <SkipToContent />
      <Navbar />
      
      {/* Route Announcement Region */}
      <div 
        className="sr-only" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {announcement}
      </div>

      <main 
        id="main-content" 
        ref={mainRef} 
        tabIndex={-1} 
        className="flex-grow w-full flex flex-col outline-none pt-[100px] sm:pt-[120px]"
      >
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/message" element={<MessageFromDrPark />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessibility" element={<Accessibility />} />
          
          {/* Techniques Routes */}
          <Route path="/techniques/about-chiropractic" element={<AboutChiropractic />} />
          <Route path="/techniques/innate-intelligence" element={<InnateIntelligence />} />
          <Route path="/techniques/upper-cervical" element={<UpperCervical />} />
          <Route path="/techniques/car-accident" element={<CarAccident />} />
          <Route path="/techniques/tmj" element={<TMJ />} />
          <Route path="/techniques/subluxation" element={<Subluxation />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;