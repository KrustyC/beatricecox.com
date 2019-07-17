import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import GlobalLayout from '../components/GlobalLayout';
import Image from '../components/image';
import SEO from '../components/seo';
import BackgroundSection from '../components/BackgroundSection';

const HomeLayout = styled.div`
  /* position: absolute; */
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 150px;
  position: absolute;
  bottom: 50px;
  right: 100px;
`;

const IndexPage = () => (
  <GlobalLayout>
    {/* <HomeLayout> */}
    <BackgroundSection>
      <SEO title="Home" />
      <HomeLayout>
        <Title>Beatrice Duguid Cox</Title>
      </HomeLayout>
    </BackgroundSection>
    {/* <img src="./home.jpeg" /> */}
    {/* <h1>Hi peopsle</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    {/* </HomeLayout> */}
  </GlobalLayout>
);

export default IndexPage;
