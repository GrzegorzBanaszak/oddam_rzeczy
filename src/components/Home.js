import React from "react";
import HomeAbout from "./HomeAbout";
import HomeOpen from "./HomeOpen";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumnes from "./HomeThreeColumnes";

const Home = () => {
  return (
    <>
      <HomeOpen />
      <HomeThreeColumnes />
      <HomeSimpleSteps />
      <HomeAbout />
    </>
  );
};

export default Home;
