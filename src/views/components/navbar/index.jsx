import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGreyColor};
  display: flex;
  justify-content: space-around;
`

const Menu = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.i`
  font-size: 40px;
`

const Navbar = () => (
  <Nav className="navbar">
    <Menu>
      <Icon className="icon icon-time" />
    </Menu>
    <Menu>
      <Link to="/" className="btn btn-link">Home</Link>
      <Link to="/about" className="btn btn-link">About</Link>
      <Link to="/curriculum" className="btn btn-link">CV</Link>
      <Link to="/portfolio" className="btn btn-link">Portfolio</Link>
    </Menu>
  </Nav>
)

export default Navbar
