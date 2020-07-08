import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import projectFlow from '../assets/flow_diagrams/project_selection_flow.png';
import requestFlow from '../assets/flow_diagrams/request_flow.png';
import arrowDown from '../assets/arrow_down.png';

import '../styling/HomePage.css';

const HomePage = () => (
  <Container className="text-center home-page" fluid>
    <Row className="logoRow">
      <Image className="logo" src={logo} />
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
          Black business owners, activists, organizers, and community advocates, etc.
        </span>
        <Row>
          <Col>
            <LinkContainer to="/project-request">
              <Button className="primary-button" size="lg">
                Request a Project
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6} className="home-persona-section-right">
          <span className="home-persona-text">
            Anti-racist designers, programmers, data scientists, illustrators, writers, etc.
          </span>
        <Row>
          <Col>
            <LinkContainer to="/projects">
              <Button className="primary-button" size="lg">
                Work on a Project
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col>
        <Image className="home-arrow-down" src={arrowDown} />
      </Col>
    </Row>

    <h2 className="home-track-titles">Request a Project</h2>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <Image className="home-track-images" src={requestFlow} />
    </Row>
    <Row className="home-track-body">
      <Col xs={12} md={{ span: 8, offset: 2 }}>
        <p>
          Are you a black business owner, activist, protest organizer, or community advocate looking for free help
        building an online platform, updating a website, creating social media content, or data visualizations?{' '}
          <Link className="links" to="/project-request">
            Submit a project request to our community.
        </Link>
        </p>
      </Col>
    </Row>

    <h2 className="home-track-titles">Work on a Project</h2>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <Image className="home-track-images" src={projectFlow} />
    </Row>
    <Row className="home-track-body">
      <Col xs={12} md={{ span: 8, offset: 2 }}>
        <p>
          Are you a writer, designer, engineer, data scientist, illustrator, programmer, web developer, or marketing
        specialist who is looking to use your professional skills to do pro bono work to support Black lives?{' '}
          <Link className="links" to="/projects">
            Work on our available projects.
          </Link>
        </p>
      </Col>
    </Row>
  </Container>
)

export { HomePage };
