import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./Bluemoon.css"
import bluemoonData from './BluemoonData'
import AOS from "aos";
import "aos/dist/aos.css";

const Bluemoon = () => {
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
    <main className="bluemoon-main-container" >
      {/* hero section */}
      <section className="bluemoon-hero-section" id='bluemoon-hero-section'>
        <div className="bluemoon-hero-container"
        style={{backgroundImage: `url(${bluemoonData.hero.backgroundImage})`}}>
          <div className="bluemoon-hero-titles-container" data-aos="fade-up">
            <h3 className="bluemoon-hero-title">{bluemoonData.hero.title} </h3>
          <h1 className="bluemoon-hero-subtitle">{bluemoonData.hero.subtitle}</h1>
          <p className="bluemoon-hero-text">{bluemoonData.hero.text}</p>
          </div>
        </div>
      </section>

      {/* bluemoon section-1 */}
      <section className="bluemoon-section-1">
        <div className="bluemoon-section-1-container">
          <div className="bluemoon-section-1-text-container">
            <h1 className="bluemoon-section-1-text">{bluemoonData.section1.heading}</h1>
          </div>
        </div>
      </section>
        {/* bluemoon section-2 */}
        {bluemoonData && bluemoonData.section2.map((moon, index) => 
          (
            <section key={index} className="bluemoon-section-2">
          <div className={`bluemoon-section-2-container${index % 2 === 0 ? 'even': 'odd'}`}>
            {index % 2 !== 0 ? (
              <div className="bluemoon-section-2-content-div" id="bluemoon-section-2-content-div">
              <div className="bluemoon-section-2-img-container">
              <img src={moon.image} alt="" id={moon.id} className='bluemoon-section-2-img'/>
              </div>
              <div className="bluemoon-section-2-content-text-container">
                <h1 className="bluemoon-section-2-content-title-1">{moon.title}</h1>
                <p className="bluemoon-section-2-content-text">{moon.text}</p>
                <div className='bluemoon-section-2-content-btn-container'>
                <a href="#bluemoon-hero-section"><button className="bluemoon-section-2-content-btn">{moon.btn}</button></a>
                </div>
              </div>
            </div>):(
              <div className="bluemoon-section-2-content-div" id="bluemoon-section-2-content-div">
              <div className="bluemoon-section-2-content-text-container">
                <h1 className="bluemoon-section-2-content-title-1">{moon.title}</h1>
                <p className="bluemoon-section-2-content-text">{moon.text}</p>
                <div className='bluemoon-section-2-content-btn-container'>
                <a href="#bluemoon-hero-section"><button className="bluemoon-section-2-content-btn">{moon.btn}</button></a>
                </div>
              </div> 
              <div className="bluemoon-section-2-img-container">
              <img src={moon.image} alt="" id={moon.id} className='bluemoon-section-2-img'/>
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

export default Bluemoon
