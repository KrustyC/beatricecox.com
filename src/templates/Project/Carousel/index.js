import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProgressiveImage from 'react-progressive-image';
import { CarouselContainer, Slide } from './style';
import History from './History';

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(true);

  const onGoToHistoryClick = index => {
    setCurrent(index);
    setIsNext(current < index);
  };

  return (
    <CarouselContainer>
      <ReactCSSTransitionGroup
        transitionName={{
          enter: isNext ? 'enter-next' : 'enter-prev',
          enterActive: 'enter-active',
          leave: 'leave',
          leaveActive: isNext ? 'leave-active-next' : 'leave-active-prev',
        }}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
      >
        <Slide key={current}>
          <ProgressiveImage src={items[current]}>
            {src => <img src={src} alt="project_image" />}
          </ProgressiveImage>
        </Slide>
      </ReactCSSTransitionGroup>
      <History
        current={current}
        items={items}
        onChangeSlide={onGoToHistoryClick}
      />
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Carousel;