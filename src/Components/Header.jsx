import React from 'react'
import { NavLink } from 'react-router-dom'
import logIcon from '../assets/logIcon.svg'

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
          <NavLink to='/log'style={({isActive}) => isActive ? styles : null}>
            <img src={logIcon} alt="Log In"  width= {18} height={18}/>
          </NavLink>
        </nav>
    </header>
  )
}

export default Header