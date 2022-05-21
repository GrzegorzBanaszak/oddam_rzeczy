import React from "react";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeOpen from "./HomeOpen";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumnes from "./HomeThreeColumnes";
import HomeWhoHelp from "./HomeWhoHelp";

const Home = () => {
  return (
    <>
      <HomeOpen />
      <HomeThreeColumnes />
      <HomeSimpleSteps />
      <HomeAbout />
      <HomeWhoHelp />
      <HomeContact />
    </>
  );
};

export default Home;
