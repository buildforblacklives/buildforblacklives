import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as constants from '../data/constants';
import Logo from '../assets/logo.js';

const MainNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar className="navbar-center-align" variant="dark" expand="lg" expanded={expanded} sticky="top">
      <LinkContainer to={constants.URL_HOME}>
        <NavbarBrand
          onClick={() =>
            setTimeout(() => {
              setExpanded(false);
            }, 150)
          }
        >
          <Logo className="navbar-logo" />
          <span className="navbar-logotype">Build for Black Lives</span>
        </NavbarBrand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to={constants.URL_ABOUT}>
            <NavLink
              className="navbar-text"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              About
            </NavLink>
          </LinkContainer>
          <LinkContainer to={constants.URL_PROJECTS}>
            <NavLink
              className="navbar-text"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Open Projects
            </NavLink>
          </LinkContainer>
          <LinkContainer to={constants.URL_PROJECT_REQUEST}>
            <NavLink
              className="navbar-text"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Project Request
            </NavLink>
          </LinkContainer>
          <LinkContainer to={constants.URL_COMMUNITY_PARTNERS}>
            <NavLink
              className="navbar-text"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              Community Partners
            </NavLink>
          </LinkContainer>
          <LinkContainer to="/faq">
            <NavLink
              className="navbar-text"
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 150)
              }
            >
              FAQs
            </NavLink>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { MainNavbar };
