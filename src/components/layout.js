import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components'
import posed, { PoseGroup } from 'react-pose';
import { connect } from "react-redux"

import Header from './header';
import InitialOverlay from './InitialOverlay';
import './layout.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
  }
`

const Box = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1000 },
  },
});

const Wrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: mediumaquamarine;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Global = styled.div`
`

const Layout = ({ children, showOverlay, onHideOverlay }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <GlobalStyle />
    
    <PoseGroup>
      {showOverlay ? (
        <Wrapper key="wrapper" tabIndex="0" onClick={onHideOverlay}>
          <InitialOverlay />
        </Wrapper>
      ) :(
        
          <Global key="global">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
          </Global>
          )}
      </PoseGroup>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = ({ showOverlay }) => {
  return { showOverlay }
}

const mapDispatchToProps = dispatch => {
  return { 
    onHideOverlay: () => dispatch({ type: `HIDE_OVERLAY` })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
