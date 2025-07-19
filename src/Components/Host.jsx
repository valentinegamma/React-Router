import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Host() {
  const styles = {
    color:'#161616',
    textDecoration: 'underline',
    fontWeight: 'bold'
  }

  return (
    <>
      <nav className='nav-host'>
        <NavLink to='/host'style={({isActive}) =>  isActive ? styles : null} end>Dashboard</NavLink>
        <NavLink to='income'style={({isActive}) =>isActive ? styles : null}>income</NavLink>
        <NavLink to='hostvans'style={({isActive}) =>isActive ? styles : null}>Vans</NavLink>
        <NavLink to='reviews'style={({isActive}) =>isActive ? styles : null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Host