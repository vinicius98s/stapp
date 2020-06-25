import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme, useColorMode } from '@chakra-ui/core';

const CustomScrollbar = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Global
      styles={css`
        ::-webkit-scrollbar {
          width: 10px;
          background: ${colorMode === 'light'
            ? colors.gray[100]
            : colors.gray[800]};
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: ${colorMode === 'light'
            ? colors.gray[700]
            : colors.gray[400]};
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${colorMode === 'light'
            ? colors.gray[800]
            : colors.gray[200]};
        }
      `}
    />
  );
};

export default CustomScrollbar;
