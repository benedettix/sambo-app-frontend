import React from "react";
import { Link } from "react-router-dom";
import "./Programs.scss";

function Programs() {
  return (
    <div className="program_wrapper">
      <div className="container">
        <h6>Odaberite obuku</h6>
        <h3>PROGRAM TRENINGA</h3>
        <div className="row">
          <div className="col-md-6 program_card">
            <img src="/assets/program3-370x235.jpg" alt="program" />
            <h3>
              <Link to={"/raspored"}>Za Starije</Link>
            </h3>
            <p>
              Karate can be practiced as an art, self defense or as a combat
              sport. Traditional karate places emphasis on self-development.
            </p>

            <Link
              className="d-inline-block general-btn program_btn"
              to={"/raspored"}
            >
              VIDI VIŠE
            </Link>
          </div>
          <div className="col-md-6 program_card">
            <img src="/assets/program3-370x235.jpg" alt="program" />
            <h3>
              <Link to={"/raspored"}>Za Pocetnike</Link>
            </h3>
            <p>
              Karate can be practiced as an art, self defense or as a combat
              sport. Traditional karate places emphasis on self-development.
            </p>
            <Link
              className="d-inline-block general-btn program_btn"
              to={"/raspored"}
            >
              VIDI VIŠE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
