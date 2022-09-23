import React from "react";
import { Link } from "react-router-dom";
import { routeConfig } from "../../config/routeConfig";
import "./AboutUs.scss";

export function AboutUs() {
  return (
    <div>
      <div className="about_us_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h6 className="about_us-welcome">Dobrodošli</h6>
              <h3 className="about_us-heading">O nama</h3>
              <p className="about_us-text">
                The result of true karate is natural, effortless action, and the
                confidence, humility, openness and peace only possible through
                perfect unity of mind and body. This is the core teaching of
                Zen, the basis of Bushido, and our philosophy.
              </p>
              <Link to={routeConfig.PROGRAM.url} className="in_about">
                VIŠE O NAMA
              </Link>
            </div>
            <div className="col-md-4">
              <img src="/assets/quote_img.jpg" alt="karate" />
              <p className="about_us-text_right">
                KARATE IS NOT A GAME OF POINTS, WEIGHT CLASSES OR SHOWY
                DEMONSTRATIONS. IT IS A MARTIAL ART AND WAY OF LIFE THAT TRAINS
                A PRACTITIONER TO BE PEACEFUL.<br></br>
                <span className="alignright">
                  <a href="/Majo-Ćeško/">Majo Ćeško</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
