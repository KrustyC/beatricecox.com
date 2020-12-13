import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import BehanceSvg from '../../assets/icons/behance.svg';
import LinkedinSvg from '../../assets/icons/linkedin.svg';
import InstagramSvg from '../../assets/icons/instagram.svg';
import PinterestSvg from '../../assets/icons/pinterest.svg';
import FlickrSvg from '../../assets/icons/flickr.svg';

import SEO from '../../components/Seo';
import Layout from '../../components/Layout';

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    grid-template-columns: 1fr;
    padding: 0 .5em;
  `}
`;

const Text = styled.p`
  max-width: 360px;
  text-transform: uppercase;
  font-family: 'Oswald' !important;
  margin: 0;
`;

const Social = styled.div`
  display: flex;
`;

const Icon = styled.a`
  text-decoration: none;
  margin: 1.5rem 0;
  svg {
    width: 50px;
    height: 50px;

    ${media.lessThan('medium')`
      width: 40px;
      height: 40px;
    `}
  }

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Contacts = () => (
  <>
    <SEO title="Contacts" />
    <Layout title="Where?">
      <Main>
        <Text>
          If you like my work and would like to see more check out my other
          platforms.
        </Text>
        <Social>
          <Icon
            href="https://www.instagram.com/beets_and_roots/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramSvg />
          </Icon>

          <Icon
            href="https://www.behance.net/BeatriceCox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BehanceSvg />
          </Icon>

          <Icon
            href="https://www.linkedin.com/in/beatrice-duguid-cox-b96419b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSvg />
          </Icon>

          <Icon
            href="https://www.flickr.com/photos/147991560@N07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlickrSvg />
          </Icon>

          <Icon
            href="https://www.pinterest.co.uk/beatriceduguidc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinterestSvg />
          </Icon>
        </Social>
        <Text>
          Or Otherwise here are my contact details: beatriceduguidcox@gmail.com
        </Text>
      </Main>
    </Layout>
  </>
);

export default Contacts;
