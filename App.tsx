import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import MessageFromDrPark from './pages/MessageFromDrPark';
import Accessibility from './pages/Accessibility';
import SkipToContent from './components/SkipToContent';

// Techniques Pages
import AboutChiropractic from './pages/techniques/AboutChiropractic';
import InnateIntelligence from './pages/techniques/InnateIntelligence';
import UpperCervical from './pages/techniques/UpperCervical';
import CarAccident from './pages/techniques/CarAccident';
import TMJ from './pages/techniques/TMJ';
import Subluxation from './pages/techniques/Subluxation';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  const { t } = useTranslation();
  const [announcement, setAnnouncement] = React.useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    // Move focus to main content on route change for accessibility
    if (mainRef.current) {
      // Use a small timeout to ensure content is rendered
      const timeoutId = setTimeout(() => {
        mainRef.current?.focus();
        
        // Announce route change
        const pageTitle = document.title;
        setAnnouncement(t('accessibility.navigatedTo', { title: pageTitle }));
      }, 100);
      return () => clearTimeout(timeoutId);
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
        className="flex-grow w-full flex flex-col outline-none pt-[136px] sm:pt-[104px]"
      >
        {children}
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