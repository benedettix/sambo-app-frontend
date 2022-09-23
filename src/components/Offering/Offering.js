import React from "react";
import "./Offering.scss";

export function Offering() {
  return (
    <div className="offering-bg">
      <div className="container">
        <div className="row">
          <h6 className="offering-heading">Što nudimo</h6>
          <div className="col-md-3 offering-card">
            <div className="card-count">1</div>
            <div className="card-heading">
              <a href="">All skill Level</a>
            </div>
            <div className="card-text">
              <p>
                Testing consists of demonstration of techniques before examiners
                panel, vary by
              </p>
            </div>
          </div>

          <div className="col-md-3 offering-card">
            <div className="card-count">2</div>
            <div className="card-heading">
              <a href="">All skill Level</a>
            </div>
            <div className="card-text">
              <p>
                Kata is a sequence of movements and represents various offensive
                and defensive postures.
              </p>
            </div>
          </div>
          <div className="col-md-3 offering-card">
            <div className="card-count">3</div>
            <div className="card-heading">
              <a href="#">All skill Level</a>
            </div>
            <div className="card-text">
              <p>
                Typically this is performance in unison of a technique or a
                combination of techniques by karateka.
              </p>
            </div>
          </div>
          <div className="col-md-3 offering-card">
            <div className="card-count">4</div>
            <div className="card-heading">
              <a href="#">All skill Level</a>
            </div>
            <div className="card-text">
              <p>
                Traditional karate places emphasis on self-development:
                perseverance, fearlessness, virtue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
