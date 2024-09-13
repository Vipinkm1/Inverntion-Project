import React from 'react'
import Header from '../Header/Header'
import HeroSection from '../Hero/HeroSection'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import Member from '../Member/Member'


const Home = () => {
  return (
    <>
        <div className='page'>
           <Header/>
            <HeroSection/>
            <Services/>
            <Member/>
          <Footer/>
     
        </div>
    </>
  )
}

export default Home