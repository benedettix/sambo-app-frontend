import React from "react";
import "./ContactInfo.scss";

function ContactInfo() {
  return (
    <div className="container informations">
      <div className="row d-flex justify-content-between">
        <div className="col-md-3 info-card">
          <h6>Adresa</h6>
          <p>Ilićka br 147, Mostar</p>
        </div>
        <div className="col-md-3 info-card">
          <h6>Telefon</h6>
          <a href="tel:+38763392968">+387-63-392-968</a>
        </div>
        <div className="col-md-3 info-card">
          <h6>Email</h6>
          <a href="mailto:info@judo.ba">
            uprava@judo.ba; info@judo.ba; trener@judo.ba
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
