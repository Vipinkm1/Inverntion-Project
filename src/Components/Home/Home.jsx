import React from 'react'

import HeroSection from '../Hero/HeroSection'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'



const Home = () => {
  return (
    <>
        <div className='page'>
            <HeroSection/>
            <Services/>
            <Footer/>

        </div>
    </>
  )
}
export default Home