// import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Modal from './Modal'

const Keep = () => {
  const [notes, setNotes] = useState([])
  const [addNewNote, setAddNewNote] = useState({
    title: '',
    body: '',
  })

  useEffect(() => {
    if (localStorage.Keep) {
      setNotes(JSON.parse(localStorage.Keep))
    }
  }, [])
  //   console.log(notes)

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setAddNewNote({ ...addNewNote, [name]: value })
  }

  const add = () => {
    if (addNewNote.title === '' && addNewNote.body === '') {
      alert('hi')
    } else {
      let noteArr = [...notes, addNewNote]
      setNotes(noteArr)
      localStorage.Keep = JSON.stringify(noteArr)
    }
  }
  let disp = 'note-box'
  const delet = (i) => {
    let index = i
    let newNotes = [...notes]
    newNotes.splice(index, 1)
    setNotes(newNotes)
    localStorage.Keep = JSON.stringify(newNotes)
  }

  const archiveNote = (i) => {
    let idx = i
    let newNotes = [...notes]
    let noteIndex = newNotes[idx]
    localStorage.archive = JSON.stringify(noteIndex)
    // alert(newNotes[idx])
    newNotes.splice(idx, 1)
    setNotes(newNotes)
    localStorage.Keep = JSON.stringify(newNotes)
  }

  let ind
  let editedNote
  const edit = (i) => {
    ind = i
    let editNote = [...notes]
    editedNote = {
      title: editNote[i].title,
      body: editNote[i].body,
    }
    setAddNewNote(editedNote)
    console.log(editNote)
    // if (editedNote.title === '' || editedNote.body === '') {
    //     alert('hiiiii')
    //   }
  }
  const update = () => {
    let updatedNote = {
      title: addNewNote.title,
      body: addNewNote.body,
    }
    setNotes(editedNote[ind])
    console.log(editedNote[ind])
    // editedNote[ind] = updatedNote
    // console.log(editedNote[ind])
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
                  value={addNewNote.title}
                  onChange={handleChange}
                  className="w-100 p-2 form-control bg-dark text-light"
                  placeholder="Take a note..."
                />
                <textarea
                  name="body"
                  value={addNewNote.body}
                  onChange={handleChange}
                  className="form-control bg-dark outline-none text-light"
                />
                <div className="modal-footer">
                  <button onClick={update} className="btn btn-light my-2">
                    Update
                  </button>
                  <button onClick={add} className="btn btn-light my-2">
                    Close
                  </button>
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
              </div>

              <div className="row p-0">

                <div className="dropdown text-light col-2 p-2">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn  rounded-circle p-0 "
                  >
                    <span class="material-icons text-light me-0">
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
                    <i class="material-icons text-light">add_alert</i>
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
