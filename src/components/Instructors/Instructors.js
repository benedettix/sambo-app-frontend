import React from "react";
import "./Instructors.scss";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

function Instructors() {
  return (
    <div className="container instructor-wrapper">
      <h6>Osoblje</h6>
      <h3>NAŠI TRENERI</h3>
      <div className="row justify-content-center">
        <div className="col-md-3 instructor-card">
          <h3>Majo Ćeško</h3>
          <h6>Trener, osnivač</h6>
          <p>
            Karate can be practiced as an art, self defense or as a combat
            sport. Traditional karate places emphasis on self-development.
          </p>

          <span>
            <a href="#">
              <AiFillFacebook />
            </a>
            <a href="#">
              <AiFillTwitterSquare />
            </a>
          </span>
        </div>
        <div className="col-md-3">
          <img src="/assets/team1-405x513.jpg" alt="" />
        </div>
        <div className="col-md-3 instructor-card">
          <h3>Srđan Ajvaz</h3>
          <h6>Trener, osnivač</h6>
          <p>
            Karate can be practiced as an art, self defense or as a combat
            sport. Traditional karate places emphasis on self-development.
          </p>

          <span>
            <a href="#">
              <AiFillFacebook />
            </a>
            <a href="#">
              <AiFillTwitterSquare />
            </a>
          </span>
        </div>
        <div className="col-md-3">
          <img src="/assets/team2-405x513.jpg" alt="" />
        </div>
        <div className="col-md-3 instructor-card">
          <h3>Ivan Jurić</h3>
          <h6>Trener, osnivač</h6>
          <p>
            Karate can be practiced as an art, self defense or as a combat
            sport. Traditional karate places emphasis on self-development.
          </p>

          <span>
            <a href="#">
              <AiFillFacebook />
            </a>
            <a href="#">
              <AiFillTwitterSquare />
            </a>
          </span>
        </div>
        <div className="col-md-3">
          <img src="/assets/team2-405x513.jpg" alt="" />
        </div>
        <div className="instructor_wrapper-btn">
          <Link to={"/onama"} className="d-inline-block mt-5 general-btn">
            VIDI VIŠE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Instructors;
