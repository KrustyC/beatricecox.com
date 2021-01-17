import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CarouselContainer, Slide, Left, Right } from './style';
import History from './History';
import Image from './Image';

const Carousel = ({ items, imageFit }) => {
  const [current, setCurrent] = useState(0);

  const onGoToHistoryClick = index => setCurrent(index);

  const onGoToPrev = () => onGoToHistoryClick(current > 0 ? current - 1 : 0);

  const onGoToNext = () => {
    const nextIndex =
      current < items.length - 1 ? current + 1 : items.length - 1;
    onGoToHistoryClick(nextIndex);
  };

  return (
    <CarouselContainer>
      <Slide key={current}>
        <Left onClick={onGoToPrev} />

        <Image src={items[current]} fit={imageFit} />

        <Right onClick={onGoToNext} />
      </Slide>
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
  imageFit: PropTypes.oneOf(['contain', 'cover']),
};

Carousel.defaultProps = {
  imageFit: 'cover',
};

export default Carousel;
