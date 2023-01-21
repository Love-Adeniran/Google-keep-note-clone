import React, { useEffect, useState } from 'react'

const Trash = () => {
  const [trashedNote, setTrashedNote] = useState([])
  const [restoreNote, setRestoreNote] = useState([])
  useEffect(() => {
    if (localStorage.trash) {
      setTrashedNote(JSON.parse(localStorage.trash))
    }
    if(localStorage.Keep){
        setRestoreNote(JSON.parse(localStorage.Keep))
    }
  }, [])

  const delet = (i) => {
    let trashIndex = i
    let allTrashedNote = [...trashedNote]
    console.log(allTrashedNote)
    allTrashedNote.splice(trashIndex, 1)
    setTrashedNote(allTrashedNote)
    console.log(allTrashedNote)
    localStorage.trash = JSON.stringify(allTrashedNote)
  }
  const restore = (i) => {
    let trashIndex = i
    let allTrashedNote = [...trashedNote]
    let restoreTrashNote = [...restoreNote,allTrashedNote[trashIndex]]
    setRestoreNote(restoreTrashNote)
    // console.log(restoreTrashNote);
    localStorage.Keep = JSON.stringify(restoreTrashNote)
    // console.log(JSON.parse(localStorage.Keep));
    allTrashedNote.splice(trashIndex, 1)
    setTrashedNote(allTrashedNote)
    localStorage.trash = JSON.stringify(allTrashedNote)

  }
  
  return (
    <div className="col">
      <div className="container mx-0 my-5 rounded">
        <div className="container row  mx-0 my-2 rounded">
          {trashedNote.map((each, i) => (
            <div
              className=" border border-secondary rounded my-1 px-2 col-3 mx-3 "
              key={i}
            >
              <div className="py-1">
                <p className="text-light">{each.title}</p>
                <p className="text-light">{each.body}</p>
              </div>

              <div className="row p-0">
                <div className="col-2">
                  <button
                    className="btn rounded-circle text-light"
                    onClick={() => delet(i)}
                  >
                    <span className="material-icons ">delete_forever</span>
                  </button>
                </div>
                <div className="col-2">
                  <button className="btn rounded-circle text-light" onClick={()=>restore(i)}>
                    <span className="material-icons ">restore</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trash
