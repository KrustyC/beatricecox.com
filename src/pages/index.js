import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './_BackgroundImage';
import Layout from '../components/Layout';

const Hero = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
`;

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 3;
  padding-top: 40px;
`;

const Text = styled.p`
  font-family: 'Rubik' !important;
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
  <Layout title="Who?" rows="150px 500px auto">
    <Hero>
      <BackgroundImage>
        <HeroImage>
          <h1>Beatrice Cox</h1>
        </HeroImage>
      </BackgroundImage>
    </Hero>
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
  </Layout>
);

export default About;
