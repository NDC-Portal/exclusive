import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify({name,email,pass}))
        alert('Your account created successfully!')
        navigate('/login')

    }


    
    return (
        <div>
            <div className='signup container my-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='img-fluid' src={"/images/side image.png"} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 p-5'>
                        <h3>Create an account</h3>
                        <p>Enter your details below</p>
                        <form className='signup-form' onSubmit={handleSubmit}>
                            <div class="mb-3 mt-3"> 
                                <input type="text" class="form-control border-0 border-bottom" id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)} required />
                            </div>
                            <div class="mb-3 mt-3">
                                <input type="email" class="form-control border-0 border-bottom" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
                            </div>
                            <div class="mb-3 mt-3">
                                <input type="password" class="form-control border-0 border-bottom" id="pwd" placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} required />
                            </div>
                            <div class="mb-3 mt-3">
                                <button type="submit" class="btn btn-danger w-100">Create Account</button>
                            </div>
                            <p>Already have account? <Link to="/login" className='text-dark text-decoration-none'>Log in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
