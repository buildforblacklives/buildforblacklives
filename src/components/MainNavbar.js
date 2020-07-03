import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar variant="dark"  expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} href="/" width="40" height="40" className="d-inline-block align-top" alt="Build for Black Lives" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link id="navbar-text" href="/about">About</Nav.Link>
            <Nav.Link id="navbar-text" href="/faq">FAQ</Nav.Link>
            <Nav.Link id="navbar-text" href="/projects">Open Projects</Nav.Link>
            <Nav.Link id="navbar-text" href="/project-request">Project Request</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export { MainNavbar };
