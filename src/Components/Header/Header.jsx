import React from 'react'
import navlogo from '../../assets/invention-logo.png'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  
  const handleSignup = () => {
    navigate('/signup')
  }
  return (
  <div className='page'>
    <div className='header '>
      <div className='navbar'>
        <div className='nav-logo'>
          <img onClick={()=> navigate('/')} src={navlogo} alt='nav-logo' className='logo-name' />
        </div>
        <div className='nav-item'>
          <ul className='nav-links'>
            <li className='lnk-size'><Link className='lnk-size-2' to='/' href='#home'>Home</Link></li>
            <li className='lnk-size'><Link className='lnk-size-2' to='/about'>About</Link></li>
            <li className='lnk-size'><Link className='lnk-size-2' to='/services'>Services</Link></li>
            <li className='lnk-size'><Link className='lnk-size-2' to='/contact' href='#contact'>Contact</Link></li>
            <li className='lnk-size'><a className='lnk-size-2' href='#blog'>Blog</a></li>
            <li className='btn-li lnk-size'><button onClick={handleSignup} className='btn-1'>SignUp</button></li>
            <li className='btn-li lnk-size'><button onClick={()=> navigate('/login')} className='btn-1'>SignIn</button></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

)
}
export default Header