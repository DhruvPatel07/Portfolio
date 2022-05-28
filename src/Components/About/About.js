import React from "react";
import "./About.css";
import AboutMe from "../images/about.jpeg";
const About = () => {
  return (
    <>
      <div className="whole">
        <div className="flex-container1">
          <div className="flex-child1 ">
            <div data-aos="fade-right" className="about">
              <div className="heading3">
                <h2>About Me</h2>
              </div>
              <br />
              <div className="bottom"></div>
              <br />
              <div className="content">
                I'm Web Developer from Gujarat, India
                <br />
                <br />
                Highly motivated Web Developer. I started to learn
                programming on my own. Driven and permanently curious.
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="flex-child ">
            <img src={AboutMe} alt="About" />
          </div>
        </div>

        <div className="more">
          <div className="lan">HTML</div>
          <div className="lan">CSS</div>
          <div className="lan">Javascript</div>
          <div className="lan">React Js</div>
          <div className="lan">Python</div>
          <div className="lan">MySQL</div>
          <div className="lan">MongoDB</div>
          <div className="lan">Django</div>
        </div>
      </div>
    </>
  );
};

export default About;
