import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import BackgroundImage from './_BackgroundImage';
import Layout from '../components/Layout';
import CopyRight from '../components/CopyRight';
import SEO from '../components/Seo';

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
    <SEO title="Home" />
    <Hero>
      <BackgroundImage>
        <HeroImage>
          <h1>Beatrice Cox</h1>
        </HeroImage>
      </BackgroundImage>
    </Hero>
    <Main>
      <Text>
        Welcome to my personal website, here is a bit of background about me. I
        `&apos;`m an Anglo-Italian who moved to London a couple of years ago
        having graduated as a Product Designer from Bologna University with a
        First Class Degree.
      </Text>
      <Text>
        This time has inspired me and given me a broad range of experience in
        different disciplines. The multidisciplinary environment suits me and
        has given me the opportunity to be creative working with a great variety
        of people and projects - I love the `&&lsquo;`surprise`&&lsquo;` aspect
        this has. I`&apos;`m a true believer in working ways around things to
        try and make them environmentally less impactful, ethical and, really,
        just always be aware of the bigger picture.
      </Text>
      <Text>
        Currently working at Minale Tattersfield a multi-award winning Design
        Strategy company based in London - where I have been given the chance to
        work on really interesting projects, from 2D graphic artwork to 3D
        interiors.
      </Text>
      <Text>
        I hope you enjoy looking at the projects I`&apos;`ve worked on.
      </Text>
    </Main>
    <Footer>
      <CopyRight />
    </Footer>
  </Layout>
);

export default About;
