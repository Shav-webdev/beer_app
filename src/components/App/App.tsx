import React, { useState } from 'react';
import './App.scss';
import Layout from 'hoc/Layout';
import Snackbar from '../Snackbar';
import { ThemeContext } from 'contexts/ThemeContext';
import BeersList from '../BeersList/BeersList';

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <Layout>
            <div className={'main-section'}>
              <BeersList />
            </div>
            <Snackbar />
          </Layout>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
