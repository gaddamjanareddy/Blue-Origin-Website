import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Engines.css'
import EnginesData from './EnginesData'
import AOS from "aos";
import "aos/dist/aos.css";

const Engines = () => {
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
    <main className="engines-main-container" >
      {/* hero section */}
      <section className="engines-hero-section" id='engines-hero-section'>
        <div className="engines-hero-container"
        style={{backgroundImage: `url(${EnginesData.hero.backgroundImage})`}}>
          <div className="engines-hero-titles-container" data-aos="fade-up">
            <h3 className="engines-hero-title">{EnginesData.hero.title} </h3>
          <h1 className="engines-hero-subtitle">{EnginesData.hero.subtitle}</h1>
          <div className="engines-hero-btn-container">
            <button className="engines-hero-btn">{EnginesData.hero.btn}</button>
          </div>
          </div>
        </div>
      </section>

      {/* engines section-1 */}
      <section className="engines-section-1">
        <div className="engines-section-1-container">
          <div className="engines-section-1-heading-container">
            <h1 className="engines-section-1-heading">{EnginesData.section1.heading}</h1>
            <h1 className="engines-section-1-subheading">{EnginesData.section1.subheading}</h1>
            <div className="engines-section-1-text-container">
            <p className="engines-section-1-text">{EnginesData.section1.text1}</p>
            <p className="engines-section-1-text">{EnginesData.section1.text2}</p>
            </div>
          </div>
        </div>
      </section>
        {/* engines section-2 */}
        {EnginesData && EnginesData.section2.map((engine, index) => 
          (
            <section key={index} className="engines-section-2">
          <div className={`engines-section-2-container${index % 2 === 0 ? 'even': 'odd'}`}>
            {index % 2 == 0 ? (
              <div className="engines-section-2-content-div" id="engines-section-2-content-div">
              <div className="engines-section-2-img-container">
              <img src={engine.image} alt="" id={engine.id} className='engines-section-2-img'/>
              </div>
              <div className="engines-section-2-content-text-container">
                <h1 className="engines-section-2-content-title">{engine.title}</h1>
                <h1 className="engines-section-2-content-subtitle">{engine.subtitle}</h1>
                <p className="engines-section-2-content-text">{engine.text}</p>
                <div className='engines-section-2-content-btn-container'>
                <a href="#engines-hero-section"><button className="engines-section-2-content-btn">{engine.btn}</button></a>
                </div>
              </div>
            </div>):(
              <div className="engines-section-2-content-div" id="engines-section-2-content-div">
              <div className="engines-section-2-content-text-container">
                <h1 className="engines-section-2-content-title">{engine.title}</h1>
                <h1 className="engines-section-2-content-subtitle">{engine.subtitle}</h1>
                <p className="engines-section-2-content-text">{engine.text}</p>
                <div className='engines-section-2-content-btn-container'>
                <a href="#engines-hero-section"><button className="engines-section-2-content-btn">{engine.btn}</button></a>
                </div>
              </div> 
              <div className="engines-section-2-img-container">
              <img src={engine.image} alt="" id={engine.id} className='engines-section-2-img'/>
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

export default Engines
