import React from 'react'
import Lottie from 'lottie-react'
import Frontend from '../../assets/frontend-dev.json'




const HeroSection = () => {
  return (
    <div className='hero-section'>
    <div className='hero-section-item'>
        <div className='section'>
            <p className='secure-it'>Secure Your It Services!</p>
            <h1 className='color font hero-font'>Welcome to visit our website</h1>
        </div>
        <div className='slogun'>
            <h3>Develope your thought</h3>
        </div>
        <div className='quote '><p>“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”</p></div>
        <div className='btns'>
            <button className='button-1'>About Us</button>
            <button className='button-1'>Contact Us</button>
        </div>
        </div>
        <div className='hero-image'>
            <Lottie animationData={Frontend} loop={true} />
        </div>
    </div>
  )
}

export default HeroSection