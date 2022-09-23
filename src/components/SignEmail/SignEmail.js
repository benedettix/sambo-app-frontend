import React from "react";

import "./SignEmail.scss";
function SignEmail() {
  return (
    <div className="email-bg">
      <div className="container ">
        <div className="row">
          <div className="col-md-7 center">
            <h3>PRIJAVITE SE ZA AŽURIRANJA</h3>
          </div>
          <div className="col-md-3 center">
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="col-md-2 center">
            <a href="#" className="general-btn">
              PRIJAVITE SE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignEmail;
