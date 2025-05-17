import React, { useEffect, useState } from 'react'
import Banner1 from '../../assets/aboutus/about-banner.jpg'
import AboutImage from '../../assets/13017.jpg'
import { ImCheckboxChecked } from 'react-icons/im'
import { GrDocumentPerformance } from "react-icons/gr";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import { LiaAwardSolid } from "react-icons/lia";
import Digi from '../../assets/service/digital-marketing-services.jpeg';
import WebDv from '../../assets/aboutus/web-developer.jpg';
import DigiMar from '../../assets/aboutus/digital-marketing.jpg'
import { useNavigate } from 'react-router-dom';
import CustomWeb from '../../assets/aboutus/custom-web.jpg'
import SoftwareDev from '../../assets/aboutus/software-dev.jpg'



const About = () => {
    const navigate = useNavigate()
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const services = [
        { id: 1, Img: WebDv, title: 'Web Development', name: 'Vipin Kumar' },
        { id: 2, Img: CustomWeb, title: 'Software Development', name: 'Priyanshu Kumar ' },
        { id: 3, Img: DigiMar, title: 'Digital Marketing', name: 'Krishna Pratap' },
        { id: 4, Img: SoftwareDev, title: 'Costom Website', name: 'Akashay Kalvar' },
    ]
    useEffect(() => {
        const projectInterval = setInterval(() => {
            setCount1(prev => {
                if (prev >= 54) {
                    clearInterval(projectInterval);
                    return prev;
                }
                return prev + 1;
            })
        }, 10);
        const projectInterval2 = setInterval(() => {
            setCount2(prev => {
                if (prev >= 56) {
                    clearInterval * (projectInterval2);
                    return prev;
                }
                return prev + 1;
            })
        }, 10)
        const projectInterval3 = setInterval(() => {
            setCount3(prev => {
                if (prev >= 30) {
                    clearInterval(projectInterval3);
                    return prev;
                }
                return prev + 1;
            })
        }, 10)
        const projectInterval4 = setInterval(() => {
            setCount4(prev => {
                if (prev > 30) {
                    clearInterval(projectInterval4);
                    return prev;
                }
                return prev + 1;
            })
        }, 10)
        return () => {
            clearInterval(projectInterval);
            clearInterval(projectInterval2);
            clearInterval(projectInterval3);
            clearInterval(projectInterval4);
        }
    })
    return (
        <div className='about-container'>
            <div className=''>
                <img className='about-banner-img' src={Banner1} />
            </div>
            <div className='about-page topex'>
                <div className='about-section'>
                    <img src={AboutImage} className='about-image' />
                    <div className='some-about-content'>
                        <h1 className='color font hero-font'>About Invention <span className='span'>IT Solution</span></h1>
                        <p className=' quote-1 font '>An invention service provider website is a platform designed to assist inventors in developing, protecting, and commercializing their ideas. These websites often offer a variety of services to help inventors bring their concepts to life and navigate the process of patenting, prototyping, and marketing. Below is an outline of what such a website might include:</p>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>A secure form for inventors to share details about their ideas or inventions.</p>
                        </div>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>Services for patent research, drafting, and filing.</p>
                        </div>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>Insights into market trends, potential customer bases, and competition.</p>
                        </div>
                        <div className='checkbox-flex topex'>
                            <ImCheckboxChecked />
                            <p className='quote-2 font'>Dramatically re-engineer value added IT systems via mission</p>
                        </div>
                        <div className='btns'>
                            <button className='button-1 font' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/about') }}>Discover More</button>
                        </div>
                    </div>
                </div>
                <div className='project-completion topex-2'>
                    <div className='project-completion-item'>
                        <div className='project-item-list'>
                            <GrDocumentPerformance className='icon-size' />
                            <div className='project-content'>
                                <h1 className='project-content'>{count1}+</h1>
                                <p className=' topex project-content color-1'>Project Completion</p>
                            </div>
                        </div>
                        <div className='project-item-list'>
                            <TbMoodCrazyHappy className='icon-size' />
                            <div className='project-content'>
                                <h1 className='project-content'>{count2}+</h1>
                                <p className=' topex project-content color-1'>Happy Clients</p>
                            </div>
                        </div>
                        <div className='project-item-list'>
                            <GrUserExpert className='icon-size' />
                            <div className='project-content'>
                                <h1 className='project-content'>{count3}+</h1>
                                <p className=' topex project-content color-1'>Skilled Expert</p>
                            </div>
                        </div>
                        <div className='project-item-list'>
                            <LiaAwardSolid className='icon-size' />
                            <div className='project-content'>
                                <h1 className='project-content'>{count4}+</h1>
                                <p className=' topex project-content color-1'>Honorable Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-template-hel topex-2'>
                    {services.map((services) => (
                        <div className='grid-border topex-2' data-aos='zoom-in' key={services.id}>
                            <div className='img-aspect'>
                                <img className='services-img-add' src={services.Img} />
                            </div>
                            <div className='img-aspect-1'>
                                <h3 className='copyright p-bg'style={{textAlign: 'center'}}>{services.title}</h3>
                                <p className='font p-bg'>{services.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default About