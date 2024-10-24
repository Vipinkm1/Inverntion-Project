import React, { useEffect, useState } from 'react'
import Banner1 from '../../assets/aboutus/about-banner.jpg'
import Lottie from 'lottie-react'
import Animation from '../../assets/aboutus/aboutani.json'
import { ImCheckboxChecked } from 'react-icons/im'
import { GrDocumentPerformance } from "react-icons/gr";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import { LiaAwardSolid } from "react-icons/lia";
import Digi from '../../assets/service/digital-marketing-services.jpeg'

const About = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)

    useEffect(() => {
        const projectInterval = setInterval(() => {
            setCount1(prev => {
                if (prev >= 54) {
                    clearInterval(projectInterval);
                    return prev;
                }
                return prev + 1;
            })
        }, 54);
        const projectInterval2 = setInterval(() => {
            setCount2(prev => {
                if (prev >= 56) {
                    clearInterval * (projectInterval2);
                    return prev;
                }
                return prev + 1;
            })
        }, 56)
        const projectInterval3 = setInterval(() => {
            setCount3(prev => {
                if (prev >= 30) {
                    clearInterval(projectInterval3);
                    return prev;
                }
                return prev + 1;
            })
        }, 30)

        const projectInterval4 = setInterval(() => {
            setCount4(prev => {
                if (prev > 130) {
                    clearInterval(projectInterval4);
                    return prev;
                }
                return prev + 1;
            })
        }, 130)
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
                <div className='project-completion'>
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
                <div className='team-member'>
                    <h2 className='topex'>Meet Our Team</h2>
                    <h1 className='color font  topex'>See Our Skilled <span className='span'> Expert Team</span></h1>
                    <div className='team-img topex'>
                        <div className='team-img-1'>
                            <img className='team' src={Digi} />
                            <div className='content-container-1'>
                                <h2>Atma Kumar</h2>
                                <p className='topex'>Web Developer</p>
                            </div>
                        </div>
                        <div className='team-img-1'>
                            <img className='team' src={Digi} />
                            <div className='content-container-1'>
                                <h2>Bhoot Kumar</h2>
                                <p className='topex'> Web Developer</p>
                            </div>
                        </div>
                        <div className='team-img-1'>
                            <img className='team' src={Digi} />
                            <div className='content-container-1'>
                                <h2>Saitan Kumar</h2>
                                <p className='topex'>Web Developer</p>
                            </div>
                        </div>
                        <div className='team-img-1'>
                            <img className='team' src={Digi} />
                            <div className='content-container-1'>
                                <h2>Rakshita Kumar</h2>
                                <p className='topex'>Web Developer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About