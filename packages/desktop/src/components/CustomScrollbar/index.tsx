import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme, useColorMode } from '@chakra-ui/core';

import { Theme } from '../../styles/theme';

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
            ? (colors as Theme['colors']).brand.primary[100]
            : colors.gray[400]};
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${colorMode === 'light'
            ? (colors as Theme['colors']).brand.darker[300]
            : colors.gray[200]};
        }
      `}
    />
  );
};

export default CustomScrollbar;
