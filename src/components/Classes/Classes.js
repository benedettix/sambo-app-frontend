import React from "react";
import "./Classes.scss";
import { routeConfig } from "../../config/routeConfig";
import { Link } from "react-router-dom";

function Classes() {
  return (
    <div className="classes-bg">
      <div className="container">
        <div className="row">
          <div className="classes_wrapper">
            <h3>NOVA OBUKA POČINJE SADA!</h3>
            <h6>from $45.00</h6>
            <Link to={routeConfig.SCHEDULE.url} className="general-btn">
              Pridružite se sada
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
