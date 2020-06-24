import styled from 'styled-components';
import media from 'styled-media-query';

export const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ${media.lessThan('medium')`
    grid-column: 1 / end;
    padding: 0 .5em;
    padding-bottom: 1rem;

    * {
      font-size: 15px;
    }
  `}
`;

export const SkillContainer = styled.div`
  text-align: left;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1.45rem;

  * {
    font-family: '${({ theme }) => theme.fonts.main}' !important;
    font-weight: ${({ theme }) => theme.fontSize};
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: -10px;
`;

export const Chip = styled.div`
  padding: 0 0.5rem;
  margin-top: 10px;
  background: #333;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;

  :not(:last-of-type) {
    margin-right: 10px;
  }
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
    font-family: '${({ theme }) => theme.fonts.main}' !important;
    font-weight: ${({ theme }) => theme.fontSize};
  }
`;

export const TextTitle = styled.span`
  margin-bottom: 3px;
  font-weight: bold;
  /* text-transform: uppercase; */
`;
