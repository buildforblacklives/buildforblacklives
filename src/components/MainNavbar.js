import React from 'react';

import { Nav, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavLink, Image } from 'react-bootstrap';
import logo from '../assets/logo.png';

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar variant="dark"  expand="lg" sticky="top">
        <NavbarBrand href="/">
          <Image src={logo} href="/" width="40" height="40"  className="d-inline-block align-top" alt="Build for Black Lives" />
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink id="navbar-text" href="/about">About</NavLink>
            <NavLink id="navbar-text" href="/faq">FAQ</NavLink>
            <NavLink id="navbar-text" href="/projects-temp">Open Projects</NavLink>
            <NavLink id="navbar-text" href="/project-request">Project Request</NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}

export { MainNavbar };
