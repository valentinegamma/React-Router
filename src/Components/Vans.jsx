// import { useEffect, useState} from 'react'
import vans from '../Server2'
import { Link, useSearchParams} from 'react-router-dom';

function Vans() {

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
  console.log(typeFilter)
  console.log(searchParams)



  function VansTemp(props) {
    return (
      <Link to={props.id}  state={{search: searchParams.toString()}}>
        <div className="van-flex">
        <div className="van-img-container">
          <img src={props.img} alt='img' />
        </div>
        <div className='van-details'>
          <h2>{props.name}</h2>
          <h2>${props.price} <br /> <span>/day</span></h2>
        </div>
      <button>{props.type}</button>
    </div>
      </Link>
    )
  }

  const filteredVans = typeFilter ? 
    vans.filter(van => van.type === typeFilter)
    : vans
  const renderVans = filteredVans.map(data =>
    <VansTemp
      key = {data.id}
      id = {data.id}
      name = {data.name}
      price = {data.price}
      img = {data.imageUrl}
      type = {data.type}
    />
  )
  return (
    <section className='vans-container'>
      <h1>Explore our van options</h1>
      <div className="filter-btns">
        <button onClick={() =>setSearchParams({type: "simple"})}>Simple</button>
        <button onClick={() =>setSearchParams({type: "luxury"})}>Luxury</button>
        <button onClick={() =>setSearchParams({type: "rugged"})}>Rugged</button>
        {typeFilter && <button className='clear-filters'onClick={() =>setSearchParams({})}>Clear filters</button>}
      </div>
      <div className="vans-container-grid">
        {renderVans}
      </div>
    </section>
  )
}

export default Vans