import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const PortfolioItem = ({
  data: {
    prismicPortfolioItem: { data },
  },
}) => (
  <React.Fragment>
    <h1>{data.title.text}</h1>
    <p>{data.project_description.text}</p>
    <img src={data.project_picture.url} alt="project" />
  </React.Fragment>
);

PortfolioItem.propTypes = {
  data: PropTypes.shape({
    prismicPortfolioItem: PropTypes.shape({
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
    }).isRequired,
  }).isRequired,
};

export default PortfolioItem;

export const pageQuery = graphql`
  query PortfolioItemBySlug($id: String!) {
    prismicPortfolioItem(id: { eq: $id }) {
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
`;
