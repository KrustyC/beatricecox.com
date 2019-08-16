import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

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
    label: 'Extras',
    to: '/extras',
  },
  {
    label: 'Contacts',
    to: '/contacts',
  },
];

const Div = styled.div`
  ${media.greaterThan('medium')`
    display: none;
  `}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  height: 100vh;
  width: 100vw;
  z-index: 100000;
`;

const Button = styled.button`
  border: none;
  background: transparent;
`;

const Bar = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${({ overlay }) => (overlay ? '#FFF' : '#333')};
  margin: 6px 0;
  transition: 0.4s;
`;

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  margin-left: 0;
  padding-left: 0;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  padding: 3rem 0;
`;

const Li = styled.li`
  color: white;
  a {
    text-decoration: none;

    &:active,
    &:visited,
    &:hover,
    &:focus {
      color: white !important;
    }
  }
`;

const Burger = ({ overlay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen(!isOpen);

  return (
    <Div>
      <Button type="button" onClick={onToggle}>
        <Bar overlay={overlay} />
        <Bar overlay={overlay} />
        <Bar overlay={overlay} />
      </Button>
      {isOpen && (
        <Overlay>
          <Ul>
            {links.map(({ label, to }) => (
              <Li key={to}>
                <Link activeClassName="active" to={to}>
                  {label}
                </Link>
              </Li>
            ))}
          </Ul>
        </Overlay>
      )}
    </Div>
  );
};

Burger.propTypes = {
  overlay: PropTypes.bool,
};

Burger.defaultProps = {
  overlay: false,
};

export default Burger;
