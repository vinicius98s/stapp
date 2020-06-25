import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
const { version, name } = require('../package.json');

import ApolloProvider from '@common/apollo/ApolloProvider';

import App from './App';
import theme, { config, Theme } from './styles/theme';

import CustomScrollbar from './components/CustomScrollbar';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <ApolloProvider
          URI={process.env.APOLLO_API_URL}
          clientVersion={version}
          clientName={name}
        >
          <CSSReset config={(theme) => config(theme as Theme)} />
          <CustomScrollbar />
          <App />
        </ApolloProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
