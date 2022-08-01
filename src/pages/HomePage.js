import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as constants from '../data/constants';

import Logo from '../assets/logo.js';
import ProjectFlow from '../assets/flow_diagrams/project_selection_flow.js';
import RequestFlow from '../assets/flow_diagrams/request_flow.js';
import ArrowDown from '../assets/arrow_down.js';

import '../styling/HomePage.css';

const HomePage = () => (
  <Container className="text-center home-page" fluid>
    <Row className="logoRow">
      <Logo className="logo" />
    </Row>
    <Row>
      <Col>
        <h1 className="logotype">Build for Black Lives</h1>
      </Col>
    </Row>
    <Row>
      <Col className="home-bio-blurb" xs={12}>
        <h3 className="logotype">Building pro bono projects to support Black lives</h3>
      </Col>
    </Row>
    <Row className="home-button-row">
      <Col xs={12} lg={6} className="home-persona-section-left">
        <span className="home-persona-text">
          Black business owners, activists, organizers, and community advocates:
        </span>
        <div>
          <LinkContainer to={constants.URL_PROJECT_REQUEST}>
            <Button className="primary-button" size="lg">
              Request a Project
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col xs={12} lg={6} className="home-persona-section-right">
        <span className="home-persona-text">
          Anti-racist designers, programmers, data scientists, illustrators, writers:
        </span>
        <div>
          <LinkContainer to={constants.URL_PROJECTS}>
            <Button className="primary-button" size="lg">
              Work on a Project
            </Button>
          </LinkContainer>
        </div>
      </Col>
    </Row>

    <Row className="home-arrow-row">
      <Col>
        <ArrowDown className="home-arrow-down" />
      </Col>
    </Row>

    <h2 className="home-track-titles">Request a Project</h2>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <RequestFlow className="flow-images" />
    </Row>
    <Row className="home-track-body">
      <Col xs={12} md={{ span: 8, offset: 2 }}>
        <p>
          Are you a Black business owner, activist, protest organizer, or community advocate looking for free services
          building a website or online platform, creating social media content, data visualizations, or other projects?{' '}
          <Link className="links" to={constants.URL_PROJECT_REQUEST}>
            Submit a project request.
          </Link>
        </p>
      </Col>
    </Row>

    <h2 className="home-track-titles">Work on a Project</h2>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <ProjectFlow className="flow-images" />
    </Row>
    <Row className="home-track-body">
      <Col xs={12} md={{ span: 8, offset: 2 }}>
        <p>
          Are you an anti-racist designer, developer, data scientist, or marketing specialist interested in committing
          to pro bono projects to work towards reparations and racial justice?{' '}
          <Link className="links" to={constants.URL_PROJECTS}>
            Work on one of our available projects.
          </Link>
        </p>
      </Col>
    </Row>
  </Container>
);

export { HomePage };
