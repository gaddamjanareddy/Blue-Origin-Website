import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Bluering.css'
import blueringData from './BlueringData'
import AOS from "aos";
import "aos/dist/aos.css";

const Bluering = () => {

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
    <main className="bluering-main-container" >
      {/* hero section */}
      <section className="bluering-hero-section">
        <div className="bluering-hero-container"
        style={{backgroundImage: `url(${blueringData.hero.backgroundImage})`}}>
          <div className="bluering-hero-titles-container" data-aos="fade-up">
            <h3 className="bluering-hero-title">{blueringData.hero.title} </h3>
          <h1 className="bluering-hero-subtitle">{blueringData.hero.subtitle1}</h1>
          <h1 className="bluering-hero-subtitle">{blueringData.hero.subtitle2}</h1>
          </div>
        </div>
      </section>

      {/* Bluering section-1 */}
      <section className="bluering-section-1">
        <div className="bluering-section-1-container">
          <div className="bluering-section-1-text-container">
            <h1 className="bluering-section-1-heading">{blueringData.section1.heading}</h1>
            <p className="bluering-section-1-text">{blueringData.section1.text}</p>
          </div>
        </div>
      </section>

      {/* Bluering section-2 */}
      <section className="bluering-section-2">
        <div className="bluering-section-2-container" style={{backgroundImage:`url(${blueringData.section2.image})`}} >
        </div>
        </section>

        {/* Bluering section-3 */}
        {blueringData && blueringData.section3.map((satellite, index) => 
          (
            <section key={index} className="bluering-section-3">
          <div className={`bluering-section-3-container${index % 2 === 0 ? 'even': 'odd'}`}>
            {index % 2 !== 0 ? (
              <div className="bluering-section-3-content-div" id="bluering-section-3-content-div">
              <div className="bluering-section-3-img-container">
              <img src={satellite.image} alt="" id={satellite.id} className='bluering-section-3-img'/>
              </div>
              <div className="bluering-section-3-content-text-container">
                <h1 className="bluering-section-3-content-title-1">{satellite.title}</h1>
                <p className="bluering-section-3-content-text">{satellite.text}</p>
              </div>
            </div>):(
              <div className="bluering-section-3-content-div" id="bluering-section-3-content-div">
              <div className="bluering-section-3-content-text-container">
                <h1 className="bluering-section-3-content-title-1">{satellite.title}</h1>
                <p className="bluering-section-3-content-text">{satellite.text}</p>
              </div> 
              <div className="bluering-section-3-img-container">
              <img src={satellite.image} alt="" id={satellite.id} className='bluering-section-3-img'/>
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

export default Bluering