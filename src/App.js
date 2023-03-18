import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Archive from './assets/components/Archive'
import Bars from './assets/components/Bars'
import Keep from './assets/components/Keep'
import NavBar from './assets/components/NavBar'
import Reminder from './assets/components/Reminder'

import Trash from './assets/components/Trash'


const App = () => {
   const [title, setTitle] = useState([])

  return (
    <>
    
    <BrowserRouter>
        <NavBar title={title} setTitle ={setTitle}/>
      
            {/* <Route path='/signup' element={<SignUp/>}/> */}
        <Routes>
           <Route path='/' element={<Bars title={title} setTitle ={setTitle}/>} children={[
                <Route path='/' element={<Keep/>}/>,
                <Route path='/reminder' element={<Reminder/>}/>,
                <Route path='/archive' element={<Archive/>}/>,
                <Route path='/trash' element={<Trash />}/>
                
           ]}/>
        </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App