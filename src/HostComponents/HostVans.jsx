import React from 'react'
import Server2 from '../Server2'
import { Link } from 'react-router-dom'

function HostVans() {
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