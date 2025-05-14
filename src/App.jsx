import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Myproject from './Pages/Myproject';
import LetsTalk from './Pages/LetsTalk';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

    AOS.init();
    
  return (
    <>
     <div className='mx-2'>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/skills' element={<Skill />}></Route>
              <Route path='/myproject' element={<Myproject/>}></Route>
              <Route path='/letstalk' element={<LetsTalk/>}></Route>
           </Routes>
        </BrowserRouter>
     </div>
    </>
  )
}

export default App