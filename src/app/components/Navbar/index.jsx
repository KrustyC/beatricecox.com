import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  flex-direction: row;
  padding-right: 50px;
  align-items: space-between;
  justify-content: space-between;
  background: transparent;
  min-height: ${({ theme }) => theme.navbar.height};
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.navbar.height};
  flex-direction: row;
`

const Text = styled.span`
  margin-left: 50px;
  font-size: 20px;
  font-weight: bold;
  min-height: ${({ theme }) => theme.navbar.height};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: lowercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ theme }) => theme.navbar.height};
  min-width: 100px;
`

const Nav = () => (
  <Container>
    <Div>
      <Text>Beatrice Duguid Cox</Text>
    </Div>
    <Div>
      <StyledLink to="/">About</StyledLink>
      <StyledLink to="/">Projects</StyledLink>
      <StyledLink to="/">Contact</StyledLink>
    </Div>
  </Container>
)

export default Nav
