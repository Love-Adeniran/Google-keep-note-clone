import React from 'react'

const NavBar = () => {
  return (
    <>
        <div className='container-fluid bg-dark mb-0 p-0 '>
            <div className='row'>
            <div className='col'>
                <h1 className='text-light fs-5 '>
                    <span><i class="fa fa-hamburger text-light fs-1"></i></span>
                </h1>
            </div>
            <div className='col'>
                <h1 className='text-light'>Keep</h1>
            </div>
            <div className='col-6'>
                <input type="text" className='p-2 w-100 rounded' placeholder='Search'/>
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