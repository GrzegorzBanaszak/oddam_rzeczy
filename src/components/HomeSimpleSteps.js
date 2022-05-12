import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
const HomeSimpleSteps = () => {
  return (
    <section id="simple-steps" className="simple-steps">
      <div className="simple-steps-container">
        <h3 className="simple-steps-title">Wystarczą 4 proste kroki</h3>
        <img
          className="simple-steps-decoration"
          src={decoration}
          alt="decoration-simple-steps"
        />
        <div className="simple-steps-list"></div>
        <Link to="/oddaj-rzeczy" className="simple-steps-btn">
          Oddam rzeczy
        </Link>
      </div>
    </section>
  );
};

export default HomeSimpleSteps;
