import React from "react";
import bg from "../assets/Background-Contact-Form.jpg";
import ContactForm from "./ContactForm";

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
        <div className="contact-bottom"></div>
      </div>
    </section>
  );
};

export default HomeContact;
