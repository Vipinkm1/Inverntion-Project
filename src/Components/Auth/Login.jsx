import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/signup')
    }
    const handleChange = () => {
        const {name, value} = e.target;
         setLogin((prevState => ({
            ...prevState,
            [name]: value
         })))
    }

    const handleSignUpSubmit =(e)=> {
      e.preventDefault()
      setLogin(login)
      console.log('login successfully')
    }
    
    return (
        <div className='popup'>
            <div className='border-1'>
                <h1 className='text-center'>Login</h1>
                <form className='form-container' onSubmit={handleSignUpSubmit}>
                    <div>
                        <label className='label-width'>Username</label>
                        <input className='input-width' name='username' type='text' placeholder='Enter user name' value={login.username} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Password</label>
                        <input className='input-width' name='password' type='text' placeholder='Enter passowrd' value={login.password} onChange={handleChange} />
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