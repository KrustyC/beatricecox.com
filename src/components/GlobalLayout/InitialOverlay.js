import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SEO from '../seo';
import BackgroundSection from './BackgroundSection';

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
    font-size: 130px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`;

const Li = styled.li`
  a {
    color: white;
    position: relative;
    display: inline-block;

    text-decoration: none;
    :visited,
    :focus {
      color: white;
    }
    :hover {
      color: white;
      ::before {
        content: '';
        border-bottom: 2px solid red;
        width: 100%;
        position: absolute;
        right: 0;
        top: 50%;
      }
    }
  }
`;

const InitialOverlay = () => (
  <BackgroundSection>
    <SEO title="Designer" />
    <Overlay>
      <Header>
        <h3>When? - Now!</h3>
      </Header>
      <Main>
        <Ul>
          <Li>
            <Link to="/">About</Link>
          </Li>
          <Li>
            <Link to="/projects">Projects</Link>
          </Li>
          <Li>
            <Link to="/extras">Extras</Link>
          </Li>
          <Li>
            <Link to="/contacts">Contacts</Link>
          </Li>
        </Ul>
      </Main>
      <Footer>
        <h1>Beatrice Cox</h1>
      </Footer>
    </Overlay>
  </BackgroundSection>
);

export default InitialOverlay;
