import React from 'react'
import navlogo from '../../assets/invention-logo.png'
const Header = () => {
  return (
    <div className='header'>
        <div className='navbar'>
            <div className='nav-logo'>
              <img src={navlogo} alt='nav-logo' className='logo-name'/>
            </div>
       
        <div className='nav-item'>
            <ul className='nav-links'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#blog'>Blog</a></li>
                <li className='btn-li'><button className='btn-1'>SignUp</button></li>
                <li className='btn-li'><button className='btn-1'>SignIn</button></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header