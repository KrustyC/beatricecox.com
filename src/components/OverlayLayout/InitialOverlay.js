import React from 'react';
import styled from 'styled-components';

import SEO from '../Seo';
import BackgroundImage from '../BackgroundImage';
import Links from '../Links';

const Overlay = styled.div`
  height: 100vh;
  text-transform: uppercase;
  color: #ffffff;
  display: grid;
  grid-template-areas:
    'header'
    'header'
    'main'
    'main'
    'main'
    'footer'
    'footer';
  padding: 20px 100px 10px 0px;
`;

const Header = styled.div`
  grid-area: header;
  font-size: 50px;
  padding-top: 30px;
  padding-left: 10vw;
`;

const Main = styled.div`
  grid-area: main;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    font-size: 190px;
    font-weight: 100;
  }
`;

const InitialOverlay = () => (
  <BackgroundImage>
    <SEO title="Designer" />
    <Overlay>
      <Header>
        <h3>When? - Now!</h3>
      </Header>
      <Main>
        <Links overlay />
      </Main>
      <Footer>
        <h1>Beatrice Cox</h1>
      </Footer>
    </Overlay>
  </BackgroundImage>
);

export default InitialOverlay;
