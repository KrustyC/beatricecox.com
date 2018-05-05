import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    Navbar
    <Link to="/">Brand</Link>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
)

export default Navbar
