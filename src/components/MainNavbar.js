import React from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../assets/logo.js';

const MainNavbar = () => (
  <Navbar className="navbar-center-align" variant="dark" expand="lg" sticky="top">
    <LinkContainer to="/">
      <NavbarBrand Link>
          <Logo className="navbar-logo" />
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
        <LinkContainer to="/resources">
          <NavLink className="navbar-text">Anti-Racist Resources</NavLink>
        </LinkContainer>
        <LinkContainer to="/faq">
          <NavLink className="navbar-text">FAQ</NavLink>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export { MainNavbar };
