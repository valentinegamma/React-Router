import React from 'react'
import { useOutletContext } from 'react-router-dom'


function Pricing() {
  const van = useOutletContext()

  return (
    <div className='host-van-pricing'>
      <h1>${van.price}.00<span>/day</span></h1>
    </div>

  )
}

export default Pricing