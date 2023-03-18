import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = ({title,setTitle}) => {
    const note = ({title,setTitle})=>{
        let label = [...title]
        label = 'Keep'
        setTitle(label)
    }
    let backg 
  return (
    <>
      <div className="container col-3 bg-dark text-light pe-5">
        <div className="container pt-2 m-0 fill p-0 ps-1 ">
          <div className= {`px-1 border py-0 rounded-pill ${backg}`} onClick={()=>{
                backg = 'bg-warning'
          }}>
            <Link to="/" className="text-decoration-none text-light " onClick={()=>note()}>
              <div className="  my-1  px-1 py-0">
                <p className="d-inline"><i className="material-icons fs-4 me-3 ms-4">lightbulb</i>Notes</p>
              </div>
            </Link>
          </div>
          <div className='px-1 border py-0 rounded-pill my-2'>
            <Link to="/reminder" className="text-decoration-none text-light ">
              <div className=" my-1 px-1 py-0">
                <p className="d-inline"><i className='material-icons me-3 ms-4'>notifications_none</i> Reminder</p>
              </div>
            </Link>
          </div>
          <div className='px-1 border py-0 rounded-pill my-2'>
            <Link to="#" className="text-decoration-none text-light">
              <div className="  my-1 px-1 py-0">
                <p className="d-inline"><i className='material-icons me-3 ms-4'>edit</i>Edit Labels</p>
              </div>
            </Link>
          </div>
          <div className='px-1 border py-0 rounded-pill my-2'>
            <Link to="/archive" className="text-decoration-none text-light">
              <div className=" my-1 px-1 py-0">
                <p className="d-inline"><i className='material-icons me-3 ms-4'>archive</i>Archive</p>
              </div>
            </Link>
          </div>
          <div className='px-1 border py-0 rounded-pill my-2'>
            <Link to="/trash" className="text-decoration-none text-light">
              <div className=" my-1 px-1 py-0">
                <p className="d-inline"><i className='material-icons me-3 ms-4'>delete_outline</i>Trash</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNav
