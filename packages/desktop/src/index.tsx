import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import App from './App';
import theme, { config, Theme } from './styles/theme';

import CustomScrollbar from './components/CustomScrollbar';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <ApolloProvider client={client}>
          <CSSReset config={(theme) => config(theme as Theme)} />
          <CustomScrollbar />
          <App />
        </ApolloProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
