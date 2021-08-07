import React, { useState } from "react";
import "./navbar.css";
import {makeStyles} from '@material-ui/core' ;
import logo from "../../images/logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
logo :{
maxWidth : 30
},
hamberger : {
color : "black"
},
}) ;

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const classes = useStyles();
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <img src={logo} alt="logo" className={classes.logo} />
        
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/Men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/Women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/Accessories">Accessories</NavLink>
            </li> <br/><br/>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
         

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu className = {classes.hamberger} />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;