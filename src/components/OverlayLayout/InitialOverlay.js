import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import BackgroundImage from './BackgroundImage';
import Links from '../Links';

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
    grid-template-columns: 1fr 3fr 1fr;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: 1fr 2fr 1fr;
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
  grid-column: 2;
  grid-row: 1 / 1;

  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
  }
`;

const RightSide = styled.div`
  grid-column: 3;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  grid-column: 1 / end;
  grid-row: 3;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    margin: 0px;
    font-size: 150px;
    font-weight: 100;
  }
`;

const InitialOverlay = () => (
  <>
    <BackgroundImage />
    <Div>
      <Grid>
        <Header>
          <h1>When? - Now!</h1>
        </Header>
        <RightSide>
          <Links overlay />
        </RightSide>
        <Footer>
          <h1>Beatrice Cox</h1>
        </Footer>
      </Grid>
    </Div>
  </>
);

export default InitialOverlay;
