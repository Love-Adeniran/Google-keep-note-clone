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
    newNotes.splice(index,1)
    setNotes(newNotes)
    localStorage.Keep = JSON.stringify(newNotes)
  }
  const edit =(i)=>{
    let ind = i
    let editNote = [...notes]
    setAddNewNote({
        title: editNote[i].title,
        body: editNote[i].body
    })
    console.log(editNote);
  }

  return (
    <>
      <div className="col ps-0">
        <h1>Keep</h1>
        <div className="container border rounded p-2 w-50 shadow">
          <div className="modal-body">
            <div className="p-2">
              <p>Take a note...</p>
              <div className="">
                <input
                  type="text"
                  name="title"
                  value={addNewNote.title}
                  onChange={handleChange}
                  className="w-100 p-2 form-control"
                  placeholder="Take a note..."
                />
                <textarea
                  name="body"
                  value={addNewNote.body}
                  onChange={handleChange}
                  className="form-control"
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
        <div className="container shadow my-3 p-4 row ">
          {notes.map((each, i) => (
            <div
              className="container border  shadow my-3 p-3 col-5 mx-3 "
              key={i} onClick={()=>edit(i)}>
              <p>{each.title}</p>
              <p>{each.body}</p>
              <div className="dropdown">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-light"
                >
                  col
                </button>
              </div>
              <div className="dropdown w-50 container ">
                <button className={`btn btn-light `}>Rm</button>
                {/* <span>Mouse over me</span> */}
                <div className="dropdown-content">
                  <h4>Reminder</h4>
                  <div>
                    <button className="btn p-0 ">
                      <div className="row">
                        <div className="col-6">Later Today</div>
                        <div className="col-6">
                          <p>8:00 PM</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="btn p-0 ">
                      <div className="row">
                        <div className="col-6">
                          <p>Tomorrow</p>
                        </div>
                        <div className="col-6">
                          <p>8:00 AM</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="btn p-0 ">
                      <div className="row">
                        <div className="col-6">
                          <p>Next Week</p>
                        </div>
                        <div className="col-6">
                          <p>MON, 8:00 AMN</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="btn p-0 ">
                      <p>Pick date and time</p>
                    </button>
                  </div>
                  <div>
                    <button className="btn p-0 ">
                      <p>Pick place</p>
                    </button>
                  </div>
                </div>
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
