import React from "react";
import "../styling/site-container-styling.css";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="centered">
    <h1 className="header-text">
      Build for Black Lives
    </h1>

    <h4 className="header-text">
      #TechnologyForJustice
    </h4>

    <Link to={`/home`}>
      <button type="button" className="btn btn-join-movement btn-rounded">
        Join the Movement
      </button>
    </Link>
  </div>
)

export default LandingPage