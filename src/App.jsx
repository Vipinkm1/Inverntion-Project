
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Layout from './Components/Layout/Layout'
import Services from './Components/Services/Services'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import Blog from './Components/Blog/Blog'
import BlogDetail from './Components/BlogDetail/BlogDetail'
import { CartProvider } from './Components/Context/CreateContext'
function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog-detail' element={<BlogDetail />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App
