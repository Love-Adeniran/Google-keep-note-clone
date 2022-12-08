import React from 'react'
import { useFormik } from 'formik'

const SignUp = () => {
    let formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cPassword: ''
        },
        onSubmit:(values)=>{
            console.log(values);
            
        }
    })
    
  return (
    <>
    <div className='box p-2'>
        <form className='box2 border p-2 shadow bg-box rounded'onSubmit={formik.handleSubmit}>
            <h2 className='text-info mx-2'>Welcome! <span className='fs-6 '> to google keep-note-clone</span></h2>
            <div className='p-3'>
                <input type="text" className='form-control my-2' placeholder='First Name' onChange={formik.handleChange} name='firstName'/>
                <input type="text" className='form-control my-2' placeholder='Last Name' onChange={formik.handleChange} name='lastName'/>
                <input type="text" className='form-control my-2' placeholder='Email' onChange={formik.handleChange} name='email'/>
                <input type="password" className='form-control my-2' placeholder='Password' onChange={formik.handleChange} name='password'/>
                <input type="password" className='form-control my-2' placeholder='Confirm Password' onChange={formik.handleChange} name='cPassword'/>
                <button className='btn btn-primary rounded-pill' type='submit'>Submit</button>
            </div>

        </form>
    </div>

    </>
  )
}

export default SignUp