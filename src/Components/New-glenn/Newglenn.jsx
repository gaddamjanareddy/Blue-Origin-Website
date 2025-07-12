import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Newglenn.css"
import newGlennData from "./NewglennData.jsx"
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from 'react-router-dom'

const Newglenn = () => {

   useEffect(() => {
      AOS.init({
        duration: 3000,  
        once: true        
      });
    },[])
  return (
    <>
    <header>
    <Navbar/>
    </header>
    <main className="newglenn-main-container" >
      {/* hero section */}
      <section className="newglenn-hero-section" id='newglenn-hero-section'>
        <div className="newglenn-hero-container"
        style={{backgroundImage: `url(${newGlennData.hero.backgroundImage})`}}>
          <div className="newglenn-hero-titles-container" data-aos="fade-up">
            <h3 className="newglenn-hero-title">{newGlennData.hero.title} </h3>
          <h1 className="newglenn-hero-subtitle">{newGlennData.hero.subtitle}</h1>
          </div>
        </div>
      </section>

      {/* newglenn section-1 */}
      <section className="newglenn-section-1">
        <div className="newglenn-section-1-container">
          <div className="newglenn-section-1-text-container">
            <h1 className="newglenn-section-1-text">New Glenn is our giant, reusable rocket built for bigger things.</h1>
          </div>
          <div className="newglenn-section-1-btn-container">
          <NavLink to="/shop"><button className="neglenn-section-1-btn">GO TO SHOP </button></NavLink>
          </div>
        </div>
      </section>

      {/* newglenn section-2 */}
      <section className="newglenn-section-2">
        <div className="newglenn-section-2-container" style={{backgroundImage:`url(${newGlennData.section2.image})`}} >
        <div className="newglenn-section-2-text-container" data-aos="fade-up">
        <h1 className="newglenn-section-2-title-1">LATEST FLIGHT</h1>  
        <h1 className="newglenn-section-2-title-2">NG-1</h1>
        <a href="#newglenn-hero-section"><button className="newglenn-section-2-btn">WATCH THE REPLAY</button></a>
        </div>
        </div>
        </section>

        {/* newglenn section-3 */}
        {newGlennData && newGlennData.section3.map((rockets, index) => 
          (
            <section key={index} className="newglenn-section-3">
          <div className={`newglenn-section-3-container${index % 2 === 0 ? 'even': 'odd'}`}>
            {index % 2 == 0 ? (
              <div className="newglenn-section-3-content-div" id="newglenn-section-3-content-div">
              <div className="newglenn-section-3-img-container">
              <img src={rockets.image} alt="" id={rockets.id} className='newglenn-section-3-img'/>
              </div>
              <div className="newglenn-section-3-content-text-container">
                <h1 className="newglenn-section-3-content-title-1">{rockets.title}</h1>
                <p className="newglenn-section-3-content-text">{rockets.text}</p>
              </div>
            </div>):(
              <div className="newglenn-section-3-content-div" id="newglenn-section-3-content-div">
              <div className="newglenn-section-3-content-text-container">
                <h1 className="newglenn-section-3-content-title-1">{rockets.title}</h1>
                <p className="newglenn-section-3-content-text">{rockets.text}</p>
              </div> 
              <div className="newglenn-section-3-img-container">
              <img src={rockets.image} alt="" id={rockets.id} className='newglenn-section-3-img'/>
              </div>
            </div>
            )}
          </div>
        </section>
        ))}
        
    </main>
    <footer>
    <Footer/>  
    </footer> 
    </>
  )
}

export default Newglenn
