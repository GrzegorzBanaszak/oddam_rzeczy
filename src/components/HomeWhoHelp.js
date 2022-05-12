import React from "react";
import { useState } from "react";
import decoration from "../assets/Decoration.svg";
import WhoHelpControler from "./WhoHelpControler";
const HomeWhoHelp = () => {
  const [selected, setSelected] = useState("funkcjom");
  return (
    <section id="who-help" className="who-help">
      <div className="who-help-container">
        <div className="who-help-top">
          <h3 className="who-help-title">Komu pomagamy?</h3>
          <img
            className="who-help-decoration"
            src={decoration}
            alt="decoration"
          />
          <div className="who-help-control">
            <WhoHelpControler
              type="funkcjom"
              isSelected={selected === "funkcjom"}
              setType={setSelected}
            >
              Fundacjom
            </WhoHelpControler>
            <WhoHelpControler
              type="organizacja"
              isSelected={selected === "organizacja"}
              setType={setSelected}
            >
              Organizacjom pozarządowym
            </WhoHelpControler>
            <WhoHelpControler
              type="zbiorką"
              isSelected={selected === "zbiorką"}
              setType={setSelected}
            >
              Lokalnym zbiórkom
            </WhoHelpControler>
          </div>
          <p className="who-help-description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
            współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
            czego potrzebują.
          </p>
        </div>

        {/* Sekcja organizacji */}
      </div>
    </section>
  );
};

export default HomeWhoHelp;
