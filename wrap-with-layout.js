import React from 'react';
import { ThemeProvider } from 'styled-components';
import OverlayLayout from './src/components/OverlayLayout';
import GlobalStyle from './src/components/GlobalStyle';

const theme = {
  colors: {
    accent: 'orange',
  },
  fontSize: '200',
  fonts: {
    main: 'EB Garamond',
    titles: 'Oswald',
  },
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1366,
    xl: 1920,
    xxl: 2560,
  },
  margin: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3.5rem',
    xl: '6rem',
  },
};

// eslint-disable-next-line react/prop-types
export default ({ element, props }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <OverlayLayout {...props}>{element}</OverlayLayout>
    </>
  </ThemeProvider>
);
