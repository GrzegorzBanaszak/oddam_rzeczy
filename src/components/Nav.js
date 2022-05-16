import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll/modules";
const Nav = () => {
  const nav = useNavigate();

  const handlerLinkClick = () => {
    nav("/");
  };
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
          onClick={handlerLinkClick}
        >
          Start
        </ScrollLink>

        <ScrollLink
          className="nav-bottom-link"
          to="three-columnes"
          smooth={true}
          offset={0}
          duration={500}
          onClick={handlerLinkClick}
        >
          O co chodzi?
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="about"
          smooth={true}
          offset={0}
          duration={500}
          onClick={handlerLinkClick}
        >
          O nas
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="who-help"
          smooth={true}
          offset={0}
          duration={500}
          onClick={handlerLinkClick}
        >
          Fundacje i organizacje
        </ScrollLink>
        <ScrollLink
          className="nav-bottom-link"
          to="contact"
          smooth={true}
          offset={0}
          duration={500}
          onClick={handlerLinkClick}
        >
          Kontakt
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Nav;
