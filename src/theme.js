import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  colors: {
    // primary: '#201D29',
  },
  breakpoints: {
    sm: '499px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default theme;