import React from 'react';
import { Flex, Spinner, useTheme, useColorMode } from '@chakra-ui/core';

const PageLoader = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Spinner
        color={(colors as any).brand.primary[100]}
        size="lg"
        emptyColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
        speed="0.65s"
        thickness="4px"
      />
    </Flex>
  );
};

export default PageLoader;
