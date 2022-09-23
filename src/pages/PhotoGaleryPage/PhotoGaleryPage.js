import React from "react";
import Classes from "../../components/Classes/Classes";
import Directions from "../../components/Directions/Directions";
import Photogalery from "../../components/Photogalery/Photogalery";

function PhotoGaleryPage() {
  return (
    <>
      <Directions direction={"Galerija"} />
      <Photogalery />
      <Classes />
    </>
  );
}

export default PhotoGaleryPage;
