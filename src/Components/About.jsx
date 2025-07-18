import React from 'react'
import aboutImg from '../assets/about-img.png'

function About() {
  return (
    <section>
      <div className='about-img-container'>
        <img 
          className='about-img'
          src={aboutImg} 
          alt="about Image" 
        />
      </div>
      <div className='about-container'>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <br />(Hitch costs extra 😉)
        </p>
        <p>
           Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>

        <div className='about-card'>
          <p>
            Your destination is waiting. 
            <br />
            Your van is ready.
          </p>
          <button>Explore our vans</button>
        </div>
      </div>
    </section>
  )
}

export default About