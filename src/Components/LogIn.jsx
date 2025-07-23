import React from 'react'
import { useSearchParams, Form, redirect, Link} from 'react-router-dom'
import { logUser } from './Auth'
import { loader } from './ApiData'

export async function action({request}) {
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')
  console.log(email, password)
  const logged = logUser(email, password)
  loader(logged)

  // Get redirectTo from the request URL
  // const url = new URL(request.url)
  // console.log(url)
  // const redirectTo = url.searchParams.get('redirectTo')

  if (logged) {
    return redirect('/host')
  }

}
function LogIn() {
  const [searchParams] = useSearchParams()
  const data = searchParams.get('message')

  function logOut() {
    localStorage.removeItem('logged')
  }


  return (
    <div className='log-in'>
      <h2 style={{color: 'red'}}>{data}</h2>
      <h1>Sign in to your account</h1>
      <Form method= 'post'>
        <div className='log-input'>
          <input type="email" name
          = 'email'placeholder='Email address'/>
          <input type="password" name
          = 'password'placeholder='Password'/>
        </div>
        <button>Sign in</button>
      </Form>
      <h3>Don’t have an account? <span>Create one now</span></h3>
      <button onClick={logOut}><Link to='/'>log out</Link></button>
    </div>
  )
}

export default LogIn