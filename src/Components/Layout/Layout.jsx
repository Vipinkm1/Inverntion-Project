import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';


const Layout = ({children}) => {
  const location = useLocation()
  const hideHeaderFooter = ['/signup']
  const shouldhideHeaderFooter = hideHeaderFooter.includes(location.pathname)
  return (
    <div className=''>
     {!shouldhideHeaderFooter && <Header />}
      <main>
        {children}
      </main>
      {!shouldhideHeaderFooter && <Footer/>}
    </div>
  )
}
export default Layout