import React from "react";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import Directions from "../../components/Directions/Directions";
import Instructors from "../../components/Instructors/Instructors";
import Maps from "../../components/Maps/Maps";
import ResultNumbers from "../../components/ResultNumbers/ResultNumbers";

function About() {
  return (
    <>
      <Directions direction={"O nama"} />;
      <AboutUs />
      <ResultNumbers />
      <Instructors />
      <Maps />
    </>
  );
}

export default About;
