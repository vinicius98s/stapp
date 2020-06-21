import { theme } from '@chakra-ui/core';

export default {
  ...theme,
  colors: {
    ...theme.colors,
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
};
