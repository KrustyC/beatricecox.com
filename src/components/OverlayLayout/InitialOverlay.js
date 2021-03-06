import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import BackgroundImage from './BackgroundImage';
import Links from '../Links';
import Burger from '../Burger';
import SEO from '../Seo';

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 150px auto 150px;
  text-transform: uppercase;
  position: relative;
  z-index: 1000;
  color: #fff;

  ${media.greaterThan('huge')`
    grid-template-columns: 1fr 728px 1fr;
  `}
`;

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Header = styled.div`
  text-transform: uppercase;
  grid-column: 2 / end;
  grid-row: 1 / 1;

  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    justify-content: space-between;
    padding: 0 0.5rem;
  `}

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
    ${media.lessThan('medium')`
      grid-template-columns: 1fr 2fr 1fr;
      font-size: 30px;
    `}
  }
`;

const RightSide = styled.div`
  grid-column: 3;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

const Bottom = styled.div`
  grid-column: 1 / end;
  grid-row: 3;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    margin: 0px;
    margin-bottom: -20px;
    font-size: 180px;
    font-weight: 100;
    ${media.lessThan('medium')`
      grid-template-columns: 1fr 2fr 1fr;
      font-size: 50px;
    `}
  }
`;

const InitialOverlay = () => (
  <>
    <SEO title="Home" />
    <BackgroundImage />
    <Div>
      <Grid>
        <Header>
          <h1>When? - Now!</h1>
          <Burger overlay />
        </Header>
        <RightSide>
          <Links overlay />
        </RightSide>
        <Bottom>
          <h1>Beatrice Cox</h1>
        </Bottom>
      </Grid>
    </Div>
  </>
);

export default InitialOverlay;
