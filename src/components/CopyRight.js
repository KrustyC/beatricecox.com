import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  text-align: center;
  width: 100%;
  max-width: 100%;
  font-size: 14px !important;
  color: #333;
  font-family: 'Montserrat' !important;
  * {
    font-family: 'Montserrat' !important;
  }

  a {
    text-decoration: none;
    color: #333;

    :hover,
    :active,
    :focus,
    :visisted {
      text-decoration: none !important;
      color: black !important;
    }
  }
`;

const CopyRight = () => (
  <Span>
    © Copyright 2019 Beatrice Cox. All rights reserved. <br />
    Design by Beatrice Cox and{' '}
    <a href="https://dcrestini.me" target="_blank" rel="noopener noreferrer">
      Davide Crestini
    </a>
  </Span>
);

export default CopyRight;
