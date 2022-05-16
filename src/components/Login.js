import React from "react";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="login">
      <Nav />
      <div className="login-container">
        <h2 className="login-header">Zaloguj się</h2>
        <img className="login-decoration" src={decoration} alt="decoration" />
        <form>
          <div className="login-content">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            <label htmlFor="passworld">Hasło</label>
            <input type="passworld" name="passworld" />
          </div>
          <div className="login-btns">
            <Link to="/rejstracja">Załóż konto</Link>
            <button type="submit">Zaloguj się</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
