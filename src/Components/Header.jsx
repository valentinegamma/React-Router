import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const styles = {
    color:'#161616',
    textDecoration: 'underline',
    fontWeight: 'bold'

  }
  return (
    <header>
      <NavLink to='/'><h1>#VANLIFE</h1></NavLink>
        <nav>
          <NavLink to='/host'style={({isActive}) =>isActive ? styles : null}>Host</NavLink>
          <NavLink to='/about'style={({isActive}) => isActive ? styles : null}>About</NavLink>
          <NavLink to='/vans'style={({isActive}) => isActive ? styles : null}>Vans</NavLink>
        </nav>
    </header>
  )
}

export default Header