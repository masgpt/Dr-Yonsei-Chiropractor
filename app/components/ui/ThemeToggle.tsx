'use client';

import React, { useEffect } from 'react';
import { useConsent } from '../consent/ConsentContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { state, setThemePreference } = useConsent();
  const theme = state.themePreference;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = window.document.documentElement;

    const applyTheme = (targetTheme: 'light' | 'dark') => {
      root.classList.remove('light', 'dark');
      root.classList.add(targetTheme);
    };

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      applyTheme(systemTheme);
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (event: MediaQueryListEvent) => {
        applyTheme(event.matches ? 'dark' : 'light');
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: typeof theme =
      theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system';
    setThemePreference(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      aria-label={`Toggle theme (currently ${theme})`}
    >
      {theme === 'system' && (
        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-[20px] block">
          desktop_windows
        </span>
      )}
      {theme === 'dark' && (
        <span className="material-symbols-outlined text-yellow-500 text-[20px] block">
          dark_mode
        </span>
      )}
      {theme === 'light' && (
        <span className="material-symbols-outlined text-orange-500 text-[20px] block">
          light_mode
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
