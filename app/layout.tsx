import type { Metadata } from "next";
import "./index.css";
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ClientLayout from './client-layout';
import PageTransition from './components/PageTransition';
import I18nProvider from './components/I18nProvider';

export const metadata: Metadata = {
  title: "Yonsei Chiropractic - Upper Cervical Health Care",
  description: "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing.",
  metadataBase: new URL('https://yonseichiro.com'),
  openGraph: {
    type: "website",
    url: "https://yonseichiro.com/",
    title: "Yonsei Chiropractic - Upper Cervical Health Care",
    description: "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing.",
    images: ["/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yonsei Chiropractic - Upper Cervical Health Care",
    description: "Dedicated to restoring your health through the precise Palmer Upper Cervical method in Los Angeles. Specialist in TMJ, car accidents, and natural healing.",
    images: ["/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg"],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🩺</text></svg>',
  },
};

export async function generateStaticParams() {
  return [{ lng: 'en' }, { lng: 'ko' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://yonseichiro.com/#organization",
    "name": lng === 'ko' ? "연세 카이로프랙틱" : "Yonsei Chiropractic",
    "url": "https://yonseichiro.com",
    "logo": "https://yonseichiro.com/LOGO_E_H.jpg",
    "image": "https://yonseichiro.com/Yonsei-Chiropractic-Clinic_d9fbf4bc8dac09e90ec9aa08536041e5.jpg",
    "description": lng === 'ko' ? "로스앤젤레스 상부경추 전문 연세 카이로프랙틱 클리닉입니다." : "Specialized Palmer Upper Cervical Specific Chiropractic in Los Angeles.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3200 Wilshire Blvd, Suite 302",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90010",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0617,
      "longitude": -118.2917
    },
    "telephone": "+1-213-381-5500",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "medicalSpecialty": "Chiropractic",
    "founder": {
      "@type": "Physician",
      "name": "Dr. Hyeon Joo Park, D.C., M.S.",
      "medicalSpecialty": "Chiropractic",
      "knowsAbout": ["Upper Cervical Chiropractic", "Palmer Method", "TMJ", "Whiplash"]
    }
  };

  return (
    <html lang={lng} className="scroll-pt-[104px]" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Noto+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased selection:bg-primary/20">
        <I18nProvider lng={lng}>
          <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <ClientLayout>
              <SkipToContent />
              <Navbar />
              <main 
                id="main-content" 
                tabIndex={-1} 
                className="flex-grow w-full flex flex-col outline-none pt-[68px] sm:pt-[96px] lg:pt-[96px]"
              >
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <Footer />
            </ClientLayout>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
