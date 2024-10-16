
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'

function App() {
  return (
    <>
    {/* Find the path value is here */}
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ='/contact' element={<Contact/>} />
      
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}
export default App