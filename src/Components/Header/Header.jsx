import React from 'react'
import navlogo from '../../assets/invention-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <div className='page'>
    <div className='header '>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={navlogo} alt='nav-logo' className='logo-name' />
        </div>
        <div className='nav-item'>
          <ul className='nav-links'>
            <li><Link to='/' href='#home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><a href='#services'>Services</a></li>
            <li><Link to='/contact' href='#contact'>Contact</Link></li>
            <li><a href='#blog'>Blog</a></li>
            <li className='btn-li'><button className='btn-1'>SignUp</button></li>
            <li className='btn-li'><button className='btn-1'>SignIn</button></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Header