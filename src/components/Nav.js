import { signOut } from "firebase/auth";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll/modules";
import { DefaultContext } from "../App";
import { auth } from "../firebase";
const Nav = () => {
  const { user, setUser } = React.useContext(DefaultContext);
  const nav = useNavigate();

  const handlerLinkClick = () => {
    nav("/");
  };

  const logoutHandel = () => {
    signOut(auth).then(() => {
      setUser(null);
      nav("/wylogowanie");
    });
  };
  return (
    <nav className="nav-desktop">
      <div className="nav-top">
        {user ? (
          <button
            className="nav-top-link nav-top-link-border"
            onClick={logoutHandel}
          >
            Wyloguj
          </button>
        ) : (
          <>
            <RouterLink className="nav-top-link" to="/logowanie">
              Zaloguj
            </RouterLink>
            <RouterLink
              className="nav-top-link nav-top-link-border"
              to="/rejestracja"
            >
              Załóż konto
            </RouterLink>
          </>
        )}
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
