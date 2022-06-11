import { React, useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [ShowNavbar, SetShowNavbar] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 480) {
      SetShowNavbar(false)
    } else {
      SetShowNavbar(true)
    }
  }, [])


  const ShowHandler = () => {
    if (window.innerWidth < 480) {
      if (ShowNavbar) {
        SetShowNavbar(false)
      } else {
        SetShowNavbar(true)
      }
    }
  }

  return (
    <header className="nav center">
      <p className="logo">Welcome</p>
      <div className="hamburgericon">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {ShowNavbar && <ol className="center">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ol>}
      {ShowNavbar === false && isOpen === true && <ol className="center">
        <NavLink to="/home" onClick={()=> setOpen(false)}>Home</NavLink>
        <NavLink to="/work" onClick={()=> setOpen(false)}>Work</NavLink>
        <NavLink to="/about" onClick={()=> setOpen(false)}>About</NavLink>
        <NavLink to="/contact" onClick={()=> setOpen(false)}>Contact</NavLink>
      </ol>}
    </header>
  );
};

export default NavBar;
