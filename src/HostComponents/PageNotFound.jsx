import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <h1>Error 404</h1>
      <h1>
        Sorry, the page you were
        <br />
        looking for was not found.
    </h1>
    <Link to='/'>Return to home</Link>
    </div>
  )
}

export default PageNotFound