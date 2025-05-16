import React, { useState } from 'react'
import navlogo from '../../assets/invention-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const navigate = useNavigate()
  return (
    <div className='page'>
      <div className='header '>
        <div className='navbar'>
          <div className='nav-logo'>
            <img onClick={() => navigate('/')} src={navlogo} alt='nav-logo' className='logo-name' />
          </div>
          <div className='nav-item'>
            <ul className={`nav-links ${open ? 'open' : ''}`} >
              <li className='lnk-size'><div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/') }} className='lnk-size-2'  >Home</div></li>
              <li className='lnk-size'><div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/about') }} className='lnk-size-2'>About</div></li>
              <li className='lnk-size'><div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/services') }} className='lnk-size-2'>Services</div></li>
              <li className='lnk-size'><div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/contact') }} className='lnk-size-2' >Contact</div></li>
              <li className='lnk-size'><div onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/blog') }} className='lnk-size-2' >Blog</div></li>
              {/* <li className='btn-li lnk-size'><button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/signup') }} className='btn-1'>SignUp</button></li>
              <li className='btn-li lnk-size'><button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/login') }} className='btn-1'>SignIn</button></li> */}
            </ul>
          </div>
          <div className='hamburger ' onClick={handleOpen}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Header