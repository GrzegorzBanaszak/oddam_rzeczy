import React from "react";
import bg from "../assets/columnes.png";
import ThreeColumnItem from "./ThreeColumnItem";
const HomeThreeColumnes = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      id="three-columnes"
      className="three-columnes"
    >
      <div className="three-columnes-container">
        <ThreeColumnItem title={"10"} subtitle={"ODDANYCH WORKÓW"}>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </ThreeColumnItem>
        <ThreeColumnItem title={"5"} subtitle={"WSPARTYCH ORGANIZACJI"}>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </ThreeColumnItem>
        <ThreeColumnItem title={"7"} subtitle={"ZORGANIZOWANY ZBIÓREK"}>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </ThreeColumnItem>
      </div>
    </section>
  );
};

export default HomeThreeColumnes;
