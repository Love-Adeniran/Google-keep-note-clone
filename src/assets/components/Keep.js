// import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useState } from 'react'


const Keep = () => {
    // const [localNote, setlocalNote] = useState([])
   
    const [notes, setNotes] = useState([])
    const [addNewNote, setAddNewNote] = useState({
        title: '',
        body: ''
    })
    
    useEffect(() => {
        if(localStorage.Keep){
            setNotes(JSON.parse(localStorage.getItem('Keep')))
        }
    }
    ,[])
    console.log(notes)
    
    const handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setAddNewNote({...addNewNote, [name]:value})
    }
    
    const add =() =>{
        if(addNewNote.title == ""|| addNewNote.body== ""){
            alert('hi')
        }
        else{
            let noteArr = [...notes,addNewNote]
            setNotes(noteArr)
            console.log(noteArr);
            localStorage.Keep = JSON.stringify(noteArr)
            
        }
        
    }
    let disp = 'note-box';
    let show 
    
    const dNoteBox =()=>disp = 'mbody'
    const remindMe = () => {
        
    }
    const collaborator =()=>{
        return(
            <>
                <button  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
                </button>

                <div className='modal fade' id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Collaborators</h5>
                        <button className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <button className=''><p>Person or Email to share with</p></button>
                    </div>
                    <div className="modal-footer">
                        <button  className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button  className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
   

  return (
    <>
        <div className='col ps-0'>
            <h1>Keep</h1>
            <div className='container border rounded p-2 w-50 shadow'>
                
                <div className="modal-body" onClick={dNoteBox} >
                    <div className='p-2'>
                        <p>Take a note...</p>
                        <div className='' >
                            <input type="text" name='title' value={addNewNote.title} onChange={handleChange} className='w-100 p-2 form-control' placeholder='Take a note...'/>
                            <textarea name='body' value={addNewNote.body} onChange={handleChange} className='form-control'/>
                            <div className='modal-footer'>
                                <button onClick={add} className='btn btn-light my-2'>Close</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className='container shadow my-3 p-4 row' >
              {
                notes.map((each,i)=>(
                    <div className='container border  shadow my-3 p-2 col-5 mx-3' key={i}>
                        <p>{each.title}</p>
                        <p>{each.body}</p>

                                <button className='btn btn-light'>edit</button>
                                <div className='dropdown'>
                                    <button className='btn btn-light' onClick={collaborator}>col</button>
                                </div>
                                    <div className="dropdown w-50 container ">
                                        <button className={`btn btn-light `+{show}} onClick={remindMe}>Rm</button>
                                        {/* <span>Mouse over me</span> */}
                                        <div class="dropdown-content">
                                            <h4>Reminder</h4>
                                            <div>
                                                <button className='btn p-0 '>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            Later Today
                                                        </div>
                                                        <div className="col-6"><p>8:00 PM</p></div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className='btn p-0 '>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <p>Tomorrow</p>
                                                        </div>
                                                        <div className="col-6"><p>8:00 AM</p></div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className='btn p-0 '>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <p>Next Week</p>
                                                        </div>
                                                        <div className="col-6"><p>MON, 8:00 AMN</p></div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className='btn p-0 '>
                                                        <p>Pick date and time</p>
                                                </button>
                                            </div>
                                            <div>
                                                <button className='btn p-0 '>
                                                        <p>Pick place</p>
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                        {/* </div> */}
                           

                    </div>
                )
                )}
                
            </div>
        </div>
    </>
  )
}

export default Keep