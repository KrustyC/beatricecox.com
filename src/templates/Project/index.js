import React from 'react';
import PropTypes from 'prop-types';
import { Parser as HtmlToReactParser } from 'html-to-react';
import { graphql } from 'gatsby';

import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import CopyRight from '../../components/CopyRight';
import {
  Bottom,
  Chip,
  Main,
  SkillContainer,
  Skills,
  Text,
  TextTitle,
} from './style';
import Carousel from './Carousel';

const htmlToReactParser = new HtmlToReactParser();

const Project = ({
  data: {
    prismicPortfolioItem: { data },
  },
}) => {
  const slideshowPics = data.slideshow.map(({ pic: { url } }) => url);
  const isConcept = data.project_concept.html !== null;
  const hasSkills = data.project_skills.text !== null;
  const hasMembers = data.project_members.html !== null;
  const skills = hasSkills
    ? data.project_skills.text
        .split(';')
        .map(skill => skill.trim())
        .filter(skill => skill !== '')
    : [];

  return (
    <>
      <SEO title={data.title.text} />
      <Layout
        title={data.title.text}
        description={data.project_description.text}
      >
        <Main>
          <Text>
            <TextTitle>{isConcept ? 'The Concept' : 'The Brief'}</TextTitle>
            {htmlToReactParser.parse(
              isConcept ? data.project_concept.html : data.project_brief.html
            )}
          </Text>
          <Carousel items={slideshowPics} />
          <Text>
            <TextTitle>The Project</TextTitle>
            {htmlToReactParser.parse(data.project_content.html)}
          </Text>
          {hasSkills && (
            <Text>
              <TextTitle>Skills</TextTitle>
              {htmlToReactParser.parse(data.project_skills.html)}
            </Text>
          )}
          {hasSkills && (
            <SkillContainer>
              <TextTitle>Skills</TextTitle>
              <Skills>
                {skills.map(skill => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </Skills>
            </SkillContainer>
          )}
          {hasMembers && (
            <Text>
              <TextTitle>Members</TextTitle>
              {htmlToReactParser.parse(data.project_members.html)}
            </Text>
          )}
        </Main>
        <Bottom>
          <CopyRight />
        </Bottom>
      </Layout>
    </>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    prismicPortfolioItem: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
        project_description: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
        project_brief: PropTypes.shape({
          html: PropTypes.string,
        }).isRequired,
        project_concept: PropTypes.shape({
          html: PropTypes.string,
        }).isRequired,
        project_content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
        project_skills: PropTypes.shape({
          html: PropTypes.string,
          text: PropTypes.string,
        }).isRequired,
        project_members: PropTypes.shape({
          html: PropTypes.string,
        }).isRequired,
        project_picture: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
        slideshow: PropTypes.arrayOf(
          PropTypes.shape({
            pic: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          })
        ).isRequired,
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
        project_brief {
          html
        }
        project_concept {
          html
        }
        project_content {
          html
        }
        project_skills {
          html
          text
        }
        project_members {
          html
        }
        project_picture {
          url
        }
        title {
          text
        }
        slideshow {
          pic {
            url
          }
        }
      }
    }
  }
`;
