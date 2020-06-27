import React from "react";
import "../styling/site-container-styling.css";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactUsPage from "../components/ContactUsPage";
import ProjectsPage from "../components/ProjectsPage";
import RequestPage from "../components/RequestPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";

const SiteContainer = () => (
  <div>
    <Router>
      <Route path="/"
        exact={true}
        render={() => <LandingPage />}
      />

      <Route path="/home"
        exact={true}
        render={() =>
          <div>
            <NavBar />
            <HomePage />
          </div>}
      />

      <Route path="/about"
        exact={true}
        render={() =>
          <div>
            <NavBar />
            <AboutPage />
          </div>}
      />

      <Route path="/projects"
        exact={true}
        render={() =>
          <div>
            <NavBar />
            <ProjectsPage />
          </div>}
      />

      <Route path="/request"
        exact={true}
        render={() =>
          <div>
            <NavBar />
            <RequestPage />
          </div>}
      />

      <Route path="/contact"
        exact={true}
        render={() =>
          <div>
            <NavBar />
            <ContactUsPage />
          </div>}
      />
    </Router>
  </div>
)

export default SiteContainer