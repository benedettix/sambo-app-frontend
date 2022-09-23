import React from "react";
import "./UpcomingEvents.scss";

function UpcomingEvents() {
  return (
    <div className="upcoming-bg">
      <div className="container">
        <h6>Naši uspjesi</h6>

        <div className="row upcoming-wrapper">
          <div className="col-md-3 ">
            <h3 className="upcoming">
              <span className="upcoming-score">20</span>
              <span className="upcoming-header">Jun,Tuesday</span>
            </h3>
          </div>
          <div className="col-md-9">
            <h3>
              <a href="#">Osvojen trofej u Turskoj</a>
            </h3>
            <p>
              The examination will begin with an introduction speech on what
              martial arts mean to you.
            </p>
          </div>
        </div>

        <div className="row upcoming-wrapper">
          <div className="col-md-3">
            <h3 className="upcoming">
              <span className="upcoming-score">20</span>
              <span className="upcoming-header">Jun,Tuesday</span>
            </h3>
          </div>
          <div className="col-md-9">
            <h3>
              <a href="#">April black film rexam</a>
            </h3>
            <p>
              The examination will begin with an introduction speech on what
              martial arts mean to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
