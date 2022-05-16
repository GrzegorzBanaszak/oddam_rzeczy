import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { DefaultContext } from "../App";
import { auth } from "../firebase";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeOpen from "./HomeOpen";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumnes from "./HomeThreeColumnes";
import HomeWhoHelp from "./HomeWhoHelp";

const Home = () => {
  const { setUser } = React.useContext(DefaultContext);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
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
