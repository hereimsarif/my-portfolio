import { useEffect, useState } from 'react';
import { getSystemTheme, setTheme, getStoredTheme } from '../lib/utils';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = getStoredTheme() ?? getSystemTheme();
    setIsDark(theme === 'dark');
    setTheme(theme);
  }, []);

  function toggle() {
    setIsDark((dark) => {
      const newTheme = !dark ? 'dark' : 'light';
      setTheme(newTheme);
      return !dark;
    });
  }

  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-base-dark shadow hover:shadow-lg transition-all duration-200 focus:outline-none"
      onClick={toggle}
      title="Toggle dark mode"
    >
      {isDark ? (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#fbbf24"/>
        </svg>
      ) : (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="#0ea5e9" />
          <g stroke="#0ea5e9" strokeWidth="1.5">
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="2" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          </g>
        </svg>
      )}
    </button>
  );
}
