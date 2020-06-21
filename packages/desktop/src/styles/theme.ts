import { theme as chakraTheme } from '@chakra-ui/core';

export const config = (theme: Theme) => {
  return {
    light: {
      color: theme.colors.gray[700],
      bg: theme.colors.brand.lighter[200],
      borderColor: theme.colors.gray[200],
      placeholderColor: theme.colors.gray[500],
    },
    dark: {
      color: theme.colors.whiteAlpha[900],
      bg: theme.colors.gray[800],
      borderColor: theme.colors.whiteAlpha[300],
      placeholderColor: theme.colors.whiteAlpha[400],
    },
  };
};

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      primary: {
        100: '#3C70FF',
        200: '#638DFF',
        300: '#8AA9FF',
      },
      darker: {
        100: '#060B19',
        200: '#12224C',
        300: '#1E3880',
      },
      lighter: {
        100: '#C5D4FF',
        200: '#ECF1FF',
      },
    },
  },
};

export type Theme = typeof theme;

export default theme;
