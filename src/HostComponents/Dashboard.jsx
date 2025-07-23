import React from 'react'
import star from '../assets/Star.svg'
import {useLoaderData } from 'react-router-dom'


function Dashboard() {
  const Server2 = useLoaderData()
  const vans = Server2.filter(van => van.hostID === 1234)
    const rendervans = vans.map(vans => 
      <div className='host-van-flex' key={vans.id}>
        <img src={vans.imageUrl} alt="Van Image" />
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
    <div>
      <div className='dashboard-1'>
        <h1>Welcome!</h1>
        <div>
          <h3>Income last 30 days</h3>
          <h3>Details</h3>
        </div>
        <h1 style={{fontSize: '4.8rem'}}>$2,260</h1>
      </div> 

      <div className='review-score'>
        <div>
          <h1>Review score</h1>
          <div>
            <img src={star} alt="" />
            <h3>5.0/5</h3>
          </div>
        </div>
        <h3>Details</h3>
      </div>
    {rendervans}
    </div>
  )
}

export default Dashboard