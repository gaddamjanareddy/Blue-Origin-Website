import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Destinations.css'
import DestinationsData from './DestinationsData'
import AOS from "aos";
import "aos/dist/aos.css";

const Destinations = () => {

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
    <main className="destinations-main-container" >
      {/* hero section */}
      <section className="destinations-hero-section">
        <div className="destinations-hero-container"
        style={{backgroundImage: `url(${DestinationsData.hero.backgroundImage})`}}>
          <div className="destinations-hero-titles-container" data-aos="fade-up">
            <h1 className="destinations-hero-title">{DestinationsData.hero.title} </h1>
          </div>
        </div>
      </section>

      {/* Destinations section-1 */}
      <section className="destinations-section-1">
        <div className="destinations-section-1-container">
          <div className="destinations-section-1-text-container">
            <h1 className="destinations-section-1-heading">{DestinationsData.section1.heading}</h1>
            <div className="destinations-section-1-text-description-container">
            <p className="destinations-section-1-text-description">{DestinationsData.section1.text1}</p>
            <p className="destinations-section-1-text-description">{DestinationsData.section1.text2}</p>
            <p className="destinations-section-1-text-description">{DestinationsData.section1.text3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations section-2 */}
      <section className="destinations-section-2">
        <div className="destinations-section-2-container" style={{backgroundImage:`url(${DestinationsData.section2.image})`}} >
        </div>
        </section>

        {/* Destinations section-3 */}
        {DestinationsData && DestinationsData.section3.map((address, index) => 
          (
            <section key={index} className="destinations-section-3">
          <div className={`destinations-section-3-container${index % 2 === 0 ? 'even': 'odd'}`}>
            {index % 2 !== 0 ? (
              <div className="destinations-section-3-content-div" id="destinations-section-3-content-div">
              <div className="destinations-section-3-img-container">
              <img src={address.image} alt="" id={address.id} className='destinations-section-3-img'/>
              </div>
              <div className="destinations-section-3-content-text-container">
                <h1 className="destinations-section-3-content-title-1">{address.title}</h1>
                <p className="destinations-section-3-content-text">{address.text}</p>
              </div>
            </div>):(
              <div className="destinations-section-3-content-div" id="destinations-section-3-content-div">
              <div className="destinations-section-3-content-text-container">
                <h1 className="destinations-section-3-content-title-1">{address.title}</h1>
                <p className="destinations-section-3-content-text">{address.text}</p>
              </div> 
              <div className="destinations-section-3-img-container">
              <img src={address.image} alt="" id={address.id} className='destinations-section-3-img'/>
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

export default Destinations
