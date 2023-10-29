// hooks/useDarkMode.js
import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem('dark-mode');
    if (localDarkMode) {
      setIsDarkMode(JSON.parse(localDarkMode));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return [isDarkMode, toggleDarkMode];
}
