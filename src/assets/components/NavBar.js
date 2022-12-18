import React from 'react'

const NavBar = () => {
  return (
    <>
        <div className='container-fluid bg-dark mb-0 p-0 border-bottom'>
            <div className='row'>
            <div className='col-1'>
                <h1 className='text-light fs-5 '>
                    <span><i className="fa fa-hamburger text-light fs-1"></i></span>
                </h1>
            </div>
            <div className='col-2'>
                <h1 className='text-light'>Keep</h1>
            </div>
            <div className='col-6'>
                <input type="text" className='p-2 w-100 rounded bg-dark text-light' placeholder='Search'/>
            </div>
            <div className='col'>

            </div>
            
            {/* <hr className='mb-0'/> */}
            </div>
        </div>
    </>
  )
}

export default NavBar