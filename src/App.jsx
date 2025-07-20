import React from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Vans from './Components/Vans'
import Host from './Components/Host'
import Dashboard from './HostComponents/Dashboard'
import Income from './HostComponents/Income'
import Reviews from './HostComponents/Reviews.jsx'
import HostVans from './HostComponents/HostVans'
import HostVanDetails from './HostComponents/HostVanDetails.jsx';
import Details from './HostComponents/Details';
import Pricing from './HostComponents/Pricing';
import Photos from './HostComponents/Photos';
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