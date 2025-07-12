import React, { useEffect } from "react";
import "./Hero.css";
import data from "./HeroData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const Hero = () => {
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
    {data && data.map((page) => {
      console.log("data:",data,"page:",page.title1);
     return( 
      <div className="hero-container" id={`hero-container-${page.id+1}`} key={page.id}>
        <div className="hero-text" data-aos="fade-up">
        <h1 className="hero-title-1">{page.title1}</h1>
        <h1 className="hero-title-2">{page.title2}</h1>
        <div className="btn-div"><NavLink to={page.path}><button className="btn">{page.btn}</button></NavLink>
        {page.btn2 && <NavLink to={page.path2}><button className="btn">{page.btn2}</button></NavLink>}
        </div>
        </div>
      </div>
      );
    })}

    <footer>
    <Footer/>  
    </footer>

    
    </>
  );
};

export default Hero;
