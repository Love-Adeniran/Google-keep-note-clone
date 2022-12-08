import React from 'react'
import { Outlet } from 'react-router'
import SideNav from './SideNav'

const Bars = () => {
  return (
    <>
    <div className='row p-0'>
        <SideNav/> <Outlet/>
    </div>
    </>
  )
}

export default Bars