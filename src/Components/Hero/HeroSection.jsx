import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import Slider from 'react-slick';
import Frontend from '../../assets/frontend-dev.json'
import Hero from '../../assets/hero-image-d.png'
import { ImCheckboxChecked } from "react-icons/im";
import Digi from '../../assets/service/digital-marketing-services.jpeg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {

    const services = [
        { id: 1, Img: Digi, title: 'Web Development', description: 'The best web developers dont just build websites.' },
        { id: 1, Img: Digi, title: 'Software Development', description: 'The best web developers dont just build websites ' },
        { id: 1, Img: Digi, title: 'Digital Marketing', description: 'The best web developers dont just build websites' },
        { id: 1, Img: Digi, title: 'Costom Website', description: 'The best web developers dont just build websites' },
        { id: 1, Img: Digi, title: 'E-Commerce Excutive', description: 'The best web developers dont just build websites' },
        { id: 1, Img: Digi, title: 'Seo', description: 'The best web developers dont just build websites' },
    ]

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        cssEase: "ease-in-out"

    }

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
            <div className='contact-btn topex-2'>
                <div className='container-1'>
                    <div>
                        <h1 className='container-p font'>Let our incredible team assist you with Website Development</h1>
                    </div>
                    <div className='container-2'>
                        <h1 className='container-a font' >Let our incredible team assist you with Website Development</h1>
                    </div>
                    <div className='contact-us'>
                        <button className='button-1'>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className='topex-2'>
                <h1 className='color font hero-font copyright  '>More Than 24+ Years Experience<br /> We Provide <span className='span'>IT Services</span></h1>
                <p className='quote-1 font copyright'>Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic. Holisticly restore real time resources whereas standardized networks.</p>
                <div className='it-services '>
                    <div className='experience-field'>
                        <p>Web Development</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>E-Commerce Excutive</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>Software Development</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>Digital Marketing</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>Search Engine Marketing</p>
                        <p className='fill-border topex'></p>
                    </div>
                    <div className='experience-field'>
                        <p>CMS Tool</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>Costom Design</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>Web design</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>Magneto Website</p>
                        <p className='fill-border topex'></p>
                        <p className='topex'>Costom Website</p>
                        <p className='fill-border topex'></p>
                    </div>
                </div>
            </div>
            <div className='topex-2'>
                <p className='secure-it font'>What we do</p>
                <div className='it-services-flex'>
                    <h1 className='color font hero-font'>We Provide Exclusive Service <br />For
                        <span className='span'>  Your Business</span></h1>
                    <button className='button-1'>View All Services</button>
                </div>
            </div>
            {/* check  */}
            <div className='grid-template'>
                <Slider {...sliderSettings}>
                    {services.map((services) => (
                        <div className='grid-border topex-2' key={services.id}>
                            <div className='img-aspect'>
                                <img className='services-img-add' src={services.Img} />
                            </div>
                            <div className='img-aspect-1'>
                                <h3 className='copyright'>{services.title}</h3>
                                <p className='font  quote-1 copyright'>{services.description}</p>
                                <p className='copyright secure-it font '>Read More</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HeroSection