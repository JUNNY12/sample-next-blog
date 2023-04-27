import React from 'react'

const Container = ({children}) => {
  return (
    <div className='p-6 m-6 tabletS:p-3 tabletS:m-3'>{children}</div>
  )
}

export default Container