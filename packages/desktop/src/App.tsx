import React from 'react';
import { Box } from '@chakra-ui/core';

import ToggleTheme from './components/ToogleTheme';

import Routes from './routes';

function App() {
  return (
    <>
      <Box pos="absolute" right={2} top={2}>
        <ToggleTheme />
      </Box>
      <Routes />
    </>
  );
}

export default App;
