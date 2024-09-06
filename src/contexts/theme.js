import { createContext, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const name = localStorage.getItem('themeName');
    if (!name) {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light');

      darkMediaQuery.addEventListener('change', (e) => {
        setThemeName(e.matches ? 'dark' : 'light');
      });
    } else {
      setThemeName(name);
    }
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  // Memoize the context value to avoid re-rendering unless themeName or toggleTheme changes
  const contextValue = useMemo(() => [{ themeName, toggleTheme }], [themeName]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
