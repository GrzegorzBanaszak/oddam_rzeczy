import axios from "axios";
import React from "react";
import { useState } from "react";
import decoration from "../assets/Decoration.svg";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://fer-api.coderslab.pl/v1/portfolio/contact",
      {
        name,
        email,
        message,
      }
    );
    console.log(res);
  };
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
      <form className="form-body" onSubmit={handleFormSubmit}>
        <div className="form-body-top">
          <label htmlFor="name">
            Wpisz swoje imię
            <input
              type="text"
              placeholder="Krzysztof"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Wpisz swój email
            <input
              type="text"
              placeholder="abc@xyz.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-body-bottom">
          <label htmlFor="message">
            Wpisz swój email
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
