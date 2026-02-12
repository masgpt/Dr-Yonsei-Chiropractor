'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const LANGUAGE_COOKIE_NAME = 'i18next';
export const LANGUAGE_LOCAL_STORAGE_KEY = 'i18nextLng';

const setLanguageCookie = (value: string) => {
  if (typeof document === 'undefined') return;
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${encodeURIComponent(
    value
  )}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Strict`;
};

export const persistLanguagePreference = (lng: string) => {
  if (typeof window === 'undefined') return;
  setLanguageCookie(lng);
  try {
    window.localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, lng);
  } catch (error) {
    console.error('Unable to persist language preference', error);
  }
};

export const clearLanguagePreference = () => {
  if (typeof window === 'undefined') return;
  document.cookie = `${LANGUAGE_COOKIE_NAME}=; path=/; max-age=0; SameSite=Strict`;
  try {
    window.localStorage.removeItem(LANGUAGE_LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error('Unable to clear language preference', error);
  }
};

// Import translations directly for SSR/SSG
import enTranslation from './locales/en/translation.json';
import enReviews from './locales/en/reviews.json';
import koTranslation from './locales/ko/translation.json';
import koReviews from './locales/ko/reviews.json';

const isServer = typeof window === 'undefined';
const getInitialLanguage = () => {
  if (isServer) return 'en';
  const htmlLang = document.documentElement.lang;
  return htmlLang === 'ko' || htmlLang === 'en' ? htmlLang : 'en';
};

const i18nInstance = i18n.use(initReactI18next);

i18nInstance.init({
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: ['en', 'ko'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation', 'reviews'],
    defaultNS: 'translation',
    resources: {
      en: {
        translation: enTranslation,
        reviews: enReviews
      },
      ko: {
        translation: koTranslation,
        reviews: koReviews
      }
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
