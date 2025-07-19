import React from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Vans from './Components/Vans'
import Host from './Components/Host'
import Dashboard from './HostComponents/Dashboard.js'
import Income from './HostComponents/Income.js'
import Reviews from './HostComponents/Reviews.jsx'
import HostVans from './HostComponents/HostVans.js'
import HostVanDetails from './HostComponents/HostVanDetails.jsx';
import Details from './HostComponents/Details.js';
import Pricing from './HostComponents/Pricing.js';
import Photos from './HostComponents/Photos.js';
import VanDetails from './Components/VanDetails'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id/' element={<VanDetails />} />
            <Route path='/host' element={<Host />} > 
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='hostvans' element={<HostVans />} />
              <Route path='reviews' element={<Reviews />} /> 
              <Route path='hostvans/:id' element={<HostVanDetails />} >
                <Route index element= {<Details />} />
                <Route path='pricing' element= {<Pricing />} />
                <Route path='photos' element= {<Photos />} />
              </Route>
            </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App