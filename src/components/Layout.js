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
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
    text-transform: uppercase;
  }

  ${media.lessThan('medium')`
    grid-column: 1/ end;
    padding: 0 .5em;
    font-size: 30px;
  `}

  h5 {
    font-family: 'Montserrat' !important;
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    margin-top: 7px;
  }
`;

const LeftSide = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / end;
  display: flex;
  padding: ${({ theme }) => theme.margin.md};
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  * {
    font-family: 'Montserrat' !important;
  }
  span {
    font-size: 14px;
    writing-mode: tb-rl;
    transform: rotate(180deg);
    max-width: 100%;
    a {
      text-decoration: none;
    }
  }

  ${media.lessThan('medium')`
    display: none;
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

const GeneralLayout = ({
  title,
  description,
  middleRow,
  showCredits,
  children,
}) => (
  <Grid middleRow={middleRow}>
    <Header>
      <div>
        <h1>{title}</h1>
        {description && <h5>{description}</h5>}
      </div>
      <Burger />
    </Header>
    {showCredits && (
      <LeftSide>
        <span>
          © 2019 Design by Beatrice Cox and{' '}
          <a
            href="https://dcrestini.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Davide Crestini
          </a>
        </span>
      </LeftSide>
    )}
    <RightSide>
      <Links />
    </RightSide>
    {children}
  </Grid>
);

GeneralLayout.propTypes = {
  middleRow: PropTypes.string,
  description: PropTypes.string,
  showCredits: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

GeneralLayout.defaultProps = {
  description: null,
  middleRow: null,
  showCredits: true,
};

export default GeneralLayout;
