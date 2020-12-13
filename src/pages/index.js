import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import BackgroundImage from './_BackgroundImage';
import Layout from '../components/Layout';
import CopyRight from '../components/CopyRight';

const Hero = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
  `}
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
    margin-bottom: -15px;
    text-transform: uppercase;
    font-size: 120px;
    font-weight: 100;

    ${media.lessThan('medium')`
      font-size: 55px;
    `}
  }
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
  font-family: '${({ theme }) => theme.fonts.main}' !important;
  font-weight: ${({ theme }) => theme.fontSize};
  margin-top: 30px;
  text-align: left;
  overflow: auto;

  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
  /* 
  :last-of-type {
    margin-bottom: 4rem;
  } */
`;

const Footer = styled.div`
  grid-column: 2 / 3;
  grid-row: 4;

  padding: ${({ theme }) => theme.margin.md} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    padding: ${({ theme }) => theme.margin.sm} 0.5rem;
  `}
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
        Welcome to my personal website, here is a bit of background on me. I
        {"'"}m an anglo-italian designer who moved to London a couple of years
        ago. I{"'"}m really enjoying this city{"'"}s multicultural vibe and love
        how you can never get bored with it!
      </Text>
      <Text>
        I was born in Sansepolcro, a small town in Tuscany, perhaps most famous
        as the birthplace of Piero della Francesca. I went to art school at the
        age of 10 and I{"'"}ve always had a passion for all forms of art. I am a
        creative who likes to be multidisciplinary, and I am always on the look
        out for new solutions to problems. I try to get the most out of
        everything, and like to make a record of interesting things that I see,
        either by photographing them or drawing them.
      </Text>
      <Text>I hope you enjoy looking at the projects I{"'"}ve worked on.</Text>
    </Main>
    <Footer>
      <CopyRight />
    </Footer>
  </Layout>
);

export default About;
