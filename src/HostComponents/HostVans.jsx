import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function HostVans() {

  const Server2 = useLoaderData()

  const vans = Server2.filter(van => van.hostID === 1234)
  const rendervans = vans.map(vans => 
    <Link to={vans.id}>
    <div className='host-van-flex'>
      <img src={vans.imageUrl} alt="Van Image" />
      <h1>
        {vans.name}
        <br />
        <span>
          ${vans.price}/day
        </span>
      </h1>
    </div>
    </Link>
  )

  return (
    <div className='host-vans-container'>
      <h1>Your listed vans</h1>
      {rendervans}
    </div>

  )
}

export default HostVans