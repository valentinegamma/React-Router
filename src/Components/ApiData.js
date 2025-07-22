import { redirect } from 'react-router-dom'
import vans from '../Server2'

export function loader(logStatus= true) {
const isLoggedIn = true

  if (!isLoggedIn) {
    throw redirect('/log?message=you must log in first')
  }


 try{
   return vans
  } catch{
    throw({
      message: 'Page data not found',
    })
  }
}
