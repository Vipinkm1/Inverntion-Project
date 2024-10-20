import React from 'react'
import HeroSection from '../Hero/HeroSection'
import Services from '../Services/Services'


const Home = () => {
  return (
    <>
        <div className='page'>
            <HeroSection/>
            <Services/>
        </div>
    </>
  )
}
export default Home