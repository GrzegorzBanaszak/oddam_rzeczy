import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll/modules";
const Nav = () => {
  return (
    <nav className="nav-desktop">
      <div className="nav-top">
        <RouterLink className="nav-top-link" to="/logowanie">
          Zaloguj
        </RouterLink>
        <RouterLink
          className="nav-top-link nav-top-link-border"
          to="/rejestracja"
        >
          Załóż konto
        </RouterLink>
      </div>
      <div className="nav-bottom">
        <ScrollLink
          className="nav-bottom-link"
          to="open"
          smooth={true}
          offset={0}
          duration={500}
        >
          Start
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="three-columnes"
          smooth={true}
          offset={0}
          duration={500}
        >
          O co chodzi?
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="about"
          smooth={true}
          offset={0}
          duration={500}
        >
          O nas
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="who-help"
          smooth={true}
          offset={0}
          duration={500}
        >
          Fundacje i organizacje
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
        >
          Kontakt
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Nav;
