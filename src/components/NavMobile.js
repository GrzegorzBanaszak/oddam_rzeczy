import React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll/modules";
import toggle from "../assets/toggle.png";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav-mobile">
      <div className="nav-mobile-top">
        <div className="nav-mobile-links">
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
        <img
          className="nav-toggle"
          src={toggle}
          alt="toggle"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isOpen && (
        <div className="nav-mobile-bottom">
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="open"
            smooth={true}
            offset={0}
            duration={500}
          >
            Start
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="three-columnes"
            smooth={true}
            offset={0}
            duration={500}
          >
            O co chodzi?
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="about"
            smooth={true}
            offset={0}
            duration={500}
          >
            O nas
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="about"
            smooth={true}
            offset={50}
            duration={500}
          >
            Fundacje i organizacje
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="test1"
            smooth={true}
            offset={50}
            duration={500}
          >
            Kontakt
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
