import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import SearchIcon from "../../images/SearchIcon.png";
import facebook from "../../images/facebook1.png";
import twitter from "../../images/twitter1.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import linkedin from "../../images/linkedin1.png";

const Menu = () => {
  return (
    <>
      <div className="navbar__content nav__hide">
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
       <li> <img src={SearchIcon} alt="search" /></li>
      </div>
      <div className="navbar-icons">
        <img src={facebook} className="icons" />
        <img src={twitter} className="icons" />
        <img src={linkedin} className="icons" />
      </div>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar__wrapper">
        <div className="navbar__image">
          <img src={logo} alt="logo" className="logo" />
        </div>
      <div className="navbar-container">
        <Menu />
      </div>
      {toggleMenu ? (
        <RiCloseLine
          color="#fff"
          size={34}
          onClick={() => setToggleMenu(false)}
          style={{zIndex:'101'}}
          className="hide"
        />
      ) : (
        <RiMenu3Line
          color="#fff"
          size={34}
          onClick={() => setToggleMenu(true)}
          style={{zIndex:'101'}}
          className="hide"
        />
      )}
      {toggleMenu && (
        <div className="khushi slide-left">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
