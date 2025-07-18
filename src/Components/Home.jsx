import React from 'react'
import homeImg from '../assets/home-img.jpg'

function Home() {
  return (
    <main>
      <div className='Home-container'>
        <img 
          src={homeImg} 
          alt="homepage img"
          className='home-img' />
          <div className='home-text'>
            <h2>
              You got the travel plans, we
              <br />
              got the travel vans.
            </h2>
            <p>
              Add adventure to your life by joining the #vanlife movement.
              <br /> 
              Rent the perfect van to make your perfect road trip.
            </p>
            <div className='find-your-van'>
              <span>Find your van</span>
            </div>
          </div>
      </div>
    </main>
  )
}

export default Home