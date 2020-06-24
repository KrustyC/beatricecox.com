import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import Links from './Links';
import Burger from './Burger';

const Grid = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: grid;
  grid-template-columns: auto 728px auto;
  grid-template-rows: ${({ middleRow }) =>
    middleRow ? `150px ${middleRow} auto` : '150px auto'};
  color: #000;

  ${media.lessThan('medium')`
    grid-template-columns: 0 100vw 0;
    grid-template-rows: ${({ middleRow }) =>
      middleRow ? `80px ${middleRow} auto` : '80px auto'};
  `}
`;

const Header = styled.div`
  grid-column: 2;
  grid-row: 1 / 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
    text-transform: uppercase;

    color: #000000;
  }

  h5 {
    font-family: '${({ theme }) => theme.fonts.main}' !important;
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    margin-top: 7px;
  }

  ${media.lessThan('medium')`
    grid-column: 1/ end;
    padding: 0 .5rem;
    font-size: 30px;

    h1 {
      font-size: 30px; 
      }

    h5 {
      font-size: 16px;
    }
  `}
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

  ${media.lessThan('medium')`
    display: none;
  `}
`;

const GeneralLayout = ({ title, description, middleRow, children }) => (
  <Grid middleRow={middleRow}>
    <Header>
      <div>
        <h1>{title}</h1>
        {description && <h5>{description}</h5>}
      </div>
      <Burger />
    </Header>
    <RightSide>
      <Links />
    </RightSide>
    {children}
  </Grid>
);

GeneralLayout.propTypes = {
  middleRow: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

GeneralLayout.defaultProps = {
  description: null,
  middleRow: null,
};

export default GeneralLayout;
