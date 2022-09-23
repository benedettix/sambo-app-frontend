import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPage } from "../../Redux/features/pagesSlice/pageSlice";
import "./Directions.scss";

function Directions({ direction }) {
  const dispatch = useDispatch();

  return (
    <div className="direction-bg">
      <div className="container">
        <Link to={"/" + direction}>
          <h3>{direction}</h3>
        </Link>
      </div>
    </div>
  );
}

export default Directions;
