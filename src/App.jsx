
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
function App() {
  return (
    <>
    {/* Find the path value is here */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
