// import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useState } from 'react'


const Keep = () => {
const [notes, setNotes] = useState([])
const [addNewNote, setAddNewNote] = useState({
    title: '',
    body: ''
})

const handleChange=(e)=>{
    e.preventDefault();
    let name = e.target.name
    let value = e.target.value 
    setAddNewNote({...addNewNote, [name]:value})
    // console.log(addNewNote);
}
const Add =() =>{
    let noteArr = [...notes, addNewNote]
    setNotes(noteArr)
    localStorage.myNotes = JSON.stringify(noteArr)
    // console.log(noteArr)
    // let localNote = JSON.parse(localStorage.myNotes)
    
}
useEffect(() => {
    let localNote = JSON.parse(localStorage.getItem(localStorage.myNotes))
    console.log(localNote)
}
    , [])

   

  return (
    <>
        <div className='col ps-0'>
            <h1>Keep</h1>
            <div className='container border rounded p-2 w-50 shadow'>
                
                <div className="modal-body">
                    <div className='p-2'>
                        <p>Take a note...</p>
                        <input type="text" name='title' value={addNewNote.title} onChange={handleChange} className='w-100 p-2 form-control' placeholder='Take a note...'/>
                        <textarea name='body' value={addNewNote.body} onChange={handleChange} className='form-control'/>
                        <div className='modal-footer'>
                            <button onClick={Add} className='btn btn-light my-2'>Close</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container w-50 border  shadow my-3 p-2'>
                {/* <p className='w-75'> Title: {}</p> */}
                {
                    noteArr.map((item)=>{
                        <div>{item.title}</div>
                    })
                }
                <p>{}</p>
            </div>
        </div>
    </>
  )
}

export default Keep