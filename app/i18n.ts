'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Import translations directly for SSR/SSG
import enTranslation from './locales/en/translation.json';
import enReviews from './locales/en/reviews.json';
import koTranslation from './locales/ko/translation.json';
import koReviews from './locales/ko/reviews.json';

const isServer = typeof window === 'undefined';

const i18nInstance = i18n
  .use(initReactI18next);

if (!isServer) {
  i18nInstance.use(HttpBackend).use(LanguageDetector);
}

i18nInstance.init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation', 'reviews'],
    defaultNS: 'translation',
    resources: isServer ? {
      en: {
        translation: enTranslation,
        reviews: enReviews
      },
      ko: {
        translation: koTranslation,
        reviews: koReviews
      }
    } : undefined,
    backend: isServer ? undefined : {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;