import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;

  height: 400px;

  margin: ${({ theme }) => theme.margin.md} 0;
`;

export const Left = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20%;
  min-width: 100px;
  height: 100%;
  cursor: pointer;
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
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;

  justify-content: center;

  &.leave {
    transform: translateX(0);
  }

  &.enter-active.enter-next,
  &.enter-active.enter-prev {
    transform: translateX(0);
    transition: transform 500ms linear;
  }

  &.enter-next {
    transform: translateX(100%);
  }

  &.enter-prev {
    transform: translateX(-100%);
    transition: transform 500ms linear;
  }

  &.leave-active-next {
    transform: translateX(-100%);
    transition: transform 500ms linear;
  }

  &.leave.leave-active-prev {
    transform: translateX(100%);
    transition: transform 500ms linear;
  }

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
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0;
  padding-left: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
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

export const HistoryButton = styled.button`
  border: none;
  outline: none;
  margin: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ active }) => (active ? 'red' : 'white')};
  transition: background-color 300ms ease;
`;
