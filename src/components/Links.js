import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const Ul = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  text-transform: uppercase;
  font-size: 24px;
`;

const lineThrough = css`
  ::before {
    content: '';
    border-bottom: 6px solid ${({ theme }) => theme.colors.accent};
    width: 100%;
    position: absolute;
    right: 0;
    top: 40%;
  }
`;

const Li = styled.li`
  a {
    color: ${({ overlay }) => (overlay ? '#FFF' : '#000')};
    position: relative;
    display: inline-block;
    text-decoration: none;

    &:visited,
    &:focus {
      color: inherit;
    }
    &:hover {
      color: inherit;
      ${lineThrough};
    }

    ${({ overlay }) =>
      !overlay &&
      css`
        &.active {
          ${lineThrough};
        }
      `}
  }
`;

const links = [
  {
    label: 'About',
    to: '/',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Contacts',
    to: '/contacts',
  },
];

const Links = ({ overlay }) => (
  <Ul>
    {links.map(({ label, to }) => (
      <Li key={label} overlay={overlay}>
        <Link activeClassName="active" to={to}>
          {label}
        </Link>
      </Li>
    ))}
  </Ul>
);

Links.propTypes = {
  overlay: PropTypes.bool,
};

Links.defaultProps = {
  overlay: false,
};

export default Links;
