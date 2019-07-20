import styled from 'styled-components';

const A = styled.a`
  text-transform: uppercase;
  color: ${({ overlay }) => (overlay ? '#FFF' : '#000')};
  position: relative;
  display: inline-block;
  text-decoration: none;

  &:visited,
  &:focus {
    color: inherit;
  }
  &:hover {
    color: inherit;
    ::before {
      content: '';
      border-bottom: 2px solid red;
      width: 100%;
      position: absolute;
      right: 0;
      top: 50%;
    }
  }
`;

export default A;
