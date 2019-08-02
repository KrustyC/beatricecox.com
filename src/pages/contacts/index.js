import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import SEO from '../../components/Seo';
import Layout from '../../components/Layout';

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  justify-content: center;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    grid-template-columns: 1fr;
    padding: 0 .5em;
  `}
`;

const Contacts = () => (
  <>
    <SEO title="Contacts" />
    <Layout title="Where?">
      <Main>Contact me on all my social media</Main>
    </Layout>
  </>
);

export default Contacts;
