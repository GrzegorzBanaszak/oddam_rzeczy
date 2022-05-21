import React from "react";
import Nav from "./Nav";
import openImage from "../assets/Form-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import { Outlet } from "react-router-dom";
const GiveForm = () => {
  return (
    <>
      <section className="give-open">
        <div
          className="give-col--left"
          style={{ backgroundImage: `url(${openImage})` }}
        ></div>
        <div className="give-col--right">
          <Nav />
          <div className="give-content">
            <h2 className="give-title">Oddaj rzeczy, których już nie chcesz</h2>
            <h2 className="give-title">POTRZEBUJĄCYM</h2>
            <img
              className="give-decoration"
              src={decoration}
              alt="decoration"
            />
            <h3 className="give-subtitle">Wystarczą 4 proste kroki:</h3>
            <ul className="give-steps">
              <li className="give-step">
                <div>1</div>
                <p>Wybierz rzeczy</p>
              </li>
              <li className="give-step">
                <div>2</div>
                <p>Spakuj w worki</p>
              </li>
              <li className="give-step">
                <div>3</div>
                <p>Wybierz fundacje</p>
              </li>
              <li className="give-step">
                <div>4</div>
                <p>Zamów kuriera</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default GiveForm;
