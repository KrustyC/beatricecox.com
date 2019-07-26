import React from 'react';
import PropTypes from 'prop-types';
import { Parser as HtmlToReactParser } from 'html-to-react';
import { graphql } from 'gatsby';

import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import { Main, ImgContainer, Text } from './style';

const htmlToReactParser = new HtmlToReactParser();

const Project = ({
  data: {
    prismicPortfolioItem: { data },
  },
}) => (
  <>
    <SEO title={data.title.text} />
    <Layout title={data.title.text} description={data.project_description.text}>
      <Main>
        <Text>{htmlToReactParser.parse(data.project_intro.html)}</Text>
        <ImgContainer>
          <img src={data.project_picture.url} alt="project" />
        </ImgContainer>
        <Text>{htmlToReactParser.parse(data.project_content.html)}</Text>
      </Main>
    </Layout>
  </>
);

Project.propTypes = {
  data: PropTypes.shape({
    prismicPortfolioItem: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        project_description: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        project_intro: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
        project_content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
        project_picture: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  }).isRequired,
};

export default Project;

export const pageQuery = graphql`
  query PortfolioItemBySlug($id: String!) {
    prismicPortfolioItem(id: { eq: $id }) {
      id
      data {
        project_description {
          text
        }
        project_intro {
          html
        }
        project_content {
          html
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
