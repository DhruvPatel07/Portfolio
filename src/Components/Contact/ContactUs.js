import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div data-aos="zoom-in" className="flex-container">
        <div className="flex-child">
          <div className="contact">
            <div className="heading1">
              <h1>Contact Me</h1>
            </div>
            <br />
            <div className="content1">
              EMAIL ID : dhruv.patel.0220.dp@gmail.com
              <br />
              <br />
              Contact No.: +91 9328398227
            </div>
          </div>
        </div>

        <div className="flex-child">
          <form className="contactform" action="" method="POST">
            <label>
              <input name="name" id="name" type="text" required />
              <div className="label-text">FULL NAME</div>
            </label>
            <label>
              <input type="text" name="email" id="email" required />
              <div className="label-text">EMAIL</div>
            </label>
            <label>
              <input type="tel" name="phone" id="phone" required />
              <div className="label-text">PHONE NUMBER </div>
            </label>
            <label>
              <input type="text" name="description" id="desc" required />
              <div className="label-text">DESCRIPTION </div>
            </label>

            <button type="submit" value="Submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;