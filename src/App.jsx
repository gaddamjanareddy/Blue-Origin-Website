import React, { } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer'
import "./App.css"
import Bluemoon from './Components/Blue-moon/Bluemoon';
import Bluering from './Components/Blue-Ring/Bluering';
import Destinations from './Components/Destinations/Destinations';
import Engines from './Components/Engines/Engines';
import Newglenn from './Components/New-glenn/Newglenn';
import Newshepard from './Components/New-shepard/Newshepard';
import Shop from './Components/shop/Shop'
import Flytospace from './Components/Fly-to-space/Flytospace';




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} ></Route>
      <Route path="/Newshepard" element={<Newshepard/>}></Route>
      <Route path="/Newglenn" element={<Newglenn/>}></Route>
      <Route path="/Bluemoon" element={<Bluemoon/>}></Route>
      <Route path="/Bluering" element={<Bluering/>}></Route>
      <Route path="/Engines" element={<Engines/>}></Route>
      <Route path="/Destinations" element={<Destinations/>}></Route>
      <Route path="/Shop" element={<Shop/>}></Route>


      <Route path="/Flytospace" element={<Flytospace/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
