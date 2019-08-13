import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-size: 14px;
  max-width: 100%;
  font-family: 'Montserrat' !important;
  * {
    font-family: 'Montserrat' !important;
  }

  a {
    text-decoration: none;
    color: black !important;

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
    © 2019 Design by Beatrice Cox and{' '}
    <a href="https://dcrestini.me" target="_blank" rel="noopener noreferrer">
      Davide Crestini
    </a>
  </Span>
);

export default CopyRight;
