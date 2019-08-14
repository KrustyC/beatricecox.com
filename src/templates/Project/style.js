import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* padding-bottom: 3rem; */

  ${media.lessThan('medium')`
    padding: 0 .5em;
    padding-bottom: 1rem;
  `}
`;

export const Bottom = styled.div`
  grid-column: 2 / 3;
  grid-row: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.margin.md} 0;

  ${media.lessThan('medium')`
    padding: 0 .5em;
    padding-bottom: 1rem;
  `}
`;

export const Text = styled.div`
  text-align: left;
  width: 100%;
  margin: 0 auto;

  * {
    font-family: 'Montserrat' !important;
  }
`;
