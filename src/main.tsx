import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';

import ResetStyles from './views/styles/reset.ts';
import theme from './views/styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
