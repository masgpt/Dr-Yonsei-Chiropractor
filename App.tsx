import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import MessageFromDrPark from './pages/MessageFromDrPark';

// Techniques Pages
import AboutChiropractic from './pages/techniques/AboutChiropractic';
import InnateIntelligence from './pages/techniques/InnateIntelligence';
import UpperCervical from './pages/techniques/UpperCervical';
import CarAccident from './pages/techniques/CarAccident';
import TMJ from './pages/techniques/TMJ';
import Subluxation from './pages/techniques/Subluxation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/message" element={<MessageFromDrPark />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          
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