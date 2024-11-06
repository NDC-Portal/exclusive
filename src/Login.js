import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.pass === password) {
            navigate('/');
        } else {
            alert("Incorrect email or password");
        }
    };
    return (
        <div>
            <div className='login container my-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img className='img-fluid' src={"/images/side image.png"} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 p-5'>
                        <h3>Log in to Exclusive</h3>
                        <p>Enter your details below</p>
                        <form className='login-form' onSubmit={handleSubmit}>
                            <div class="mb-3 mt-3">
                                <input type="email" class="form-control border-0 border-bottom" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div class="mb-3 mt-3">
                                <input type="password" class="form-control border-0 border-bottom" id="pwd" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div class="mb-3 mt-3 d-flex justify-content-between">
                                <button type="submit" class="btn btn-danger">Login</button>
                                <p className='text-danger'>Forget Password?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
