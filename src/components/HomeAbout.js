import React from "react";
import people from "../assets/People.jpg";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
const HomeAbout = () => {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <h3 className="about-title">O nas</h3>
        <img
          src={decoration}
          alt="about-decoration"
          className="about-decoration"
        />
        <p className="about-description">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <div className="about-signature">
          <img src={signature} alt="signature" />
        </div>
      </div>
      <div
        className="about-right"
        style={{ backgroundImage: `url(${people})` }}
      ></div>
    </section>
  );
};

export default HomeAbout;
