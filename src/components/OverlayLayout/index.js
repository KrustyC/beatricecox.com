import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';

import InitialOverlay from './InitialOverlay';

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

const singlePorjectRegex = /\/project\//;

const OverlayLayout = ({ children, location, showOverlay, onHideOverlay }) => {
  const onClick = e => {
    if (
      showOverlay &&
      (e.target.tagName.toLowerCase() === 'a' ||
        singlePorjectRegex.test(location.pathname))
    ) {
      onHideOverlay();
    }
  };

  return (
    <PoseGroup>
      {showOverlay ? (
        <Wrapper key="wrapper" tabIndex="0" onClick={onClick}>
          <InitialOverlay />
        </Wrapper>
      ) : (
        <Global key="global">{children}</Global>
      )}
    </PoseGroup>
  );
};

OverlayLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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
)(OverlayLayout);
