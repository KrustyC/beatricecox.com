import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/redux/createStore';

// eslint-disable-next-line import/prefer-default-export,react/prop-types
export const wrapRootElement = ({ element }) => {
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};
