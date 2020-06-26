import React from 'react';
import '../styling/site-container-styling.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-styling">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link header-text" to="/">
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link header-text" to="/about">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link header-text" to="/contact">
                Contact
              </Link>
            </li>

            <li class="nav-item">
              <a class="nav-link header-text" href="https://blm.sandboxnu.com">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export { Navbar };
