import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/core';

const ToggleTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'light' ? 'moon' : 'sun'}
      onClick={toggleColorMode}
      aria-label="Change theme"
    />
  );
};

export default ToggleTheme;
