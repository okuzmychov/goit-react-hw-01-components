import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    lightGrey: '#fafafa',
    grey: '#CCCAC9',
    darkGrey: '#6e6e6e',
    white: '#fff',
    blue: '#0096FF',
    violet: '#AD42CB',
    magenta: '#FF00FF',
    verbigris: '#40B5AD',
    red: '#FF0000',
    green: '#12A608',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
