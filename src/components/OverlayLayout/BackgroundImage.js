import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const StyledBackgrounImage = styled(BackgroundImage)`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  opacity: 0.2;
`;

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  background: black;
  opacity: 0.3;
`;

const BackgroundSection = () => (
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
        <>
          <StyledBackgrounImage
            Tag="section"
            fluid={imageData}
            backgroundColor="#040e18"
          />
          <StyledOverlay />
        </>
      );
    }}
  />
);

export default BackgroundSection;
