import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
  text-decoration: none;
  background-image: url('${({ url }) => url}');
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  padding-top: 100px;
  height: 450px;
  /* width: 450px; */

  position: relative;
  :first-of-type {
    span {
      padding-right: 4px;
      right: 3px !important;
    }
  }
`;

const Number = styled.span`
  font-size: 65px;
  transform: rotate(-90deg);
  position: absolute;
  top: 100;
  right: -1px;
  color: #000;
`;

const Item = ({ id, data, order }) => (
  <Wrapper to={`/project/${id}`} url={data.project_picture.url}>
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
