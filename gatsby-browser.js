import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import createStore from './src/redux/createStore';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
  }
`;

// eslint-disable-next-line import/prefer-default-export,react/prop-types
export const wrapRootElement = ({ element }) => {
  const store = createStore();
  return <Provider store={store}>{element}</Provider>;
};

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
  }
};
