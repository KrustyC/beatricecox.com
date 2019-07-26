import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import Links from './Links';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 728px auto;
  grid-template-rows: ${({ rows }) => rows};
  color: #000;

  /* ${media.greaterThan('huge')`
    grid-template-columns: 1fr 3fr 1fr;
  `}

  ${media.greaterThan('huge')`
    grid-template-columns: 1fr 2fr 1fr;
  `} */
`;

const Header = styled.div`
  grid-column: 2;
  grid-row: 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
    text-transform: uppercase;
  }

  h5 {
    font-family: 'Montserrat' !important;
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    margin-top: 7px;
  }
`;

const RightSide = styled.div`
  grid-column: 3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  top: 150px;
  right: 0;
  height: calc(100vh - 150px);
`;

const GeneralLayout = ({ title, description, rows, children }) => (
  <Grid rows={rows}>
    <Header>
      <h1>{title}</h1>
      {description && <h5>{description}</h5>}
    </Header>
    <RightSide>
      <Links />
    </RightSide>
    {children}
  </Grid>
);

GeneralLayout.propTypes = {
  rows: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

GeneralLayout.defaultProps = {
  description: null,
  rows: '150px auto',
};

export default GeneralLayout;
