import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import Item from './_Item';
import DownloadCurriculum from './_DownloadCurriculum';

const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    grid-template-columns: 1fr;
    padding: 0 .5em;
  `}
`;

const Footer = styled.div`
  text-transform: uppercase;
  grid-column: 2 / 3;
  grid-row: 3;

  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    padding: .5rem;
  `}
`;

const Projetcs = ({
  data: {
    allPrismicPortfolioItem: { nodes },
  },
}) => (
  <>
    <SEO title="Portfolio" />
    <Layout title="What?">
      <Main>
        {nodes.map((node, i) => (
          <Item key={node.id} order={i + 1} {...node} />
        ))}
      </Main>
      <Footer>
        <DownloadCurriculum />
      </Footer>
    </Layout>
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
