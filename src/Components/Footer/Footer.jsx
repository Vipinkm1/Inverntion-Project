import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import navlogo from '../../assets/invention-logo.png'
import Facebook from '../../assets/social/communication.png'
import Instagram from '../../assets/social/instagram.png'
import Twitter from '../../assets/social/twitter.png'
import Youtube from '../../assets/social/youtube.png'
import { MdPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className=' page topex-2'>
      <div className='footer-flex '>
        <div className='footer-container-1'>
          <h2 className='heading  footer-heading'>Why Us</h2>
          <div className='some-content'>
            <img onClick={() => navigate('/')} src={navlogo} alt='nav-logo' className='logo-name footer-logo' />
            <p className=' para1'>At Invention, creativity isn’t just a part of our process; it’s at the core of who we are. We are a creative agency where imagination meets innovation. If you can think it, we can make it happen.</p>
          </div>
        </div>
        
        <div className='footer-container-2'>
          <h2 className='heading color font'>Our Menu</h2>
          <div className='some-content'>
            <Link to='/' className='footer-services textBig para1'>Home</Link>
            <Link to='/about' className='footer-services textBig para1'>About</Link>
            <Link to='/services' className='footer-services textBig para1'>Services</Link>
            <Link to='' className='footer-services textBig para1'>Portfolio</Link>
            <Link to='' className='footer-services textBig para1'>Blog</Link>
            <Link to='/contact' className='footer-services textBig para1'>Contact Us</Link>
          </div>
        </div>
        <div className='footer-container-2'>
          <h2 className='heading color font '>Contact Info</h2>
          <div className='footer-content-flex'>
            <div className='some-content'>
              <p className='para3'>India-</p>
              <div className='footer-contact'>
                <MdPhone className='icons-contact' />
                <p className='para2'>Phone:</p>
                <p>+91 9305512110 </p>
              </div>
              <div className='footer-contact'>
                <GrLocation className='icons-contact' />
                <p className='para2'>Address:</p>
                <p>Dwarka Mor,New Delhi,India</p>
              </div>
              <div className='footer-contact'>
                <MdEmail className='icons-contact' />
                <p className='para2'>Email: <span>vipinkm1654@gmail.com</span></p>
              </div>
              {/*  dubai address */}
            </div>
          </div>
          <div className='footer-contact'>
            <img className='footer-social-icon' src={Facebook} />
            <img className='footer-social-icon' src={Instagram} />
            <img className='footer-social-icon' src={Twitter} />
            <img className='footer-social-icon' src={Youtube} />
          </div>
        </div>
        <div className='footer-container-2'>
        <h2 className='heading color font '>Suscribes</h2>
        <input className='input-width-2 topex' type='text' placeholder='enter email'/>
        <button className='button-1 topex'>Suscribe</button>
        </div>
      </div>
      {/*  another content */}
      <div className='footer-container-3'>
        <h2 className='heading  footer-services copyright'>Copyright 2024 | Vipin Kumar , All Right Reserved.</h2>
      </div>
    </div>
  )
}
export default Footer