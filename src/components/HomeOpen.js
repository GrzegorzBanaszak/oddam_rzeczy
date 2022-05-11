import React from "react";
import banner from "../assets/Home-Hero-Image.jpg";
import Nav from "./Nav";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
const HomeOpen = () => {
  return (
    <section id="open" className="open">
      <div
        className="open-left"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="open-right">
        <Nav />
        <NavMobile />
        <div className="open-content">
          <h2 className="content-title">Zacznij pomagać!</h2>
          <h2 className="content-title">
            Oddaj niechciane rzeczy w zaufane ręce
          </h2>
          <img
            className="content-decoration"
            src={decoration}
            alt="decoration"
          />
          <div className="content-btns">
            <Link className="content-btn" to="/oddaj-rzeczy">
              Oddaj Rzeczy
            </Link>
            <Link className="content-btn" to="/oddaj-rzeczy">
              Zorganizuj zbiórkę
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOpen;
