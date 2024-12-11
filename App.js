import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import DrawerNav from './src/navigation/DrawerNav';
import { ThemeProvider } from './src/contexts/ThemeContext';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <DrawerNav />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
