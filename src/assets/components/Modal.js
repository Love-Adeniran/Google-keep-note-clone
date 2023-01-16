import React, { useState } from 'react'

const Modal = () => {
    const [collaboratorEmail, setCollaboratorEmail] = useState({
        email: ''
    })
    const [addMail, setAddMail] = useState([])
    const handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setCollaboratorEmail({...collaboratorEmail, [name]:value})
    }
const save = ()=>{
    let Mail = [...addMail, collaboratorEmail]
}
  return (
    <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Collaborators</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div></div>
                        <input type='text' onChange={handleChange} placeholder='Person or Email to share with' name='email' value={collaboratorEmail.email} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={save}>Save</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal