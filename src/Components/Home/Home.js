import React from "react";
import { Typewriter } from "react-simple-typewriter";

import "./Home.css";
import Profile from "../images/profile.jpeg";

const Home = () => {
  return (
    <section className="main">
      <div className="boxes">
        <h3>Dhruv Patel</h3>
        <p>
          I'm&nbsp;
          <span style={{ color: "#4985c9", fontWieght: "bold" }}>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Frontend ReactJs Developer", "Django Developer"]}
            />
          </span>
        </p>
      </div>
      <img src={Profile} alt="Profile Photo " />
    </section>
  );
};

export default Home;
