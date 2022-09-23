import React from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactUs from "../../components/ContactUs/ContactUs";
import Directions from "../../components/Directions/Directions";
import Maps from "../../components/Maps/Maps";
import SignEmail from "../../components/SignEmail/SignEmail";

function Contacts() {
  return (
    <>
      <Directions direction={"Kontakti"} />
      <ContactInfo />
      <ContactUs />
      <SignEmail />
      <Maps />
    </>
  );
}

export default Contacts;
