import React from "react";
import bg from "../assets/columnes.png";
const HomeThreeColumnes = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      id="three-columnes"
      className="three-columnes"
    >
      <div className="three-columnes-container">
        <article className="three-columnes-item">
          <h3 className="three-columnes-title">10</h3>
          <h5 className="three-columnes-subtitle">ODDANYCH WORKÓW</h5>
          <p className="three-columnes-description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </article>
        <article className="three-columnes-item">
          <h3 className="three-columnes-title">5</h3>
          <h5 className="three-columnes-subtitle">WSPARTYCH ORGANIZACJI</h5>
          <p className="three-columnes-description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </article>
        <article className="three-columnes-item">
          <h3 className="three-columnes-title">7</h3>
          <h5 className="three-columnes-subtitle">ZORGANIZOWANY ZBIÓREK</h5>
          <p className="three-columnes-description">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </article>
      </div>
    </section>
  );
};

export default HomeThreeColumnes;
