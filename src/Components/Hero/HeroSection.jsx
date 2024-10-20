import React from 'react'
import Lottie from 'lottie-react'
import Frontend from '../../assets/frontend-dev.json'
import Hero from '../../assets/hero-image-d.png'
import { ImCheckboxChecked } from "react-icons/im";

const HeroSection = () => {
    return (
        <div className='page'>
            <div className=' hero-section '>
                <div className='hero-section-item'>
                    <div className='section'>
                        <p className='secure-it'>Secure Your It Services!</p>
                        <h1 className='color font hero-font'>Welcome to visit our website</h1>
                    </div>
                    <div className='slogun'>
                        <h3 className='font'>Develope your thought</h3>
                    </div>
                    <div className='quote '><p>“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”</p></div>
                    <div className='btns'>
                        <button className='button-1 font'>About Us</button>
                        <button className='button-1 font'>Contact Us</button>
                    </div>
                </div>
                <div className='hero-image'>
                    <Lottie animationData={Frontend} loop={true} />
                </div>
            </div>
            <div className='hero-section'>
                <img src={Hero} />
                <div className='some-about-content'>
                    <p className='secure-it font'>About Invention It Solution</p>
                    <h1 className='color font hero-font'>Preparing For Your Business Provide Best <span className='span'>IT Solution</span> </h1>
                    <p className=' quote-1 font '>Quickly re-engineer intuitive e-services whereas compelling niches. Professionally syndicate strategic e-commerce without covalent leadership skills. Globally customize equity invested imperatives.</p>
                    <div className='checkbox-flex topex'>
                    <ImCheckboxChecked/>
                    <p  className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                    </div>
                    <div className='checkbox-flex topex'>
                    <ImCheckboxChecked/>
                    <p  className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                    </div>
                    <div className='checkbox-flex topex'>
                    <ImCheckboxChecked/>
                    <p  className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                    </div>
                    <div className='checkbox-flex topex'>
                    <ImCheckboxChecked/>
                    <p  className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                    </div>
                    <div className='btns'>
                    <button className='button-1 font'>Discover More</button>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default HeroSection