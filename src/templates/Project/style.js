import styled from 'styled-components';

export const Main = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 3rem;
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
  margin: 10px auto;
`;
