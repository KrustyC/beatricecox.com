import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Links from '../../components/Links';
import SEO from '../../components/Seo';
import Item from './_Item';
import DownloadCurriculum from './_DownloadCurriculum';
import DownloadPortfolio from './_DownloadPortfolio';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 150px auto 200px;

  ${breakpoint('xl')`
    grid-template-columns: 1fr 2fr 1fr;
  `}
`;

const Header = styled.div`
  text-transform: uppercase;
  grid-column: 2;
  grid-row-start: 1 / 1;

  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
  }
`;

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

const MainSide = styled.div`
  grid-column: 3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  position: sticky;
  position: sticky;
  top: 0;
  top: 150px;
  right: 0;
  height: 100vh;
`;

const Footer = styled.div`
  text-transform: uppercase;
  grid-column: 2 / 3;
  grid-row: 3;

  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Projetcs = ({
  data: {
    allPrismicPortfolioItem: { nodes },
  },
}) => (
  <>
    <SEO title="Portfolio" />
    <Grid>
      <Header>
        <h1>What?</h1>
      </Header>
      <Main>
        {nodes.map((node, i) => (
          <Item key={node.id} order={i + 1} {...node} />
        ))}
      </Main>
      <MainSide>
        <Links />
      </MainSide>
      <Footer>
        <DownloadCurriculum />
        <br />
        <DownloadPortfolio />
      </Footer>
    </Grid>
  </>
);

Projetcs.propTypes = {
  data: PropTypes.shape({
    allPrismicPortfolioItem: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          data: PropTypes.shape({
            title: PropTypes.shape({
              text: PropTypes.string.isRequired,
            }).isRequired,
            project_picture: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }).isRequired,
          }),
        })
      ),
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query PortfolioItems {
    allPrismicPortfolioItem {
      nodes {
        id
        data {
          project_picture {
            url
          }
          title {
            text
          }
        }
      }
    }
  }
`;

export default Projetcs;
