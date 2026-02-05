'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import i18n, {
  persistLanguagePreference,
  clearLanguagePreference,
} from '../../i18n';

export type ConsentCategory = 'analytics' | 'marketing' | 'preferences';
export type ThemePreference = 'light' | 'dark' | 'system';

interface ConsentCategories {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface ConsentState {
  decision: 'accepted' | 'rejected' | 'custom' | null;
  categories: ConsentCategories;
  themePreference: ThemePreference;
  updatedAt: number;
}

const STORAGE_KEY = 'consent_preferences';
const CONSENT_COOKIE_NAME = 'consent_preferences';

const DEFAULT_STATE: ConsentState = {
  decision: null,
  categories: {
    analytics: false,
    marketing: false,
    preferences: false,
  },
  themePreference: 'system',
  updatedAt: Date.now(),
};

const persistConsentCookie = (nextState: ConsentState) => {
  if (typeof document === 'undefined') return;
  if (!nextState.decision) return;
  try {
    const payload = JSON.stringify({
      decision: nextState.decision,
      categories: nextState.categories,
      themePreference: nextState.themePreference,
    });
    document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
      payload
    )}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Strict`;
  } catch (error) {
    console.error('Unable to update consent cookie', error);
  }
};

interface ConsentContextValue {
  state: ConsentState;
  isReady: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: ConsentCategories) => void;
  setThemePreference: (next: ThemePreference) => void;
  isBannerOpen: boolean;
  openBanner: () => void;
  closeBanner: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<ConsentState>(DEFAULT_STATE);
  const [isReady, setIsReady] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as ConsentState;
        setState(parsed);
        persistConsentCookie(parsed);
      }
    } catch (error) {
      console.error('Unable to read consent preferences', error);
    } finally {
      setIsReady(true);
    }
  }, []);

  const persistState = (nextState: ConsentState) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch (error) {
      console.error('Unable to persist consent preferences', error);
    }
    persistConsentCookie(nextState);
    setState(nextState);
  };

  const updateState = (updates: Partial<ConsentState>) => {
    persistState({
      ...state,
      ...updates,
      categories: {
        ...state.categories,
        ...updates.categories,
      },
      updatedAt: Date.now(),
    });
  };

  const acceptAll = () => {
    updateState({
      decision: 'accepted',
      categories: {
        analytics: true,
        marketing: true,
        preferences: true,
      },
    });
    setIsBannerOpen(false);
  };

  const rejectAll = () => {
    updateState({
      decision: 'rejected',
      categories: {
        analytics: false,
        marketing: false,
        preferences: false,
      },
    });
    setIsBannerOpen(false);
  };

  const savePreferences = (categories: ConsentCategories) => {
    updateState({
      decision: 'custom',
      categories,
    });
    setIsBannerOpen(false);
  };

  const openBanner = () => setIsBannerOpen(true);
  const closeBanner = () => setIsBannerOpen(false);

  const setThemePreference = (nextTheme: ThemePreference) => {
    const nextState = {
      ...state,
      themePreference: nextTheme,
      updatedAt: Date.now(),
    };
    if (state.categories.preferences) {
      persistState(nextState);
    } else {
      setState(nextState);
    }
  };

  useEffect(() => {
    if (!isReady) return;
    if (state.categories.analytics) {
      persistLanguagePreference(i18n.language);
    } else {
      clearLanguagePreference();
    }
  }, [state.categories.analytics, isReady]);

  useEffect(() => {
    if (!isReady) return;
    if (state.categories.preferences) {
      persistState(state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.categories.preferences, isReady]);

  const value = useMemo(
    () => ({
      state,
      isReady,
      acceptAll,
      rejectAll,
      savePreferences,
      setThemePreference,
      isBannerOpen,
      openBanner,
      closeBanner,
    }),
    [state, isReady, isBannerOpen]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
};
