import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
const { version, name } = require('../package.json');

import ApolloProvider from '@common/apollo/ApolloProvider';
import CustomScrollbar from '@components/CustomScrollbar';

import App from './App';
import theme, { config } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme as any}>
      <ColorModeProvider>
        <ApolloProvider
          URI={process.env.APOLLO_API_URL}
          clientVersion={version}
          clientName={name}
        >
          <CSSReset config={(theme) => config(theme as any)} />
          <CustomScrollbar />
          <App />
        </ApolloProvider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
