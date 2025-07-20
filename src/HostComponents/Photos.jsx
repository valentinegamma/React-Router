import React from 'react'
import { useOutletContext } from 'react-router-dom'


function Photos() {
  const van = useOutletContext()

  return (
    <div className='host-van-details-photos'>
      <img src={van.imageUrl} / >
    </div>

  )
}

export default Photos