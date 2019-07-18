import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Links from '../components/Links';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  color: black;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    '. header header header header header header header'
    'hero hero hero hero hero hero hero hero-side'
    'hero hero hero hero hero hero hero hero-side'
    'hero hero hero hero hero hero hero hero-side'
    'hero hero hero hero hero hero hero hero-side'
    'hero hero hero hero hero hero hero hero-side'
    'hero hero hero hero hero hero hero hero-side'
    '. main main main main main . .'
    '. main main main main main . .'
    '. main main main main main . .'
    '. main main main main main . .';
`;

const Header = styled.div`
  text-transform: uppercase;
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 40px;
  }
`;

const Hero = styled.div`
  grid-area: hero;
`;

const HeroSide = styled.div`
  grid-area: hero-side;
  padding-left: 50px;
`;

const Main = styled.div`
  display: flex;
  grid-area: main;
  color: black;
  width: 100%;
  overflow: hidden;
`;

const Text = styled.p`
  width: 100%;
  /* max-width: 50vw; */
  font-family: 'Montserrat' !important;
  margin-top: 10px;
  text-align: left;
  overflow: auto;
`;

const HeroImage = styled.div`
  display: flex;
  color: white;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;

  h1 {
    text-transform: uppercase;
    font-size: 120px;
    font-weight: 100;
  }
`;

const About = () => (
  <Grid>
    <Header>
      <h1>Who?</h1>
    </Header>
    <Hero>
      <BackgroundImage>
        <HeroImage>
          <h1>Beatrice Cox</h1>
        </HeroImage>
      </BackgroundImage>
    </Hero>
    <HeroSide>
      <Links />
    </HeroSide>
    <Main>
      <Text>
        Hello! Welcome to my website. Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
        ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
        vulputate velit esse molestie consequat, vel illum dolore eu feugiat
        nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
        blandit praesent luptatum zzril delenit augue duis dolore te feugait
        nulla facilisi.
      </Text>
    </Main>
  </Grid>
);

export default About;
