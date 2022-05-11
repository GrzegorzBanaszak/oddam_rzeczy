import React from "react";
import banner from "../assets/Home-Hero-Image.jpg";
import Nav from "./Nav";
const Home = () => {
  return (
    <>
      <section id="open" className="open">
        <div
          className="open-left"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <div className="open-right">
          <Nav />
        </div>
      </section>
    </>
  );
};

export default Home;
