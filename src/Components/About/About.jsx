import React from 'react'
import Banner1 from '../../assets/aboutus/about-banner.jpg'
import Lottie from 'lottie-react'
import Animation from '../../assets/aboutus/aboutani.json'
import { ImCheckboxChecked } from 'react-icons/im'


const About = () => {
    
    return (
        <div className='about-container'>
            <div className=''>
                <img className='about-banner-img' src={Banner1} />
            </div>
            <div className='about-page'>
                <div className='about-section'>
                    <div className=''>
                        <Lottie className='ani1' animationData={Animation} loop={true} />
                    </div>
                    <div className='some-about-content'>
                        <p className='secure-it font'>About Invention It Solution</p>
                        <h1 className='color font hero-font'>Preparing For Your Business Provide Best <span className='span'>IT Solution</span> </h1>
                        <p className=' quote-1 font '>Quickly re-engineer intuitive e-services whereas compelling niches. Professionally syndicate strategic e-commerce without covalent leadership skills. Globally customize equity invested imperatives.</p>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                        </div>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                        </div>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                        </div>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                        </div>
                        <div className='btns'>
                            <button className='button-1 font'>Discover More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About