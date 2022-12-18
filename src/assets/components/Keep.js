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
    if (addNewNote.title == '' || addNewNote.body == '') {
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
  const edit = (i) => {
    let ind = i
    let editNote = [...notes]
    let editedNote = {
        title: editNote[i].title,
        body: editNote[i].body
    }
    setAddNewNote(editedNote)
    console.log(editNote)
    if (editedNote.title == '' || editedNote.body == '') {
        alert('hiiiii')
      }
  }

  return (
    <>
      <div className="col ps-0 mt-4">
        {/* <h1 className='text-light'>Keep</h1> */}
        <div className="container border rounded p-2 w-50 shadow">
          <div className="modal-body">
            <div className="p-2">
              <p className='text-light'>Take a note...</p>
              <div className="">
                <input
                  type="text"
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
                  <button onClick={add} className="btn btn-light my-2">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal />
        <div className="container row  mx-0 my-3">
          {notes.map((each, i) => (
            <div
              className=" border  shadow my-3 p-3 col-5 mx-3 "
              key={i}>
              <div onClick={() => edit(i)}>
                <p className='text-light'>{each.title}</p>
                <p className='text-light'>{each.body}</p>
              </div>
              <div className="dropdown text-light ">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-light"
                >
                  col
                </button>
              </div>

              <div className="dropdown px-2">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RM
                </button>
                <ul className="dropdown-menu p-4 text-light">
                    <h4 className="">Reminder</h4>
                  <li>
                    <button className="dropdown-item">
                      <div className="row">
                        <div className="col-6 "><small className=''>Later Today</small></div>
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
                          <small className=''>Tomorrow</small>
                        </div>
                        <div className="col-6">
                          <small className=''>8:00 AM</small>
                        </div>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item p-0">
                      <div className="row p-0 m-0">
                        <div className="col-6 p-0 m-0">
                          <small className=''>Next week</small>
                        </div>
                        <div className="col-6 p-0 m-0">
                          <small className=''>Mon, 8:00 AM</small>
                        </div>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <small className=''>Pick date and time</small>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      <small className=''>Pick place</small>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={() => delet(i)}>
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

              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Keep
