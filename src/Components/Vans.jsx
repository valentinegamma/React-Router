import { useEffect, useState} from 'react'
import img from '../assets/home-img.jpg'

function Vans() {

  const [data, setData] = useState([]) 
  useEffect(() =>{
    fetch("/api/vans")
      .then((res) => res.json())
      .then((json) => {
        setData(json.vans)
      })
  }, [])

  console.log(data);
  
  function VansTemp(props) {
    return (
      <div className="van-flex">
      <div className="van-img-container">
        <img src={props.img} alt='img' />
      </div>
      <div className='van-details'>
        <h2>{props.name}</h2>
        <h2>{props.price} <br /> <span>/day</span></h2>
      </div>
      <button>{props.type}</button>
    </div>
    )
  }

  const renderVans = data.map(data =>
    <VansTemp
      key = {data.id}
      name = {data.name}
      price = {data.price}
      img = {data.imgUrl}
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

      {renderVans}
    </section>
  )
}

export default Vans