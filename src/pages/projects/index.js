import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../../components/Seo';
import Item from './_Item';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  color: black;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas:
    '. header header header header header header header'
    'main main main main main main main hero-side'
    'main main main main main main main hero-side'
    'main main main main main main main hero-side'
    'main main main main main main main hero-side'
    'main main main main main main main hero-side'
    'main main main main main main main hero-side';
`;

const Header = styled.div`
  text-transform: uppercase;
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 40px;
  }
`;

const Portfolio = ({
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
    </Grid>
    {/* <h1>Portfolio</h1>
    <p>This is a list of all the amazing stuff {`I've`} done during my life</p>
    <p>Now go build something great.</p>
    <Grid>
      {nodes.map(({ id, data }) => (
        <Item key={id} data={data} />
      ))}
    </Grid> */}
  </>
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
            }).isRequired,
            project_description: PropTypes.shape({
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
