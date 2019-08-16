import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  max-width: 100%;
  font-size: 12px !important;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    font-family: 'Montserrat' !important;
  }

  span {
    line-height: 18px;

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
  }
`;

const CopyRight = () => (
  <Div>
    <span>© Copyright 2019 Beatrice Cox. All rights reserved.</span>
    <span>
      Design by Beatrice Cox and{' '}
      <a href="https://dcrestini.me" target="_blank" rel="noopener noreferrer">
        Davide Crestini
      </a>
    </span>
  </Div>
);

export default CopyRight;
