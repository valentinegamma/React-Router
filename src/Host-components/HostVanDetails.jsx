import React from 'react'
import vans from '../Server2'
import { Link, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function HostVanDetails() {

  const param = useParams()
  const [ van ] = vans.filter(van => param.id === van.id  )
  console.log(van)
  return (
    <>
      <Link to='/host/hostvans' className='Host-van-details-link'> ← Back to all vans</Link>
      <section className='hostvan-section'>
        <div className='host-van-details-grid'>
          <img src={van.imageUrl} alt="Van Image" />
          <div className='host-van-details-flex'>
            <button className='host-van-details-button'>
              {van.type}
            </button>
            <h1 className='host-van-details-h1'>
              {van.name}
              <br />
                ${van.price}
              <span>/day</span>
            </h1>
          </div>
        </div>
        <nav className='hostvan-details-nav'>
          <NavLink>Details</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Photos</NavLink>
        </nav>
      </section>
    </>
  )
}

export default HostVanDetails