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
          to="/rejstracja"
        >
          Załóż konto
        </RouterLink>
      </div>
      <div className="nav-bottom">
        <ScrollLink
          className="nav-bottom-link"
          to="test1"
          smooth={true}
          offset={50}
          duration={500}
        >
          Start
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="test1"
          smooth={true}
          offset={50}
          duration={500}
        >
          O co chodzi?
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="test1"
          smooth={true}
          offset={50}
          duration={500}
        >
          O nas
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="test1"
          smooth={true}
          offset={50}
          duration={500}
        >
          Fundacje i organizacje
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="test1"
          smooth={true}
          offset={50}
          duration={500}
        >
          Kontakt
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Nav;
