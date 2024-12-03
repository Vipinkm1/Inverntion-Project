import React from 'react';
import About from '../../assets/aboutus/about-banner.jpg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import Profile from '../../assets/service/33395.jpg';
import { FcRating } from "react-icons/fc";


const Services = () => {
    
    return (
        <div className='about-container '>
            <div className=''>
                <img className='about-banner-img' src={About} />
            </div>
            <div className='page'>
                <div className='service-container topex-2'>
                    <div className='service-image-1'>
                        <h1 className='color font hero-font'>We are no. 1 internet service provider company in United States.</h1>
                        <p className='font-size-1 topex'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                        <p className='font-size-1 topex'>Developing tailored, responsive, and user-friendly websites to meet unique business needs.</p>
                        <p className='font-size-1 topex'>Creating visually stunning and interactive interfaces using modern tools and technologies.</p>
                        <p className='font-size-1 topex'>Designing intuitive user experiences with clean, modern interfaces for web and mobile platforms.</p>
                        <p className='font-size-1 topex'>Providing ongoing maintenance, updates, and technical support to keep websites running smoothly.</p>
                    </div>
                    <div className='services-container-1'>
                        <h1 className='color font hero-font background-Remover'>All Services</h1>
                        <div className='border-6 topex'></div>
                        <div className='flex-row-col topex'>
                            <div className='service-container-2'>
                                <p className='service-title'>Web Development</p>
                                <IoIosArrowRoundForward className='forward-icon' />
                            </div>
                            <div className='service-container-2'>
                                <p className='service-title'>Web Design</p>
                                <IoIosArrowRoundForward className='forward-icon' />
                            </div>
                            <div className='service-container-2'>
                                <p className='service-title'>Mobile Development</p>
                                <IoIosArrowRoundForward className='forward-icon' />
                            </div>
                            <div className='service-container-2'>
                                <p className='service-title'>Search Engine Optimization</p>
                                <IoIosArrowRoundForward className='forward-icon' />
                            </div>
                            <div className='service-container-2'>
                                <p className='service-title'>Branding</p>
                                <IoIosArrowRoundForward className='forward-icon' />
                            </div>
                            <div className='service-container-2'>
                                <p className='service-title'>Digital Marketing</p>
                                <IoIosArrowRoundForward className='forward-icon' />
                            </div>
                            <div className='service-container-2'>
                                <p className='service-title'>AWS Services</p>
                                <IoIosArrowRoundForward className='forward-icon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='support-item topex-2'>
                    <div className='support-center'>
                        <MdOutlineSupportAgent className='support-icon' />
                        <p className='font-size-1'>Costomer Support</p>
                    </div>
                    <div className='support-center'>
                        <MdOutlineSupportAgent className='support-icon' />
                        <p className='font-size-1'>Costomer Support</p>
                    </div>
                    <div className='support-center'>
                        <MdOutlineSupportAgent className='support-icon' />
                        <p className='font-size-1'>Costomer Support</p>
                    </div>
                    <div className='support-center'>
                        <MdOutlineSupportAgent className='support-icon' />
                        <p className='font-size-1'>Costomer Support</p>
                    </div>
                </div>
                {/*  testimonial */}
                <div className='testimonial-1 topex-2'>
                    <h3 className='font copyright secure-it'>Client Testimonials</h3>
                    <h1 className='color font hero-font copyright  '>What They’re <span className='span'>Talking?</span></h1>
                    <div className='testimonial checkbox-flex topex-2'>
                        <div className=''>
                            <div className='test-1'>
                                <div className='img-profile checkbox-flex'>
                                    <img src={Profile} className='profile-size-1' />
                                    <div className=''>
                                        <p>Vipin Kumar</p>
                                        <p>Software Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='test-2'>
                                <div className='rating'>
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                </div>
                                <p className='font-size-1 topex'>
                                    Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider.										</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='test-1'>
                                <div className='img-profile checkbox-flex'>
                                    <img src={Profile} className='profile-size-1' />
                                    <div className=''>
                                        <p>Vipin Kumar</p>
                                        <p>Software Developer</p>
                                    </div>
                                </div>

                            </div>
                            <div className='test-2'>
                                <div className='rating'>
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                </div>
                                <p className='font-size-1 topex'>
                                    Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider.										</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='test-1'>
                                <div className='img-profile checkbox-flex'>
                                    <img src={Profile} className='profile-size-1' />
                                    <div className=''>
                                        <p>Vipin Kumar</p>
                                        <p>Software Developer</p>
                                    </div>
                                </div>

                            </div>
                            <div className='test-2'>
                                <div className='rating'>
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                    <FcRating />
                                </div>
                                <p className='font-size-1 topex'>
                                    Infetech is a professional IT Company that always creates quality software for clients. If you are looking for a team of talent developers to find out the best IT solutions, Infetech is a company that your team should consider.										</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='jatu'>
                </div>
            </div>
        </div>
    )
}
export default Services