import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
        <li><NavLink to="/">Forside</NavLink></li>
        <li><NavLink to="/about">Om os</NavLink></li>
    </ul>
  )
}

export default Navbar