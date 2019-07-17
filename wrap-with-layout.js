import React from 'react';
import GlobalLayout from './src/components/GlobalLayout';

// eslint-disable-next-line react/prop-types
export default ({ element, props }) => (
  <GlobalLayout {...props}>{element}</GlobalLayout>
);
