import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="nav center" >
      <p className="logo">Welcome</p>
      <ol className="center">
        <Link to="/home">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ol>
    </header>
  );
};

export default NavBar;
