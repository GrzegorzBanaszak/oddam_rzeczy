import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="panel">
      <Nav />
      <div className="panel-container">
        <h2 className="panel-header">Zaloguj się</h2>
        <img className="panel-decoration" src={decoration} alt="decoration" />
        <form className="panel-form">
          <div className="panel-content">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <label htmlFor="passworld">Hasło</label>
            <input type="passworld" name="passworld" />
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
