import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled(Link)``;

const Item = ({ id, data }) => (
  <Wrapper to={`/portfolio/${id}`}>
    <h1>{data.title.text}</h1>
    <p>{data.project_description.text}</p>
    <p>{data.project_description.text}</p>
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
};

export default Item;
