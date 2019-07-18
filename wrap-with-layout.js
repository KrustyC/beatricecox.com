import React from 'react';
import OverlayLayout from './src/components/OverlayLayout';
import GlobalStyle from './src/components/GlobalStyle';

// eslint-disable-next-line react/prop-types
export default ({ element, props }) => (
  <>
    <GlobalStyle />
    <OverlayLayout {...props}>{element}</OverlayLayout>
  </>
);
