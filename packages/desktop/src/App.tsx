import React from 'react';
import { Box } from '@chakra-ui/core';

import ToggleTheme from './components/ToogleTheme';
import Routes from './routes';

import { AuthenticationContext } from './context/Authentication';
import useAuthentication from './hooks/useAuthentication';
import Signout from '@components/Signout';

function App() {
  const { token, setToken, isAuthenticated } = useAuthentication();

  return (
    <AuthenticationContext.Provider
      value={{ token, setToken, isAuthenticated }}
    >
      {isAuthenticated && (
        <Box pos="absolute" left={4} top={4}>
          <Signout />
        </Box>
      )}
      <Box pos="absolute" right={4} top={4}>
        <ToggleTheme />
      </Box>
      <Routes isAuthenticated={isAuthenticated} />
    </AuthenticationContext.Provider>
  );
}

export default App;
