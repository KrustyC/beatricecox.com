import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Item from './Item';

const Grid = styled.div`
  display: grid;
  width: 70vw;
  margin: 3rem auto;

  grid-template-columns: repeat(3, 1fr);
`;

const Portfolio = ({
  data: {
    allPrismicPortfolioItem: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>This is a list of all the amazing stuff {`I've`} done during my life</p>
    <p>Now go build something great.</p>
    <Grid>
      {nodes.map(({ id, data }) => (
        <Item key={id} id={id} data={data} />
      ))}
    </Grid>
  </Layout>
);

Portfolio.propTypes = {
  data: PropTypes.shape({
    allPrismicPortfolioItem: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          data: PropTypes.object.isRequired,
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
          project_description {
            text
          }
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

export default Portfolio;
