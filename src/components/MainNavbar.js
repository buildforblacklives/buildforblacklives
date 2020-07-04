import React from 'react';

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

          <LinkContainer to="/projects">
            <NavLink className="header-text">Open Projects</NavLink>
          </LinkContainer>

          <LinkContainer to="/project-request">
            <NavLink className="header-text">Project Request</NavLink>
          </LinkContainer>


          <LinkContainer to="/faq">
            <NavLink className="header-text">FAQ</NavLink>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export { MainNavbar };
