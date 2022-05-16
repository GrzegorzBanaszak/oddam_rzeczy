import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="panel">
      <Nav />
      <div className="panel-container">
        <h2 className="panel-header">Załóż konto</h2>
        <img className="panel-decoration" src={decoration} alt="decoration" />
        <form className="panel-form">
          <div className="panel-content">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <label htmlFor="passworld">Hasło</label>
            <input type="passworld" name="passworld" />
            <label htmlFor="repeat-passworld">Powtórz hasło</label>
            <input type="passworld" name="repeat-passworld" />
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
