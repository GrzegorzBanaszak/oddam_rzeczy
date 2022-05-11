import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-top">
        <RouterLink>Zaloguj</RouterLink>
        <RouterLink>Załóż konto</RouterLink>
      </div>
      <div className="nav-bottom">Nav bottom</div>
    </nav>
  );
};
