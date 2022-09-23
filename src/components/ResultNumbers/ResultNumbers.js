import React from "react";
import CountUp from "react-countup";
import "./ResultNumbers.scss";
function ResultNumbers() {
  return (
    <div className="result-bg">
      <div className="container">
        <h6>Naši rezultati u Brojkama</h6>
        <p>
          A 1985 study found that children in martial arts have an increased
          sense of responsibili- ty, and a higher sense of self-esteem.
        </p>
        <div className="row">
          <div className="col-md-3 result-card">
            <div className="result-score">
              {<CountUp end={136} />}
              <div className="result-header">
                <span>Državni prvaci </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 result-card">
            <div className="result-score">
              <CountUp end={100} />
              <div className="result-header">
                <span>Državni prvaci</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 result-card">
            <div className="result-score">
              <CountUp end={45} />
              <div className="result-header">
                <span>Državni prvaci</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 result-card">
            <div className="result-score">
              <CountUp end={87} />
              <div className="result-header">
                <span>Državni prvaci</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultNumbers;
