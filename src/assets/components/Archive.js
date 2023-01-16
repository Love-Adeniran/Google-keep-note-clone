import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Archive = () => {
    const [archiveNote, setArchiveNote] = useState([])
    const [unArchiveNote, setUnArchiveNote] = useState([])
   
   useEffect(() => {
    if (localStorage.archive) {
        setArchiveNote(JSON.parse(localStorage.archive))
       console.log(localStorage.archive);
      }
    // if(localStorage.keep){
    //     setUnArchiveNote(JSON.parse(localStorage.keep))
    //     console.log(localStorage.keep);
       
    //   }
   }, [])

   const unarchiveNote=(i)=>{
    // console.log(localStorage.keep)
    if(localStorage.keep){
        setUnArchiveNote(JSON.parse(localStorage.keep))
        console.log(localStorage.keep);
       
      }
    let unarchiveIndex = i
    let archivedNote = [...archiveNote]
    let unarchiveNoteIndex = [...unArchiveNote,archivedNote[unarchiveIndex]]
    setUnArchiveNote(unarchiveNoteIndex);
    console.log(unarchiveNoteIndex);
    // localStorage.Keep = JSON.stringify(unarchiveNoteIndex)
    // unarchiveNote.splice(unarchiveIndex,1)
    // setArchiveNote(archiveNote)
    // console.log(archiveNote);
    // localStorage.archive = JSON.stringify(archiveNote)
   }
   
   const edit =()=>{

   }
   const delet =()=>{

}

  return (
    <>
    <div className='col'>
    
    <div className="container mx-0 my-5 rounded">

        <div className='container row  mx-0 my-2 rounded'>
          {archiveNote.map((each,i)=>(
            <div className=" border border-secondary rounded my-1 px-2 col-3 mx-3 " key={i}>
            <div onClick={() => edit(i)} className="py-1">
              <p className="text-light">{each.title}</p>
              <p className="text-light">{each.body}</p>
            </div>

            <div className="row p-0">

              <div className="dropdown text-light col-2 p-2">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn  rounded-circle p-0 "
                >
                  <span className="material-icons text-light me-0">
                    person_add_alt
                  </span>
                </button>
              </div>

              <div className="dropdown px-1 col-2 p-2">
                <button
                  className="btn "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="material-icons text-light">add_alert</i>
                </button>
                <ul className="dropdown-menu p-4">
                  <h4 className="">Reminder</h4>
                  <li>
                    <button className="dropdown-item">
                      <div className="row">
                        <div className="col-6 ">
                          <small className="">Later Today</small>
                        </div>
                        <div className="col-6">
                          <small>8:00 PM</small>
                        </div>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <div className="row">
                        <div className="col-6">
                          <small className="">Tomorrow</small>
                        </div>
                        <div className="col-6">
                          <small className="">8:00 AM</small>
                        </div>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item p-0">
                      <div className="row p-0 m-0">
                        <div className="col-6 p-0 m-0">
                          <small className="">Next week</small>
                        </div>
                        <div className="col-6 p-0 m-0">
                          <small className="">Mon, 8:00 AM</small>
                        </div>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <small className="">Pick date and time</small>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <small className="">Pick place</small>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="col-2 p-2">
                <button className='btn text-light rounded-circle'>
                  <i className="material-icons">palette</i>  
                </button>
              </div>

              <div className="col-2 p-2 ">
                <button className='btn p-0 rounded-circle'>
                  <i className="material-icons text-light">image</i>
                  </button>
              </div>

              <div className="col-2 p-2 rounded-circle">
                <button className='btn p-0 ' onClick={()=>unarchiveNote(i)}>
                  <i className="material-icons text-light">archive</i>
                  </button>
              </div>

              <div className="dropdown col-2 p-2">
                <button
                  className="btn text-light p-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="material-icons">more_vert</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => delet(i)}
                    >
                      delete note
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">Add label</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Add drawing</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Make a copy</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Show checkbox</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          ))}
        </div>
        
    </div>

    </div>
    
    </>
    
  )
}

export default Archive