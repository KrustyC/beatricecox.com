import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import BackgroundImage from './_BackgroundImage';
import Layout from '../components/Layout';

const Hero = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
  `}
`;

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 3;
  padding-top: 40px;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    padding: 20px .5rem;
  `}
`;

const Text = styled.p`
  font-family: 'Montserrat' !important;
  margin-top: 30px;
  text-align: left;
  overflow: auto;

  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
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

    font-size: 55px;
  }
`;

const About = () => (
  <Layout title="Who?" middleRow="500px">
    <Hero>
      <BackgroundImage>
        <HeroImage>
          <h1>Beatrice Cox</h1>
        </HeroImage>
      </BackgroundImage>
    </Hero>
    <Main>
      <Text>
        Welcome to my personal website, here is a bit of my background! I{"'"}m
        an anglo-italian designer and moved to London a couple of years ago. I
        {"'"}m really enjoying this city{"'"}s multicultural vibe and love how
        you can never get bored with it!
      </Text>
      <Text>
        Born in Sansepolcro, small town in Tuscany, Piero della Francesca{"'"}s
        hometown! Been to art school since the age of 10 and I{"'"}ve always had
        a passion for all forms of art and am a creative who likes to be
        multidisciplinary and always on the look out for learning something new.
        I try to get the most out of everything and like to make note of what I
        see by either photographing it or drawing it.
      </Text>
      <Text>Hope you enjoy looking at my projects :)</Text>
    </Main>
  </Layout>
);

export default About;
