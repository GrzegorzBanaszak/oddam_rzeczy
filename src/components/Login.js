import React from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Regular expressions for email
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (password.length > 5 && email.match(mailformat)) {
      if (emailErr) setEmailErr(null);
      if (passwordErr) setPasswordErr(null);
    } else {
      if (!email.match(mailformat)) {
        setEmailErr("Niepoprawny email");
      } else {
        setEmailErr(null);
      }

      if (password.length < 6) {
        setPasswordErr("Hasło musi posiadać 6 znaków");
      } else {
        setPasswordErr(null);
      }
    }
  };
  return (
    <section className="panel">
      <Nav />
      <NavMobile />
      <div className="panel-container">
        <h2 className="panel-header">Zaloguj się</h2>
        <img className="panel-decoration" src={decoration} alt="decoration" />
        <form
          className="panel-form"
          onSubmit={handleFormSubmit}
          autoComplete="off"
        >
          <div className="panel-content">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && <p className="panel-danger">{emailErr}</p>}
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && <p className="panel-danger">{passwordErr}</p>}
          </div>
          <div className="panel-btns">
            <Link to="/rejestracja">Załóż konto</Link>
            <button type="submit">Zaloguj się</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
