import React from 'react'
import { Link, useParams, Outlet, useLoaderData } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function HostVanDetails() {

  const vans = useLoaderData()

  const param = useParams()
  const [ van ] = vans.filter(van => param.id === van.id  )

  const styles = {
    color:'#161616',
    textDecoration: 'underline',
    fontWeight: 'bold'
  }
  return (
    <>
      <Link to='..' relative= 'path' className='Host-van-details-link'> ← Back to all vans</Link>
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
          <NavLink to={`/host/hostvans/${van.id}`}style={({isActive}) =>  isActive ? styles : null} end>Details</NavLink>
          <NavLink to='pricing'style={({isActive}) =>  isActive ? styles : null}>Pricing</NavLink>
          <NavLink to='photos'style={({isActive}) =>  isActive ? styles : null}>Photos</NavLink>
        </nav>
      </section>

      <Outlet context={van}/>
    </>
  )
}

export default HostVanDetails