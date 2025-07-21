import vans from '../Server2'

export function loader() {
 try{
   return vans
  } catch{
    throw({
      message: 'Page data not found',
    })
  }
}
