import React from 'react';
import InventionLogo from '../../assets/invention-logo.png';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container-1'>
        <div className='footer-list-item-value'>
          <div><img className='img-width-size image-size-badao' src={InventionLogo} alt='invention-logo' /></div>
          <div>Explore Now
            <div className='expolor-now-item'>
              <ul className='unordered-list'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div></div>
          <div>Contact Us
            <ul className='contact-list-approches'>
              <li>Mob: 544866494</li>
              <li>Add: Nahi pata</li>
            </ul>
          </div>
          <div>Find More</div>
          <div>Invention Logo</div>
        </div>
      </div>
    </div>
  )
}
export default Footer