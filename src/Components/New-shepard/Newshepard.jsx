import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Newshepard.css'
import { Outlet, NavLink } from "react-router-dom";
import pauseIcon from '../../assets/icons/pause-button.png'
import playIcon from '../../assets/icons/play-button.png'
import RocketData from './newshepard.json'
import AOS from "aos";
import "aos/dist/aos.css";


const Newshepard = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,  
      once: true        
    });
  },[])

  const videoRef = useRef(null);
  const [isplaying, setIsPlaying] =  useState(false)

  const handlePlay = () => {
    const video = videoRef.current;

    if (video){
      if(isplaying){
        video.play();
      }
      else{
        video.pause();
      }
      setIsPlaying( !isplaying);
    }
  };

  return (
    <>
    <header>
    <Navbar/>
    </header>
    <main className="newshepard-main">

      {/* video section goes here */}
        <section className="video-container">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            tabIndex="-1"
          >
            <source
              src="https://d1o72l87sylvqg.cloudfront.net/blue-origin/New%20Shepard_Website%20Page_Update_2023_V2_10mb.mp4"
              type="video/mp4"
            />
          </video>

          <div className="video-content" data-aos="fade-up">
            <h1>NEW SHEPARD</h1>
            <NavLink to='/Flytospace'>
              <button className="new-shepard-btn">FLY TO SPACE</button>
            </NavLink>
          </div>
          <button className="play-button" onClick={handlePlay}><img
              src={isplaying ? playIcon : pauseIcon}
              alt={isplaying ? 'Pause' : 'Play'}
              className="play-icon"
            /></button>
        </section>

        {/* hero section goes here */}
        <section className="new-shepard-hero-section">
        <div className="new-shepard-hero-container" >
        <div className="new-shepard-hero-text" data-aos="fade-up">
        <h1 className="new-shepard-hero-title-1">NS-32</h1>
        <button className="btn">WATCH THE REPLAY</button>
        </div>
        </div>
        </section>

        <section className="meet-new-shepard-section">
          <div className="meet-new-shepard-container">
            <h1 className="meet-new-shepard-title">Meet New Shepard</h1>
            <div className="meet-new-shepard-content-container">
              <p className="meet-new-shepard-content">All rockets take off; not all rockets land. Named after astronaut Alan Shepard, the first American in space, New Shepard is Blue Origin’s fully reusable, suborbital rocket system built for human flight from the beginning. During the 11-minute journey, astronauts soar past the Kármán line (100 km/62 miles), the internationally recognized boundary of space, experiencing several minutes of weightlessness and witnessing life-changing views of Earth. The vehicle is fully autonomous—there are no pilots.</p>
            </div>
          </div>
        </section>

        <section className="new-shepard-rocket-section">
          <div className="new-shepard-rocket-container">
            <div className="new-shepard-rocket-container-left">
              <img src="https://www.blueorigin.com/_next/image?url=https%3A%2F%2Fd1o72l87sylvqg.cloudfront.net%2Fblue-origin%2Fnewshepard-specs_vessel.png&w=1920&q=75" alt="Rocket"/>
            </div>
            <div className="new-shepard-rocket-container-right" >
            {RocketData && RocketData.map((Rocketpart) => {
            return(
              
              <div className="new-shepard-rocket-container-right-data" key={Rocketpart.id}>
                <h1 className="rocket-part-title">{Rocketpart.title}</h1>
                <p className="rocket-part-description">{Rocketpart.description} </p>
              </div>
              
            
            );
            })}
            </div>
            
          </div>
        </section>


    </main>
    <footer>
    <Footer/>  
    </footer> 
    </>
  )
}

export default Newshepard
