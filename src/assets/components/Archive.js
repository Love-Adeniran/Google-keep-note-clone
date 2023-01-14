import React from 'react'
import { useEffect } from 'react'

const Archive = () => {
    
   useEffect(() => {
    //  localStorage.getItem
    if (localStorage.archive) {
        JSON.parse(localStorage.archive)
      }
   }, [])
   
   
  return (
    <div className='col'>Archive</div>
  )
}

export default Archive