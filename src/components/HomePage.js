import React from 'react';
import '../styling/HomePage.css';
import { Col, Container, Row } from 'react-bootstrap';

const HomePage = () => (
  <Container fluid>
    <Row>
      <Col className="logotype"> Build for Black Lives</Col>
    </Row>
    <Row>
      <Col className="bio-blurb" md={{ span: 6, offset: 3 }}>
        We provide a platform to connect black-owned businesses or organizations fighting racial injustice to developers
        and designers who would like to support the cause with their technical skills.
      </Col>
    </Row>
    <Row>
      <Col className="track-titles">Request Project Help</Col>
      <Col xs={2}></Col>
      <Col className="track-titles">Volunteer for Projects</Col>
    </Row>
  </Container>
);

export { HomePage };
