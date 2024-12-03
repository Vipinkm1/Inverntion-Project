import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    
    return (
        <div className='popup'>
            <div className='border-1'>
                <h1 className='text-center'> Sign Up</h1>
                <form className='form-container' onSubmit={handleSignUpSubmit}>
                    <div>
                        <label className='label-width'>Username</label>
                        <input className='input-width' name='username' type='text' placeholder='Enter user name' value={signup.username} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Password</label>
                        <input className='input-width' name='password' type='text' placeholder='Enter passowrd' value={signup.password} onChange={handleChange} />
                    </div>
                    <div >
                    </div>
                    <div className='btn-3'>
                        <button type='submit' className='btn-width'>Login</button>
                    </div>
                </form>
                <p className='topex'>Not have an Account?<span onClick={handleLogin} className='spanish'>SignUp</span></p>
            </div>
        </div>
    )
}
export default Login