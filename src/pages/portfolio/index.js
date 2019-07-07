import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const Grid = styled.div`
  display: grid;
  width: 70vw;
  margin: 3rem auto;

  grid-template-columns: repeat(3, 1fr);
`;

const Item = styled(Link)``;

const Portfolio = ({
  data: {
    allPrismicPortfolioItem: { nodes },
  },
}) => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>This is a list of all the amazing stuff I've done during my life</p>
    <p>Now go build something great.</p>
    <Grid>
      {nodes.map(({ id, data }) => (
        <Item key={id} to={`/portfolio/${id}`}>
          <h1>{data.title.text}</h1>
          <p>{data.title.text}</p>
          <p>{data.project_description.text}</p>
        </Item>
      ))}
    </Grid>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

Portfolio.propTypes = {
  data: PropTypes.shape({
    allPrismicPortfolioItem: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          data: PropTypes.shape({
            title: PropTypes.shape({
              text: PropTypes.string.isRequired,
            }),
            project_description: PropTypes.shape({
              text: PropTypes.string.isRequired,
            }),
            project_picture: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
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
