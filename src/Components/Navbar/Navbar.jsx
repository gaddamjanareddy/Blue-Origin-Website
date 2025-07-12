import React, { useState } from "react";
import "./Navbar.css";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {!menuOpen && (
        <nav className="navbar">
          <NavLink className="left-nav" to="/" >
            <img
              src="https://d1o72l87sylvqg.cloudfront.net/blue-origin/logo-blue-origin-tagline-optimized.svg"
              alt="logo"
              style={{ height: "50px", width: "190px" }}
            />
          </NavLink>
          <div className="right-nav" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      )}

      {menuOpen && (
        <div className="floating-hamburger open" onClick={toggleMenu}>
          <span></span>
          <span></span>
        </div>
      )}

      <div className={`side-menu-left ${menuOpen ? "open" : ""}`}>
        <img
          src="https://d1o72l87sylvqg.cloudfront.net/blue-origin/logo-feather-optimized.svg"
          alt="feather"
          style={{ height: "64px", width: "125px" }}
        />
        <ul className="menu-items">
          <NavLink to="/Newshepard" className='navlink'>
            <li>NEW SHEPARD </li>
          </NavLink>
          <NavLink to="/Newglenn" className='navlink'>
            <li>NEW GLENN </li>
          </NavLink>
          <NavLink to="/Bluemoon" className='navlink'>
            <li>BLUE MOON </li>
          </NavLink>
          <NavLink to="/Bluering" className='navlink'>
            <li>BLUE RING </li>
          </NavLink>
          <NavLink to="/Engines" className='navlink'>
            <li> ENGINES </li>
          </NavLink>
          <NavLink to="/Destinations" className='navlink'>
            <li> DESTINATIONS </li>
          </NavLink>
          <NavLink to="/Shop" className='navlink'>
            <li> SHOP</li>
          </NavLink>
          
        </ul>
      </div>

        
      <div className="bottom-nav">
        
      <NavLink to="/Flytospace" className='navlink'>
        <p className='fly-to-space' > FLY TO SPACE</p>
      </NavLink>  
      </div>
      

      <Outlet />
    </>
  );
};

export default Navbar;
