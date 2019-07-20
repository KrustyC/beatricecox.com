import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './_BackgroundImage';
import Links from '../components/Links';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 150px 500px auto;
`;

const Header = styled.div`
  text-transform: uppercase;
  grid-column: 2;
  grid-row-start: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
  }
`;

const Hero = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const HeroSide = styled.div`
  grid-column: 3;
  grid-row: 2;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 3;
`;

const Text = styled.p`
  font-family: 'Montserrat' !important;
  margin-top: 30px;
  text-align: left;
  overflow: auto;
`;

const HeroImage = styled.div`
  display: flex;
  color: white;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 1;

  h1 {
    margin: 0;
    margin-bottom: -10px;
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
