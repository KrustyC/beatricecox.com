import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
  text-decoration: none;
  background-image: url('${({ url }) => url}');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 100px;
  padding-right: 10px;
  height: 500px;
`;
const Number = styled.span`
  font-size: 50px;
  transform: rotate(-90deg);
  color: #000;
`;

const Item = ({ id, data, order }) => (
  <Wrapper to={`/portfolio/${id}`} url={data.project_picture.url}>
    <Number>{order < 10 ? `0${order}` : order}</Number>
  </Wrapper>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    title: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    project_description: PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired,
    project_picture: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  order: PropTypes.number.isRequired,
};

export default Item;
