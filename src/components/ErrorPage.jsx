import React from 'react'

const Error = ({error}) => {
 
  return (
    <div>
    <h1 className='text-pink-700 p-5'>{error?.data?.status_message}</h1>
  </div>
  )
}

export default Error