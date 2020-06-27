import React from 'react';
import '../styling/site-container-styling.css';

import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class MainNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <NavbarBrand Link>Build for Black Lives</NavbarBrand>
        </LinkContainer>

        <Nav style={{ marginLeft: 'auto' }}>
          <LinkContainer to="/about">
            <NavLink className="header-text">About</NavLink>
          </LinkContainer>

          <LinkContainer to="/contact">
            <NavLink className="header-text">Contact</NavLink>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export { MainNavbar };
