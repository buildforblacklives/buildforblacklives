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
  <Container className="text-center page" fluid>
    <Row>
      <Image className="logo" src={logo} />
    </Row>
    <Row>
      <Col className="logotype"> Build for Black Lives</Col>
    </Row>
    <Row>
      <Col className="bio-blurb" xs={12}>
        Building pro bono projects to support Black lives
      </Col>
    </Row>
    <Row className=" button-row">
      <Col xs={12} lg={6}>
        <Row className=" button-text">
          <Col>Black business owners, activists, organizers, and community advocates, etc.</Col>
        </Row>
        <Row>
          <Col>
            <LinkContainer to="/project-request">
              <Button className="button" variant="warning" size="lg">
                Request Project Help
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={6}>
        <Row className="button-text">
          <Col>Anti-racist designers, programmers, data scientists, illustrators, writers, etc.</Col>
        </Row>
        <Row>
          <Col>
            <LinkContainer to="/projects">
              <Button className="button" variant="warning" size="lg">
                Volunteer for Projects
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <Image className="arrow-down" src={arrowDown} />
      </Col>
    </Row>
    <Row className="track-titles justify-content-center">Request Project Help</Row>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <Image className="track-images" src={requestFlow} />
    </Row>
    <Row className="track-body">
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        Are you a black business owner, activist, protest organizer, or community advocate looking for free help
        building an online platform, updating a website, creating social media content, or data visualizations?{' '}
        <Link className="links" to="/project-request">
          Submit a project request to our community.
        </Link>
      </Col>
    </Row>
    <Row className="track-titles justify-content-center">Volunteer for Projects</Row>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <Image className="track-images" src={projectFlow} />
    </Row>
    <Row className="track-body">
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        Are you a writer, designer, engineer, data scientist, illustrator, programmer, web developer, or marketing
        specialist who is looking to use your professional skills to do pro bono work to support Black lives?{' '}
        <Link className="links" to="/projects">
          Work on our available projects.
        </Link>
      </Col>
    </Row>
  </Container>
);

export { HomePage };
