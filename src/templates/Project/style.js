import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 150px auto;

  ${breakpoint('xl')`
    grid-template-columns: 1fr 2fr 1fr;
  `}
`;

export const Header = styled.div`
  text-transform: uppercase;
  grid-column: 2;
  grid-row-start: 1 / 1;

  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-weight: 100;
    font-size: 35px;
  }
`;

export const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const MainSide = styled.div`
  grid-column: 3;
  grid-row: 2;
  display: flex;
  justify-content: center;
  position: sticky;
  position: sticky;
  top: 0;
  top: 150px;
  right: 0;
  height: 100vh;
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  img {
    width: 100%;
  }
`;

export const Text = styled.div`
  text-align: left;
  width: 100%;
  width: 50vw;
  margin: 10px auto;
  * {
    font-family: 'Arial' !important;
  }
`;
