import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <>
        <div className='container col-3 bg-dark text-light pe-0 '>
            <div className='container-fluid pt-2  m-0 fill p-0 ps-1'>
                <Link to='/Keep' className='text-decoration-none text-light '>
                    <div className=' border rounded-pill my-2 d-inline px-3'>
                            <p className='d-inline'>Notes</p>
                    </div>
                </Link>
                <Link to='/reminder' className='text-decoration-none text-light '>
                    <div className=' border rounded-pill my-2 '>
                            <p className='d-inline'>Reminder</p>
                    </div>
                </Link>
                <Link to='/Edit' className='text-decoration-none text-light'>
                        <div className=' border rounded-pill my-2'>
                                <p className='d-inline'>Edit Labels</p>
                        </div>
                </Link>
                <Link to='/archive' className='text-decoration-none text-light'>
                    <div className=' border rounded-pill my-2' >
                        <p className='d-inline'>Archive</p>
                    </div>
                </Link>
                <Link to='/trash' className='text-decoration-none text-light'>
                    <div className=' border rounded-pill my-2'>
                        <p className='d-inline'>Trash</p>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default SideNav