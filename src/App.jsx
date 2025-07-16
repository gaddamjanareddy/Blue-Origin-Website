import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Hero = lazy(() => import('./Components/Hero/Hero'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
import "./App.css"
const Bluemoon = lazy(() => import('./Components/Blue-moon/Bluemoon'));
const Bluering = lazy(() => import('./Components/Blue-Ring/Bluering'));
const Destinations = lazy(() => import('./Components/Destinations/Destinations'));
const Engines = lazy(() => import('./Components/Engines/Engines'));
const Newglenn = lazy(() => import('./Components/New-glenn/Newglenn'));
const Newshepard = lazy(() => import('./Components/New-shepard/Newshepard'));
const Shop = lazy(() => import('./Components/shop/Shop'));
const Flytospace = lazy(() => import('./Components/Fly-to-space/Flytospace'));



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div style={{display:'flex',alignItems:'center', justifyContent:'center'}}><h1 style={{color:'#0033dd'}}>Loading...</h1></div>}>
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
    </Suspense>
    </BrowserRouter>
    
    </>
  )
}

export default App
