import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className="container-fluid bg-dark mb-0 p-0 border-bottom">
        <div className="row">
          <div className="col-1">
            <i className="material-icons text-light p-3 fs-2">menu</i>
          </div>
          <div className="col-1">
            <img src="/" alt="" />
          </div>

          <div className="col-2">
            <h1 className="text-light">Keep</h1>
          </div>
          <div className="col-6">
            <input
              type="text"
              className="p-2 w-100 rounded bg-dark text-light"
              placeholder="🔍Search"
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col-2">
                <i className="text-light material-icons pt-3 px-2">refresh</i>
              </div>
              <div className="col-2">
                <i className="text-light material-icons pt-3 px-2">grid_view</i>
              </div>
              <div className="col-2">
                <i className="text-light material-icons pt-3 px-2">settings</i>
              </div>
            </div>
          </div>

          {/* <hr className='mb-0'/> */}
        </div>
      </div>
    </>
  )
}

export default NavBar
