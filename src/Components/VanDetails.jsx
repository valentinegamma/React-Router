import React from 'react'
import {useParams} from 'react-router-dom'
import vans from '../Server2.js'
import {Link} from 'react-router-dom'

function VanDetails() {
  const params = useParams()


  const [van] = vans.filter(van =>{
    if (van.id === params.id) {
      return (
        van
      )
    }
  })
  // console.log(van)

  return (
    <section className='van-details-page'>
        <Link to = '/vans'>← Back to all vans</Link>
        <img src={van.imageUrl} alt="image" />
        <button>{van.type}</button>
        <h1>{van.name}</h1>
        <h2>${van.price} <span>/day</span></h2>
        <p>{van.description}</p>
        <button className='rent-van'>Rent this van</button>
      </section>
  )
}

export default VanDetails