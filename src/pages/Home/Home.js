import React from "react";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import CarouselSlider from "../../components/Carousel Slider/Carousel";
import { Offering } from "../../components/Offering/Offering";
import Classes from "../../components/Classes/Classes";
import Programs from "../../components/Programs/Programs";
import ResultNumbers from "../../components/ResultNumbers/ResultNumbers";
import Instructors from "../../components/Instructors/Instructors";
import PeopleAboutUs from "../../components/PeopleAboutUs/PeopleAboutUs";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import Photogalery from "../../components/Photogalery/Photogalery";
import SignEmail from "../../components/SignEmail/SignEmail";
import Maps from "../../components/Maps/Maps";

export function Home() {
  return (
    <div>
      <CarouselSlider />
      {/* <Directions /> */}
      <AboutUs />
      <Offering />
      <Classes />
      <Programs />
      <ResultNumbers />
      <Instructors />
      <PeopleAboutUs />
      <UpcomingEvents />
      <Photogalery />
      <SignEmail />
      <Maps />
    </div>
  );
}
