import React from "react";
import decoration from "../assets/Decoration.svg";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form-header">
        <h3 className="form-header-title">Skontaktuj się z nami</h3>
        <img
          className="form-header-decoration"
          src={decoration}
          alt="decoration"
        />
      </div>
      <form className="form-body">
        <div className="form-body-top">
          <label htmlFor="name">
            Wpisz swoje imię
            <input type="text" placeholder="Krzysztof" />
          </label>
          <label htmlFor="email">
            Wpisz swój email
            <input type="text" placeholder="abc@xyz.pl" />
          </label>
        </div>
        <div className="form-body-bottom">
          <label htmlFor="contant">
            Wpisz swój email
            <textarea
              type="text"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </label>
          <div className="form-btn">
            <button type="submit">Wyślij</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
