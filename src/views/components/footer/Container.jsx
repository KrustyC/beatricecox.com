import styled from 'styled-components'

const FooterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  background:  ${({ theme }) => theme.darkGreyColor};
  padding: 41px 300px;
`

export default FooterContainer
