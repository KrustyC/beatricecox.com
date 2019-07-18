import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const StyledBackgrounImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
`;

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <StyledBackgrounImage
          Tag="section"
          fluid={imageData}
          backgroundColor="#040e18"
        >
          {children}
        </StyledBackgrounImage>
      );
    }}
  />
);

BackgroundSection.propTypes = {
  children: PropTypes.any,
};

BackgroundSection.defaultProps = {
  children: null,
};

export default BackgroundSection;
