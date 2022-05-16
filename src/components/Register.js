import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(null);
  const [rePassword, setRePassword] = useState("");
  const [rePassworldErr, setRePasswordErr] = useState(null);
  const [isPasswordsEqual, setIsPasswordsEqual] = useState(true);

  //Password validation
  const isPassworldValid = () => {
    if (
      password.length > 5 &&
      rePassword.length > 5 &&
      password === rePassword
    ) {
      if (!isPasswordsEqual) setIsPasswordsEqual(true);
      return true;
    } else {
      if (password.length < 6) {
        setPasswordErr("Hasło musi posiadać 6 znaków");
      } else {
        setPasswordErr(null);
      }

      if (rePassword.length < 6) {
        setRePasswordErr("Hasło musi posiadać 6 znaków");
      } else {
        setRePasswordErr(null);
      }

      if (password === rePassword) {
        setIsPasswordsEqual(true);
      } else {
        setIsPasswordsEqual(false);
      }
      return false;
    }
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    // Regular expressions for email
    const mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
      if (emailErr) setEmailErr(null);
    } else {
      setEmailErr("Niepoprawny email");
      isPassworldValid();
    }
  };
  return (
    <section className="panel">
      <Nav />
      <div className="panel-container">
        <h2 className="panel-header">Załóż konto</h2>
        <img className="panel-decoration" src={decoration} alt="decoration" />
        <form className="panel-form" onSubmit={handelFormSubmit}>
          <div className="panel-content">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && <p className="panel-danger">{emailErr}</p>}
            <label htmlFor="passworld">Hasło</label>
            <input
              type="passworld"
              name="passworld"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && <p className="panel-danger">{passwordErr}</p>}
            <label htmlFor="repeat-passworld">Powtórz hasło</label>
            <input
              type="passworld"
              name="repeat-passworld"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            {rePassworldErr && <p className="panel-danger">{rePassworldErr}</p>}
            {!isPasswordsEqual && (
              <p className="panel-danger">"Hasła muszą być takie same</p>
            )}
          </div>
          <div className="panel-btns">
            <Link to="/logowanie">Zaloguj się</Link>
            <button type="submit">Załóż konto</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
