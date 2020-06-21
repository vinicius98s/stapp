import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/core';

const ToggleTheme = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon="sun"
      onClick={toggleColorMode}
      aria-label="Change theme"
    />
  );
};

export default ToggleTheme;
