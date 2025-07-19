// import { useEffect, useState} from 'react'
import vans from '../Server2'
import { Link } from 'react-router-dom';
import img from '../assets/about-img.png'

function Vans() {

  // const [vans, setVans] = useState([vans]) 
  // useEffect(() =>{
  //   fetch("/api/vans")
  //     .then(res => res.json())
  //     .then(data => setVans(data.vans))
  // }, [])

  console.log(vans);
  
  function VansTemp(props) {
    return (
      <Link to={`/vans/${props.id}`}>
        <div className="van-flex">
        <div className="van-img-container">
          <img src={img} alt='img' />
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

  const renderVans = vans.map(data =>
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
        <button>Simple</button>
        <button>Luxury</button>
        <button>Rugged</button>
        <button className='clear-filters'>Clear filters</button>
      </div>
      <div className="vans-container-grid">
        {renderVans}
      </div>
    </section>
  )
}

export default Vans