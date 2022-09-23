import React from "react";

import Directions from "../../components/Directions/Directions";
import Maps from "../../components/Maps/Maps";
import PeopleAboutUs from "../../components/PeopleAboutUs/PeopleAboutUs";
import SignEmail from "../../components/SignEmail/SignEmail";

function Ratings() {
  return (
    <>
      <Directions direction={"Dojmovi"} />

      <PeopleAboutUs />
      <SignEmail />
      <Maps />
    </>
  );
}

export default Ratings;
