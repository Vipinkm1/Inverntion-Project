import React from 'react'
import HeroImage from '../../assets/hero-image-d.png'
const HeroSection = () => {
  return (
    <div className='hero-section'>
    <div className='hero-section-item'>
        <div className='section'>
            <h1>Welcome to visit our website</h1>
        </div>
        <div className='slogun'>
            <h3>Develope your thought</h3>
        </div>
        <div className='quote'><p>“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”</p></div>
        <div className='btns'>
            <button className='button-1'>Explore Now</button>
            <button className='button-2'>Explore Now</button>
        </div>
        </div>
        <div className='hero-image'>
            <img src={HeroImage}/>
        </div>
    </div>
  )
}

export default HeroSection