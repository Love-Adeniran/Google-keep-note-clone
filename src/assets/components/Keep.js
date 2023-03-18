// import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Modal from './Modal'

const Keep = () => {
  const [notes, setNotes] = useState([])
  const [addTrash, setAddTrash] = useState([])
  const [addArchive, setaddArchive] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [addNewNote, setAddNewNote] = useState({
    title: '',
    body: '',
  })

  useEffect(() => {
    if (localStorage.Keep) {
      setNotes(JSON.parse(localStorage.Keep))
    }
    if (localStorage.archive){
        setaddArchive(JSON.parse(localStorage.archive))
    }
    if (localStorage.trash){
        setAddTrash(JSON.parse(localStorage.trash))
    }
  },
   [])
  
  //   console.log(notes)

  const handleChange = (e) => {
    if(editIndex){
        let name = e.target.name
        let value = e.target.value
        setEditIndex({ ...editIndex, [name]: value })
    }
    else{
        let name = e.target.name
        let value = e.target.value
        setAddNewNote({ ...addNewNote, [name]: value })

    }
    
  }

  const add = () => {
    setAddNewNote(editIndex)
    if(editIndex===null){
        let noteArr = [...notes, addNewNote]
        setNotes(noteArr)
        localStorage.Keep = JSON.stringify(noteArr)
        setAddNewNote({
            title: '',
            body: '',
        })
    }
    else if (addNewNote.title === '' && addNewNote.body === '') {
            alert('Empty')
          }
    else{
        let editNote = [...notes, editIndex]
        setNotes(editNote)
        console.log(notes);
        } 
    
   
  }
//   let disp = 'note-box'
  const delet = (i) => {
    let index = i
    let newNotes = [...notes]
    let trashNote = [...addTrash,newNotes[index]]
    localStorage.trash = JSON.stringify(trashNote)
    newNotes.splice(index, 1)
    setNotes(newNotes)
    localStorage.Keep = JSON.stringify(newNotes)
  }

  const archiveNote = (i) => {
    let idx = i
    let newNotes = [...notes]
    let noteIndex = [...addArchive,newNotes[idx]]
    setaddArchive(noteIndex)
    console.log(noteIndex);
    localStorage.archive = JSON.stringify(noteIndex)
    // console.log(newNotes[idx])
    newNotes.splice(idx, 1)
    setNotes(newNotes)
    localStorage.Keep = JSON.stringify(newNotes)
  }

  let ind
  let editedNote
  const edit = (i) => {
    ind = i
    let editNote = [...notes]
    editedNote = editNote.find((each, i) => i === ind)
    editedNote = {
      title: editNote[i].title,
      body: editNote[i].body,
    }
    setEditIndex(editedNote)

    
  }
  const update = (i) => {
    ind = i
    let editNote = [...notes]
    // const eachPost = allPost.find((post, i) => i == index)
    editedNote = editNote.find((each, i) => i === ind)
    editedNote = {
      title: editNote[i].title,
      body: editNote[i].body,
    }
    let editIndex = notes[ind]
    
    setNotes(editIndex)
  }

  return (
    <>
      <div className="col ps-0 mt-4">
        {/* <h1 className='text-light'>Keep</h1> */}
        <div className="container border border-secondary rounded p-2 w-50 shadow">
          <div className="modal-body">
            <div className="p-2">
              <p className="text-light">Take a note...</p>
              <div className="">
                <input
                  type="search"
                  name="title"
                  value={editIndex===null? addNewNote.title: editIndex.title}
                  onChange={handleChange}
                  className="w-100 p-2 form-control bg-dark text-light"
                  placeholder="Take a note..."
                />
                <textarea
                  name="body"
                  value={editIndex===null? addNewNote.body:editIndex.body}
                  onChange={handleChange}
                  className="form-control bg-dark outline-none text-light"
                />
                <div className="modal-footer">
                  <button onClick={add} className="btn btn-light my-2" >{editIndex == null? "Close":"Update"}
                   
                  </button>
                  {/* <button onClick={add} className="btn btn-light my-2">
                    Close
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal />

        <div className="container row  mx-0 my-1 rounded">
          {notes.map((each, i) => (
            <div className=" border border-secondary rounded my-1 px-2 col-3 mx-3 " key={i}>
              <div onClick={() => edit(i)} className="py-1">
                <p className="text-light">{each.title}</p>
                <p className="text-light">{each.body}</p>
                <div className='border border-secondary rounded-pill'></div>
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

                <div className="dropdown px-1 col-2 p-2 ">
                  <button
                    className="btn "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons text-light">add_alert</i>
                  </button>

                  <ul className="dropdown-menu p-4 ">
                    <h4 className="text-">Reminder</h4>
                    <li>
                      <button className="dropdown-item">
                        <div className="row">
                          <div className="col-6 " onClick={()=>alert('say Hello')}>
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
                  <button className='btn p-0 ' onClick={()=>archiveNote(i)}>
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
    </>
  )
}

export default Keep
