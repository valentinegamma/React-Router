import React from 'react'
import Server2 from '../Server2'
import img from '../assets/home-img.jpg'

function HostVans() {
    const vans = Server2.filter(van => van.hostID === 1234)
    console.log(vans)
    const rendervans = vans.map(vans => 
     
      <div className='host-van-flex'>
        <img src={img} alt="Van Image" />
        <h1>
          {vans.name}
          <br />
          <span>
            ${vans.price}/day
          </span>
        </h1>
      </div>
    )

  return (
    <div className='host-vans-container'>
      <h1>Your listed vans</h1>
      {rendervans}
    </div>

  )
}

export default HostVans