import React from 'react';
import PropTypes from 'prop-types';
import { Parser as HtmlToReactParser } from 'html-to-react';
import { graphql } from 'gatsby';

import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import { Main, ImgContainer, Text } from './style';
import Carousel from './Carousel';

const htmlToReactParser = new HtmlToReactParser();

const items = [
  'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
  'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
  'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
  'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
  'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg',
];

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
        <Carousel items={items} />
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
        # slideshow {

        # }
      }
    }
  }
`;
