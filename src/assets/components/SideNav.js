import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <>
      <div className="container col-3 bg-dark text-light ">
        <div className="container pt-2 m-0 fill p-0 ps-1 ">
          <div className="px-2 border py-0 rounded-end">
            <Link to="/" className="text-decoration-none text-light ">
              <div className="  my-2  px-3 py-2">
                <p className="d-inline">Notes</p>
              </div>
            </Link>
          </div>
          <div className='px-2 border py-0 rounded-end my-3'>
            <Link to="/reminder" className="text-decoration-none text-light ">
              <div className=" my-2 ">
                <p className="d-inline">Reminder</p>
              </div>
            </Link>
          </div>
          <div className='px-2 border py-0 rounded-end my-3'>
            <Link to="/Edit" className="text-decoration-none text-light">
              <div className="  my-2">
                <p className="d-inline">Edit Labels</p>
              </div>
            </Link>
          </div>
          <div className='px-2 border py-0 rounded-end my-3'>
            <Link to="/archive" className="text-decoration-none text-light">
              <div className=" my-2">
                <p className="d-inline">Archive</p>
              </div>
            </Link>
          </div>
          <div className='px-2 border py-0 rounded-end my-3'>
            <Link to="/trash" className="text-decoration-none text-light">
              <div className=" my-2">
                <p className="d-inline">Trash</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNav
