import React from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Vans from './Components/Vans'
import Host from './Components/Host'
import Dashboard from './Host-components/Dashboard'
import Income from './Host-components/Income'
import Reviews from './Host-components/Reviews'
import HostVans from './Host-components/HostVans'
import HostVanDetails from './Host-components/HostVandetails' 

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
              <Route path='hostvans/:id' element={<HostVanDetails />} /> 
            </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App