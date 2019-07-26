import React from 'react';
import styled from 'styled-components';

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
`;

const Extras = () => (
  <>
    <SEO title="Extras" />
    <Layout title="Extras">
      <Main>Here there are the extras</Main>
    </Layout>
  </>
);

export default Extras;
