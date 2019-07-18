import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Links from '../../components/Links';

import SEO from '../../components/Seo';
import Item from './_Item';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  color: black;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 100px auto 200px;
`;

const Header = styled.div`
  text-transform: uppercase;
  grid-column-start: 2;
  grid-column-end: end;
  grid-row-start: 1;
  grid-row-end: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 40px;
  }
`;

const Main = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

const MainSide = styled.div`
  grid-column-start: 3;
  grid-column-end: end;
  grid-row-start: 2;
  grid-row-end: end;
  padding-left: 50px;
`;

const Footer = styled.div`
  text-transform: uppercase;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;

  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span:first-of-type {
    padding-bottom: 20px;
  }
`;

const fakeData = [
  {
    id: 1,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
  {
    id: 2,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
  {
    id: 3,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
  {
    id: 4,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
  {
    id: 5,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
  {
    id: 6,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
  {
    id: 7,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
  {
    id: 8,
    data: {
      title: {
        text: 'babington',
      },
      project_description: {
        text: 'Whatever',
      },
      project_picture: {
        url:
          'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    },
  },
];

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
      <Main>
        {fakeData.map(({ id, data }, i) => (
          <Item key={id} data={data} order={i + 1} />
        ))}
      </Main>
      <MainSide>
        <Links />
      </MainSide>
      <Footer>
        <span>Download CV</span>
        <span>Download Portfolio</span>
      </Footer>
    </Grid>
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
