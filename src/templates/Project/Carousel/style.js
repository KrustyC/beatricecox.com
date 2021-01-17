import styled from 'styled-components';
import media from 'styled-media-query';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  margin: ${({ theme }) => theme.margin.md} 0;

  ${media.lessThan('medium')`
    height: 400px;
  `}
`;

export const Left = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  min-width: 100px;
  height: 100%;
  cursor: pointer;
  z-index: 1;
  background: transparent;
`;

export const Right = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20%;
  min-width: 100px;
  height: 100%;
  cursor: pointer;
  background: transparent;
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  z-index: 1;
  display: flex;
  align-items: center;

  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: 0;
  }
`;

export const HistoryContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const HistoryButton = styled.div`
  border: none;
  outline: none;
  margin: 0;
  width: 8px;
  height: 8px;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border-radius: 100px;
  cursor: pointer;
  background: ${({ theme, active }) =>
    active ? theme.colors.accent : '#E8E8E8'};

  transition: background-color 300ms ease;
`;
