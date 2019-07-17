import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';

import InitialOverlay from './InitialOverlay';
import '../layout.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
    height: 100%;
    width: 100%;
  }
  * {
    font-family: 'Montserrat' !important;
  }
`;

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

const Wrapper = styled(Box)``;

const Global = styled.div``;

const GlobalLayout = ({ children, showOverlay, onHideOverlay }) => {
  return (
    <React.Fragment>
      <GlobalStyle />

      <PoseGroup>
        {showOverlay ? (
          <Wrapper key="wrapper" tabIndex="0" onClick={onHideOverlay}>
            <InitialOverlay />
          </Wrapper>
        ) : (
          <Global key="global">{children}</Global>
        )}
      </PoseGroup>
    </React.Fragment>
  );
};

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showOverlay: PropTypes.bool.isRequired,
  onHideOverlay: PropTypes.func.isRequired,
};

const mapStateToProps = ({ showOverlay }) => {
  return { showOverlay };
};

const mapDispatchToProps = dispatch => {
  return {
    onHideOverlay: () => dispatch({ type: `HIDE_OVERLAY` }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalLayout);
