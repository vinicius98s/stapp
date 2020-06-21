import React from 'react';
import { Button as ChakraButton, ButtonProps, useTheme } from '@chakra-ui/core';

import { Theme } from '../../styles/theme';

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const { colors } = useTheme();
  const { brand: brandColors } = colors as Theme['colors'];

  return (
    <ChakraButton
      bg={brandColors.primary[100]}
      _hover={{ bg: brandColors.primary[200] }}
      _active={{ bg: brandColors.darker[300] }}
      color="white"
      {...props}
    />
  );
};

export default Button;
