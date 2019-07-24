import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Links from './Links';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: ${({ rows }) => rows};

  ${breakpoint('xl')`
    grid-template-columns: 1fr 2fr 1fr;
  `}
`;

const Header = styled.div`
  text-transform: uppercase;
  grid-column: 2;
  grid-row: 1 / 1;

  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
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

const GeneralLayout = ({ title, rows, children }) => (
  <Grid rows={rows}>
    <Header>
      <h1>{title}</h1>
    </Header>
    <RightSide>
      <Links />
    </RightSide>
    {children}
  </Grid>
);

GeneralLayout.propTypes = {
  rows: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

GeneralLayout.defaultProps = {
  rows: '150px auto',
};

export default GeneralLayout;
