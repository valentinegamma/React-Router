import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  console.log(error)
  return (
    <div style={{
      height: '70vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#4D4D4D'
    }}>
      <h1>{error.message}</h1>
    </div>
  )
}

export default Error