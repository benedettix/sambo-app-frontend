import React from "react";
import ShowContacts from "../../adminComponents/ShowContacts/ShowContacts";
import Directions from "../../components/Directions/Directions";

function ShowContactsPage() {
  return (
    <>
      <Directions direction={"Kontakti"} />
      <ShowContacts />
    </>
  );
}

export default ShowContactsPage;
