import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactUsPage from '../components/ContactUsPage';
import NavBar from '../components/NavBar';
import '../styling/site-container-styling.css';

class SiteContainer extends React.Component {
  state = {};

  // contains the routing information for the site
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact={true} render={() => <LandingPage />} />

          <Route
            path="/home"
            exact={true}
            render={() => (
              <div>
                <NavBar />
                <HomePage />
              </div>
            )}
          />

          <Route
            path="/about"
            exact={true}
            render={() => (
              <div>
                <NavBar />
                <AboutPage />
              </div>
            )}
          />

          <Route
            path="/contact"
            exact={true}
            render={() => (
              <div>
                <NavBar />
                <ContactUsPage />
              </div>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default SiteContainer;
