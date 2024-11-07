import React from "react";
import "./About.css";
import AboutMe from "./aboutimage.jpg";
import Resume from "./Resume.pdf";

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
                Experienced in developing and designing Web applications.
                Committed to improving business productivity, efficiency and
                developing insightful solutions to current business practices.
                Translated business requirements into functional specifications
                and manage changes to those specifications. Resigned current
                business processes for newer technology.
              </div>
              <div className="resume">
                <a
                  rel="noreferrer"
                  href={Resume}
                  target="_blank"
                  download="Dhruv Patel Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="flex-child ">
            <img src={AboutMe} alt="About" />
          </div>
        </div>
        <div className="heading-about">
          <h2>Known Technologies</h2>
        </div>
        <div className="more">
          <div className="lan">HTML</div>
          <div className="lan">CSS</div>
          <div className="lan">Javascript</div>
          <div className="lan">React Js</div>
          <div className="lan">React Native</div>
          <div className="lan">MongoDB</div>
          <div className="lan">Python</div>
          <div className="lan">MySQL</div>
          <div className="lan">ASP.NET MVC</div>
          <div className="lan">Django</div>
          <div className="lan">SAP Crystal Reports</div>
        
        </div>
      </div>
    </>
  );
};

export default About;
