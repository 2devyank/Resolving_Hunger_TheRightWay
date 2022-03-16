import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Foot } from './component/Foot';
import { Navba } from './component/Navba';
import Donor from './Pages/Donor';
import Home from './Pages/Home';
import Volun from './Pages/Volunteer';
function App(){

  return (
    <BrowserRouter>
   
      <Navba />
      <Routes>
        <Route path="/donor" element={<Donor />} exact />
        <Route path="/" element={<Home />} exact />
      
       <Route path="/vol" element={<Volun />} exact />
        {/* <Route path="/profile" element={<Profile />} exact /> */}
        {/* <Route path="/club" element={<Club />} exact /> */}
      </Routes>
      <Foot />
    
  </BrowserRouter>
   
  )
      }


export default App
