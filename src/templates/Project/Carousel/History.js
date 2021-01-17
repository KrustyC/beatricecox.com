import React from 'react';
import PropTypes from 'prop-types';
import { HistoryContainer, List, ListItem, HistoryButton } from './style';

const History = ({ items, current, onChangeSlide }) => (
  <HistoryContainer>
    <List>
      {items.map((_, index) => (
        <ListItem key={Math.random()}>
          <HistoryButton
            active={index === current}
            onClick={() => onChangeSlide(index)}
          />
        </ListItem>
      ))}
    </List>
  </HistoryContainer>
);

History.propTypes = {
  items: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  onChangeSlide: PropTypes.func.isRequired,
};

export default History;
