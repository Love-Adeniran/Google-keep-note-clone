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
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Collaborators</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div></div>
                        <input type='text' onChange={handleChange} placeholder='Person or Email to share with' name='email' value={collaboratorEmail.email} />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={save}>Save</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal