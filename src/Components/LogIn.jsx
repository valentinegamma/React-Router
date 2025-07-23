import React from 'react'
import { useSearchParams, Form, redirect, Link, useActionData, useNavigation} from 'react-router-dom'
import { logUser } from './Auth'
import { loader } from './ApiData'

export async function action({request}) {
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')
  // console.log(email, password)

  const logged = await logUser(email, password)
  loader(logged)
 
  if (logged) {
    return redirect('/host')
    }

    if(!logged) {
      return   "User not found"
    }


}
  
function LogIn() {
  const [searchParams] = useSearchParams()
  const data = searchParams.get('message')
  const actionData = useActionData()
  const {state} = useNavigation()
  // console.log(state)

  function logOut() {
    localStorage.removeItem('logged')
  }


  return (
    <div className='log-in'>
      <h2 style={{color: 'red'}}>{data}</h2>
      <h1>Sign in to your account</h1>
      {state !== "submitting" 
      ? <h3 style={{color: 'red'}}>{actionData}</h3>
      : <h3 style={{color: 'green'}}>please wait...</h3>}
      <Form method= 'post'replace>
        <div className='log-input'>
          <input type="email" name
          = 'email'placeholder='Email address'/>
          <input type="password" name
          = 'password'placeholder='Password'/>
        </div>
        <button disabled={state === "submitting"}>{state === "submitting" ? "logging in.." : "Sign in"}</button>
      </Form>
      <h3>Don’t have an account? <span>Create one now</span></h3>
      <button onClick={logOut} ><Link to='/'>log out</Link></button>
    </div>
  )
}

export default LogIn