import React from 'react';
import { Provider } from 'react-redux';

import GlobalLayout from './src/components/GlobalLayout';
import createStore from './src/state/createStore';

// eslint-disable-next-line react/prop-types
export default ({ element }) => {
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};
