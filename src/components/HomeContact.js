import React from "react";
import bg from "../assets/Background-Contact-Form.jpg";
import ContactForm from "./ContactForm";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
const HomeContact = () => {
  return (
    <section
      id="contact"
      className="contact"
      style={{ background: `url(${bg})` }}
    >
      <div className="contact-container">
        <div className="contact-top">
          <ContactForm />
        </div>
        <div className="contact-bottom">
          <div className="contact-copyright">Copyright by Coders Lab</div>
          <div className="contact-icons">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
