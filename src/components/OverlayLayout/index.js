import React from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';

import InitialOverlay from './InitialOverlay';

const BackgroundBox = posed.div({
  exit: {
    opacity: 0,
    transition: { duration: 1000 },
  },
});

const MainBox = posed.div({
  enter: {
    opacity: 1,
    height: 1,
    delay: 500,
  },
  exit: {
    opacity: 0,
  },
});

const OverlayLayout = ({
  children,
  location: { pathname },
  showOverlay,
  onHideOverlay,
}) => {
  const onClick = e => {
    if (!showOverlay) {
      return null;
    }

    const {
      target: { tagName },
    } = e;
    if (tagName.toLowerCase() === 'a' || /\/project\//.test(pathname)) {
      return onHideOverlay();
    }

    return null;
  };

  return (
    <PoseGroup>
      {showOverlay ? (
        <BackgroundBox key="wrapper" tabIndex="0" onClick={onClick}>
          <InitialOverlay />
        </BackgroundBox>
      ) : (
        <MainBox key="global">{children}</MainBox>
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

const mapStateToProps = ({ showOverlay }) => ({ showOverlay });

const mapDispatchToProps = dispatch => ({
  onHideOverlay: () => dispatch({ type: `HIDE_OVERLAY` }),
});

export default connect(mapStateToProps, mapDispatchToProps)(OverlayLayout);
