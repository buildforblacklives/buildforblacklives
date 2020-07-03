import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import business1 from '../assets/business1.png';
import business2 from '../assets/business2.png';
import business3 from '../assets/business3.png';
import business4 from '../assets/business4.png';
import business5 from '../assets/business5.png';
import volunteer1 from '../assets/volunteer1.png';
import volunteer2 from '../assets/volunteer2.png';
import volunteer3 from '../assets/volunteer3.png';

const HomePage = () => (
  <Container fluid>
    <Row>
      <Col className="logotype"> Build for Black Lives</Col>
    </Row>
    <Row>
      <Col className="bio-blurb" xs={12} md={{ span: 6, offset: 3 }}>
        We provide a platform to connect <span className="highlighted">black-owned businesses</span> or{' '}
        <span className="highlighted">organizations fighting racial injustice</span> to{' '}
        <span className="highlighted">developers</span> and <span className="highlighted">designers</span> who would
        like to support the cause with their technical skills.
      </Col>
    </Row>
    <Row className="button-row">
      <Col className="text-center">
        <LinkContainer to="/project-request">
          <Button className="button" variant="warning" size="lg">
            Request Project Help
          </Button>
        </LinkContainer>
      </Col>
      <Col className="text-center">
        <LinkContainer to="/projects">
          <Button className="button" variant="warning" size="lg">
            Volunteer for Projects
          </Button>
        </LinkContainer>
      </Col>
    </Row>
    <Row className="track-titles justify-content-center">Request Project Help</Row>
    <Row className="justify-content-center">
      <Image src={business1} thumbnail />
      <Image src={business2} thumbnail />
      <Image src={business3} thumbnail />
      <Image src={business4} thumbnail />
      <Image src={business5} thumbnail />
    </Row>
    <Row className="track-body">
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        Are you a black business owner, activist, protest organizer, or community advocate looking for free help
        building an online platform, updating a website, creating social media content, or data visualizations?{' '}
        <Link to="/project-request">Submit a project request to our community.</Link>
      </Col>
    </Row>
    <Row className="track-titles justify-content-center">Volunteer for Projects</Row>
    <Row className="justify-content-center">
      <Image src={volunteer1} thumbnail />
      <Image src={volunteer2} thumbnail />
      <Image src={volunteer3} thumbnail />
      <Image src={business5} thumbnail />
    </Row>
    <Row className="track-body">
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        Are you a writer, designer, engineer, data scientist, illustrator, programmer, web developer, or marketing
        specialist who is looking to use your professional skills to do pro bono work to support Black lives?{' '}
        <Link to="/projects">Work on our available projects.</Link>
      </Col>
    </Row>
  </Container>
);

export { HomePage };
