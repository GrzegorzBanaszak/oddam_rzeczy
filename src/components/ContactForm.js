import axios from "axios";
import React from "react";
import { useState } from "react";
import decoration from "../assets/Decoration.svg";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [isSucces, setIsSucces] = useState(false);

  const resetForm = () => {
    setName("");
    setNameError(false);
    setEmail("");
    setEmailError(false);
    setMessage("");
    setMessageError(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          name,
          email,
          message,
        }
      );
      if (res.status === 200) {
        setIsSucces(true);
        resetForm();
      }
    } catch (error) {
      const errorList = error.response.data.errors;
      console.log(errorList);
      if (errorList.some((item) => item.param === "name")) {
        setNameError(true);
      } else {
        setNameError(false);
      }
      if (errorList.some((item) => item.param === "email")) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (errorList.some((item) => item.param === "message")) {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
    }
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
        {isSucces && (
          <>
            <div className="contact-form-succes">
              Wiadomość została wysłana!
            </div>
            <div className="contact-form-succes">
              Wkrótce się skontaktujemy.
            </div>
          </>
        )}
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
            {nameError && <p>Podane imię jest nieprawidłowe</p>}
          </label>
          <label htmlFor="email">
            Wpisz swój email
            <input
              type="text"
              placeholder="abc@xyz.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p>Podane email jest nieprawidłowy</p>}
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
            {messageError && <p>Wiadomość musi mieć conajmniej 120 znaków</p>}
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
