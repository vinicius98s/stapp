import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import App from './App';
import theme, { config, Theme } from './styles/theme';

import CustomScrollbar from './components/CustomScrollbar';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset config={(theme) => config(theme as Theme)} />
        <CustomScrollbar />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
