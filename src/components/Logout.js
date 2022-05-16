import React from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <section className="logout">
      <Nav />
      <NavMobile />
      <div className="logout-container">
        <h2 className="logout-header">Wylogowanie nastąpiło pomyślnie</h2>
        <img className="logout-decoration" src={decoration} alt="decoration" />
        <Link className="logout-link" to="/">
          Strona główna
        </Link>
      </div>
    </section>
  );
};

export default Logout;
