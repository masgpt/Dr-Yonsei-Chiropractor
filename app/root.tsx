import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import "./index.css";
import "./i18n";
import React, { useEffect, useRef, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Noto+Sans:wght@400;500;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
  },
  { rel: "icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🩺</text></svg>" },
];

export const meta = () => [
  { title: "Yonsei Chiropractic Clinic - Upper Cervical Health Care" },
  { name: "description", content: "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://yonseichiro.com/" },
  { property: "og:title", content: "Yonsei Chiropractic Clinic - Upper Cervical Health Care" },
  { property: "og:description", content: "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing." },
  { property: "og:image", content: "https://yonseichiro.com/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:url", content: "https://yonseichiro.com/" },
  { name: "twitter:title", content: "Yonsei Chiropractic Clinic - Upper Cervical Health Care" },
  { name: "twitter:description", content: "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing." },
  { name: "twitter:image", content: "https://yonseichiro.com/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg" },
];

const Loading = () => (
  <div className="flex-grow flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export function Layout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const pathname = location?.pathname || '';

  const { t } = useTranslation();
  const [announcement, setAnnouncement] = React.useState('');

  useEffect(() => {
    // Move focus to main content on route change for accessibility
    if (mainRef.current) {
      mainRef.current.focus();
      
      // Announce route change
      const pageTitle = document.title;
      setAnnouncement(t('accessibility.navigatedTo', { title: pageTitle }));
    }
  }, [pathname, t]);

  return (
    <html lang="en" className="scroll-pt-[104px]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            const saved = localStorage.getItem('theme') || 'system';
            const root = document.documentElement;
            if (saved === 'dark' || (saved === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              root.classList.add('dark');
            } else {
              root.classList.add('light');
            }
          })();
        ` }} />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased selection:bg-primary/20">
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
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
