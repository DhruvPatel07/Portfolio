import React from "react";

import "./Home.css";
import Profile from '../images/profile.jpeg'

const Home = () => {
  return (
    <section className="main">
      <div className="boxes">
        <h3>Dhruv Patel</h3>
        <p>Web Developer</p>
      </div>
      <img src={Profile} alt="Profile Photo " />
    </section>
  );
};

export default Home;
