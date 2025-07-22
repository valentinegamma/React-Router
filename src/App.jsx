import React from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import LogIn from './Components/LogIn.jsx';
import { loader as vansLoder } from './Components/ApiData.js';
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
import Error from './HostComponents/Error.jsx';
import PageNotFound from './HostComponents/PageNotFound.jsx';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Components/Layout'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='log' element={<LogIn />} />
      <Route path='vans' element={<Vans />} loader={vansLoder}errorElement={<Error />}/>
      <Route path='vans/:id/' element={<VanDetails />}  />
      <Route path='/host' element={<Host />} > 
        <Route index element={<Dashboard />} loader={() => vansLoder(false)}/>
        <Route path='income' element={<Income />} loader={() => vansLoder(false)}/>
        <Route path='hostvans' element={<HostVans /> }loader={() => vansLoder(false)} errorElement={<Error />}/>
        <Route path='reviews' element={<Reviews />} loader={() => vansLoder(false)}/> 
        <Route path='hostvans/:id' element={<HostVanDetails />} loader={() => vansLoder(false)} >
          <Route index element= {<Details />} />
          <Route path='pricing' element= {<Pricing />} />
          <Route path='photos' element= {<Photos />} />
        </Route>
      </Route>
      <Route path='*' element = {<PageNotFound/>}/>
    </Route>
  ))
  return (
    <RouterProvider router =  {router} />
  )
}

export default App