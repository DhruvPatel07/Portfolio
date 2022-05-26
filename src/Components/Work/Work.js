import React from "react";

import "./Work.css";
import Work1 from "../images/w1.png";
import Work2 from "../images/w2.png";
import Work3 from "../images/w3.png";
import Work4 from "../images/w4.png";
import Work5 from "../images/w5.png";
import Work6 from "../images/w6.png";
import Work7 from "../images/w7.png";

const Work = () => {
  return (
    <>
      <div className="workcontainer">
        <div className="workcard">
          <div className="workcontent">
            <div className="imgBx">
              <img src={Work4} alt="Work4" />
            </div>
            <div className="workcontentBx">
              <h3>
                News App
                <br />
                <span>React Js </span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <p>This Project is developed in React Js</p>
          </ul>
        </div>

        <div className="workcard">
          <div className="workcontent">
            <div className="imgBx">
              <img src={Work1} alt="Work1" />
            </div>
            <div className="workcontentBx">
              <h3>
                Textutils
                <br />
                <span>React Js </span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <p>This Project is developed in React Js</p>
          </ul>
        </div>

        <div className="workcard">
          <div className="workcontent">
            <div className="imgBx">
              <img src={Work2} alt="Work2" />
            </div>
            <div className="workcontentBx">
              <h3>
                ToDo App
                <br />
                <span>React Js </span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <p>This Project is developed in React Js</p>
          </ul>
        </div>

        <div className="workcard">
          <div className="workcontent">
            <div className="imgBx">
              <img src={Work3} alt="Work3" />
            </div>
            <div className="workcontentBx">
              <h3>
                Weather App
                <br />
                <span>React Js </span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <p>This Project is developed in React Js</p>
          </ul>
        </div>

        <div className="workcard">
          <div className="workcontent">
            <div className="imgBx">
              <img src={Work7} alt="Work7" />
            </div>
            <div className="workcontentBx">
              <h3>
                CRUD Operation
                <br />
                <span>Django (Python) </span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <p>This Project is developed in Django</p>
          </ul>
        </div>

        <div className="workcard">
          <div className="workcontent">
            <div className="imgBx">
              <img src={Work6} alt="Work6" />
            </div>
            <div className="workcontentBx">
              <h3>
                Library
                <br />
                <span>Django (Python) </span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <p>This Project is developed in Django</p>
          </ul>
        </div>

        <div className="workcard">
          <div className="workcontent">
            <div className="imgBx">
              <img src={Work5} alt="Work5" />
            </div>
            <div className="workcontentBx">
              <h3>
                TextUtils
                <br />
                <span>Django (Python)</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <p>This Project is developed in Django</p>
          </ul>
        </div>
      </div>
      {/* <div className="box box2">
          <h1>Project 2</h1>
        </div>
        <div className="box box3">
          <h1>Project 3</h1>
        </div>
        <div className="box box4">
          <h1>Project 4</h1>
        </div>
        <div className="box box5">
          <h1>Project 5</h1>
        </div>
        <div className="box box6">
          <h1>Project 6</h1>
        </div> */}
    </>
  );
};

export default Work;
