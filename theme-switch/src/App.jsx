import { useEffect } from 'react';
import { createContext, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Switcher } from './components/Switcher';

export const ThemeContext = createContext('');

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => localStorage.setItem('theme', theme), [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`wrapper ${theme}`}>
        <header>
          <button
            className='dark-mode-toggle'
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
          >
            <Switcher />
          </button>
        </header>
        <h1>My Blog</h1>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
