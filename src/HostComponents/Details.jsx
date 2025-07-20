import React from 'react'
import { useOutletContext } from 'react-router-dom'


function Details() {
  const van = useOutletContext()
  console.log(van)
  return (
    <div className='host-van-details-data'>
      <h1>Name: <span>{van.name}</span></h1>
      <h1>Category: <span>{van.type}</span></h1>
      <h1>Description: <span>{van.description}</span></h1>
      <h1>Visibility: <span>Public</span></h1>

    </div>
  )
}

export default Details