import React from 'react'
import { Outlet } from 'react-router'
import SideNav from './SideNav'

const Bars = (title,setTitle) => {
  return (
    <>
    <div className='row p-0 bg-dark'>
        <SideNav title={title}/> <Outlet/>
    </div>
    </>
  )
}

export default Bars