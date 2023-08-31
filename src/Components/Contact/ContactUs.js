import React from "react";
import emailjs from "emailjs-com";

import "./ContactUs.css";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ccodph4",
        'template_0w9muzv',
        e.target,
        "fuOKf8MU5N3n0ZeP_"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
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
             <b> Email ID </b>: dhruv.patel.0220.dp@gmail.com
              <br />
              <br />
             <b> Contact No. &nbsp;</b>: +91 9328398227
            </div>
          </div>
        </div>

        <div className="flex-child">
          <form
            className="contactform"
            action=""
            method="POST"
            onSubmit={sendEmail}
          >
            <label>
              <input name="name" id="name" type="text" required />
              <div className="label-text">FULL NAME</div>
            </label>
            <label>
              <input type="text" name="user_email" id="email" required />
              <div className="label-text">EMAIL</div>
            </label>
            <label>
              <input type="tel" name="phone" id="phone" required />
              <div className="label-text">PHONE NUMBER </div>
            </label>
            <label>
              <input type="text" name="message" id="desc" required />
              <div className="label-text">DESCRIPTION </div>
            </label>

            <button type="submit" value="Send">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Intership  */}
    </>
  );
};

export default ContactUs;
