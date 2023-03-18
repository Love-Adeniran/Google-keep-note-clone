import React, { useEffect, useState } from 'react'

const Modal = () => {
    const [collaboratorEmail, setCollaboratorEmail] = useState({
        email: ''
    })
    const [addMail, setAddMail] = useState([])
    useEffect(() => {
        if (localStorage.colaborator) {
            setAddMail(JSON.parse(localStorage.colaborator))
        }
    }, [])
    

    const handleChange=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setCollaboratorEmail({...collaboratorEmail, [name]:value})
    }
    let Mail 
    let colabEmail
const save = ()=>{
    Mail = [...addMail, collaboratorEmail]
    localStorage.colaborator = JSON.stringify(Mail)
    console.log(Mail);
    colabEmail = JSON.parse(localStorage.colaborator)
    setAddMail(colabEmail)
}
  return (
    <>
        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog bg-dark">
                <div className="modal-content bg-dark">
                <div className="modal-header bg-dark">
                    <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Collaborators</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body bg-dark">
                        <input type='text' className='bg-dark' onChange={handleChange} placeholder='Person or Email to share with' name='email' value={collaboratorEmail.email} />
                </div>
                <div>
                    {
                        addMail.map((each,i)=>(
                            <div className='text-light' key={i}> <i className='material-icons bg-dark text-primary'>person_add_alt</i> {each.email}</div>
                        ))
                    }
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