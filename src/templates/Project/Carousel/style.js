import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
`;

export const Slide = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;

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
    height: 100%;
  }
`;

export const HistoryContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 10px;
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 20px;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const HistoryButton = styled.button`
  border: none;
  outline: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ active }) => (active ? 'red' : 'white')};
  transition: background-color 300ms ease;
`;
