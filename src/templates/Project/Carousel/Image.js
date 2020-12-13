import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 0.5s;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
  background-color: #e2e5e7;
`;

const Image = ({ src }) => {
  return (
    <Container>
      <SwitchTransition mode="in-out">
        <CSSTransition
          key={src}
          addEndListener={(node, done) =>
            node.addEventListener('transitionend', done, false)
          }
          classNames="fade"
        >
          <Img src={src} />
        </CSSTransition>
      </SwitchTransition>
    </Container>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
