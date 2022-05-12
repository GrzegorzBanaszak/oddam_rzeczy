import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import SimpleStepsItem from "./SimpleStepsItem";
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
        <div className="simple-steps-list">
          <SimpleStepsItem
            icon="Icon-1.svg"
            title="Wybierz rzeczy"
            description="ubrania, zabawki, sprzęt i inne"
          />
          <SimpleStepsItem
            icon="Icon-2.svg"
            title="Spakuj je"
            description="skorzystaj z worków na śmieci"
          />
          <SimpleStepsItem
            icon="Icon-3.svg"
            title="Zdecyduj komu chcesz pomóc"
            description="Zdecyduj komu chcesz pomóc"
          />
          <SimpleStepsItem
            icon="Icon-4.svg"
            title="Zamów kuriera"
            description="kurier przyjedzie w dogodnym terminie"
          />
        </div>
        <Link to="/oddaj-rzeczy" className="simple-steps-btn">
          Oddam rzeczy
        </Link>
      </div>
    </section>
  );
};

export default HomeSimpleSteps;
