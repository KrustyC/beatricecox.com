import React from 'react';
import { ThemeProvider } from 'styled-components';
import OverlayLayout from './src/components/OverlayLayout';
import GlobalStyle from './src/components/GlobalStyle';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
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
