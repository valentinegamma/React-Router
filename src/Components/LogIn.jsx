import React from 'react'
import { useSearchParams } from 'react-router-dom'

function LogIn() {

  const [searchParams] = useSearchParams()

  const data = searchParams.get('message')
  return (
    <div className='log-in'>
      <h2 style={{color: 'red'}}>{data}</h2>
      <h1>Sign in to your account</h1>
      <div>
        <div className='log-input'>
          <input type="email" placeholder='Email address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Sign in</button>
      </div>
      <h3>Don’t have an account? <span>Create one now</span></h3>
    </div>
  )
}

export default LogIn