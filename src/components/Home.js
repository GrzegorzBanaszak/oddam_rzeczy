import React from "react";
import banner from "../assets/Home-Hero-Image.jpg";
const Home = () => {
  return (
    <>
      <section id="open" className="open">
        <div
          className="open-left"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <div className="open-right"></div>
      </section>
    </>
  );
};

export default Home;
