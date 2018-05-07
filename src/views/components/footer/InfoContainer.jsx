import styled from 'styled-components'

const InfoContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.darkGreyColor};
  color: ${({ theme }) => theme.lightGreyColor};

  ul {
    margin-top: -10px;
    list-style-type: none;
    margin-left: 0px;
    li {
      line-height: 30px;
      font-size: 15px;
    }
  }
`

export default InfoContainer
