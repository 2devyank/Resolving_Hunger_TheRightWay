import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Foot } from './component/Foot';
import Navba from './component/Navba';
import Donor from './Pages/Donor';
import Home from './Pages/Home';
import NGOs from './Pages/NGOs';
import Volunteer from './Pages/Volunteer';
// import  {Foot } from './component/Foot.jsx';
// import  {Navba as Navba}  from './component/Navba.jsx';
// import Donor from './Pages/Donor.jsx';
// import Home from './Pages/Home.jsx';
// import Volun from './Pages/Volunteer.jsx';
function App(){

  return (
    
    <BrowserRouter>
<Navba/>
    <div>
<Routes>

  <Route  path="/" element={<Home />} exact/>
  <Route  path="/donor" element={<Donor />} exact/>
  <Route  path="/volun" element={<Volunteer />} exact/>
  <Route  path="/org" element={<NGOs />} exact/>

</Routes>
   </div>
<Foot/>
</BrowserRouter>
   
  )
      }


export default App
