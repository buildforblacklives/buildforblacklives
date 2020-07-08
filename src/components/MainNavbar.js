import React from 'react';

import { Nav, Navbar, NavbarBrand, NavLink, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar className="navbar-center-align" variant="dark" expand="lg" sticky="top">
        <LinkContainer to="/">
          <NavbarBrand Link>
            <Image
              src={logo}
              href="/"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Build for Black Lives"
            />
            <span className="navbar-logotype">Build for Black Lives</span>
          </NavbarBrand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/about">
              <NavLink className="navbar-text">About</NavLink>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavLink className="navbar-text">Open Projects</NavLink>
            </LinkContainer>
            <LinkContainer to="/project-request">
              <NavLink className="navbar-text">Project Request</NavLink>
            </LinkContainer>
            <LinkContainer to="/faq">
              <NavLink className="navbar-text">FAQ</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export { MainNavbar };
