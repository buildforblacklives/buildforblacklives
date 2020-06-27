import React from "react";
import "../styling/site-container-styling.css";

const navItems = [
  { navText: 'Home', linkTo: '/home' },
  { navText: 'About', linkTo: '/about' },
  { navText: 'Open Projects', linkTo: '/projects' },
  { navText: 'Project Request', linkTo: '/request' }
]

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-styling">
    <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {navItems.map(({navText, linkTo}) => (
          <li class="nav-item" key={navText}>
            <a class="nav-link header-text" href={linkTo}>{navText}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>

)

export default NavBar;