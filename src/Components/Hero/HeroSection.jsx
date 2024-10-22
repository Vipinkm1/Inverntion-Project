import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import AOS from 'aos'
import Slider from 'react-slick';
import Frontend from '../../assets/frontend-dev.json'
import Hero from '../../assets/hero-image-d.png'
import { ImCheckboxChecked } from "react-icons/im";
import Digi from '../../assets/service/digital-marketing-services.jpeg'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {



    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-in-out',
        })
    }, [])
    const services = [
        { id: 1, Img: Digi, title: 'Web Development', description: 'The best web developers dont just build websites.' },
        { id: 1, Img: Digi, title: 'Software Development', description: 'The best web developers dont just build websites ' },
        { id: 1, Img: Digi, title: 'Digital Marketing', description: 'The best web developers dont just build websites' },
        { id: 1, Img: Digi, title: 'Costom Website', description: 'The best web developers dont just build websites' },
        { id: 1, Img: Digi, title: 'E-Commerce Executive', description: 'The best web developers dont just build websites' },
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
            <div className=' hero-section' data-aos='fade-up' >
                <div className='hero-section-item'>
                    <motion.div className='section'
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='secure-it'>Secure Your It Services!</p>
                        <h1 className='color font hero-font'>Welcome to visit our website</h1>
                    </motion.div>
                    <motion.div className='slogun'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h3 className='font'>Develope your2thought</h3>
                    </motion.div>
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
            <div className='hero-section' data-aos='fade-up'>
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
            <div className='contact-btn topex-2' data-aos='fade-left'>
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
            
            {/*   */}
            </div>
            <div className='topex-2' data-aos='fade-right'>
                <h1 className='color font hero-font copyright  '>More Than 24+ Years Experience<br /> We Provide <span className='span'>IT Services</span></h1>
                <p className='quote-1 font copyright'>Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic. Holisticly restore real time resources whereas standardized networks.</p>
                <div className='it-services '>
                    <div className='experience-field'>
                        <p>Web Development</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '25%' }}></div>
                            <p>25%</p>
                        </div>
                        <p className='topex'>E-Commerce Excutive</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '75%' }}></div>
                            <p>75%</p>
                        </div>
                        <p className='topex'>Software Development</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '100%' }}></div>
                            <p>100%</p>
                        </div>
                        <p className='topex'>Digital Marketing</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '65%' }}></div>
                            <p>65%</p>
                        </div>
                        <p className='topex'>Search Engine Marketing</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '40%' }}></div>
                            <p>40%</p>
                        </div>
                    </div>
                    <div className='experience-field'>
                        <p>CMS Tool</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '20%' }}></div>
                            <p>20%</p>
                        </div>
                        <p className='topex'>Costom Design</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '65%' }}></div>
                            <p>65%</p>
                        </div>
                        <p className='topex'>Web design</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '70%' }}></div>
                            <p>70%</p>
                        </div>
                        <p className='topex'>Magneto Website</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '95%' }}></div>
                            <p>95%</p>
                        </div>
                        <p className='topex'>Costom Website</p>
                        <div className='progress-bar'>
                            <div className='fill-border topex' style={{ width: '100%' }}></div>
                            <p>100%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='topex-2' data-aos='fade-up'>
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
                        <div className='grid-border topex-2' data-aos='zoom-in' key={services.id}>
                            <div className='img-aspect'>
                                <img className='services-img-add' src={services.Img} />
                            </div>
                            <div className='img-aspect-1'>
                                <h3 className='copyright p-bg'>{services.title}</h3>
                                <p className='font   p-bg'>{services.description}</p>
                                <p className='copyright secure-it font p-bg'>Read More</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HeroSection