import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

const MARGIN = '15px';

const Row = styled.div`
  display: flex;
  height: 350px;

  margin-bottom: ${MARGIN};

  ${media.greaterThan('medium')`
    width: 100%;
  `}

  ${media.lessThan('medium')`
    height: 555px;
    flex-direction: column;
  `}
`;

const ImageContainer = styled(Link)`
  position: relative;
  flex: 1;
  padding-top: 50px;
  height: 100%;
  width: 100%;
  background: ${({ color }) => color};

  ${media.greaterThan('medium')`
    transition: all 0.5s;
    :first-of-type {
      margin-right: ${MARGIN};
    }
  
    :hover {
      flex: 3;
    }
  `}

  ${media.lessThan('medium')`
    height: 270px;
    width: 270px;

    :first-of-type {
      margin-bottom: ${MARGIN};
    }
  `}
`;

const Number = styled.span`
  font-size: 65px;
  transform: rotate(-90deg);
  position: absolute;
  right: ${({ containsOne }) => (containsOne ? '9px' : '0px')};
  z-index: 100;
  height: 20px;
  color: ${({ theme }) => theme.colors.accent};

  ${media.lessThan('medium')`
    color: ${({ theme }) => theme.colors.accent};
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  filter: grayscale(100%);

  :hover {
    filter: none;
  }

  ${media.lessThan('medium')`
    filter: none;  
    height: 270px;
  `}
`;

const ItemsRow = ({ items, row }) => (
  <Row>
    {items.map(({ id, data }, i) => {
      const order = row * 2 + (i + 1);
      const containsOne = order.toString().match('1');

      return (
        <ImageContainer to={`/project/${id}`}>
          <Number containsOne={containsOne !== null}>
            {order < 10 ? `0${order}` : order}
          </Number>
          <Image src={data.project_picture.url} />
        </ImageContainer>
      );
    })}
  </Row>
);

ItemsRow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }).isRequired,
        project_picture: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      order: PropTypes.number.isRequired,
    })
  ).isRequired,
  row: PropTypes.number.isRequired,
};

export default ItemsRow;
