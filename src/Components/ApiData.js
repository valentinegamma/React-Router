import { redirect , Navigate} from 'react-router-dom'
import vans from '../Server2'

export function loader(logged) {
  if (logged !== undefined) {
    localStorage.setItem('logged', logged)
  }
  
  const loggedValue = localStorage.getItem('logged')
  const isLoggedIn = loggedValue ? loggedValue : false

  if (!isLoggedIn) {
    throw redirect('/log?message=you must log in first')}

  try {
    return vans
  } catch {
    throw {
      message: 'Page data not found',
    }
  }
}
