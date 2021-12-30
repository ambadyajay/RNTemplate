import React from 'react';
import {Provider} from 'react-redux';

import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import redux from './src/redux/store';

import {ThemeContext} from './src/theme/theme-context';

import {default as custom_theme} from './src/theme/theme.json';

import RootNavigator from './src/navigation/Router';

const {store, persistor} = redux();

export default function App() {
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <ApplicationProvider {...eva} theme={{...eva[theme], ...custom_theme}}>
          <RootNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}
