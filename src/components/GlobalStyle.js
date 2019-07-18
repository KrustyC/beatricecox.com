import { createGlobalStyle } from 'styled-components';

import './layout.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
