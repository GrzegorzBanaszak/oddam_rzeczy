import React from "react";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll/modules";
import toggle from "../assets/toggle.png";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nav = useNavigate();

  const handlerLinkClick = () => {
    nav("/");
    setIsOpen(false);
  };
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
            onClick={handlerLinkClick}
          >
            Start
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="three-columnes"
            smooth={true}
            offset={0}
            duration={500}
            onClick={handlerLinkClick}
          >
            O co chodzi?
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="about"
            smooth={true}
            offset={0}
            duration={500}
            onClick={handlerLinkClick}
          >
            O nas
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="who-help"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handlerLinkClick}
          >
            Fundacje i organizacje
          </ScrollLink>
          <ScrollLink
            className="nav-mobile-bottom-link"
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            onClick={handlerLinkClick}
          >
            Kontakt
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
