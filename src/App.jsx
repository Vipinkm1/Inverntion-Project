
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Layout from './Components/Layout/Layout'
import Services from './Components/Services/Services'

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ='/contact' element={<Contact/>} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App
