import React from "react";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import Directions from "../../components/Directions/Directions";
import Instructors from "../../components/Instructors/Instructors";
import Programs from "../../components/Programs/Programs";
function ProgramsPage() {
  return (
    <>
      <Directions direction={"Programi"} />
      <Programs />
      <AboutUs />
      <Instructors />
    </>
  );
}

export default ProgramsPage;
