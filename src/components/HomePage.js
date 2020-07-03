import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import projsubmission1 from '../assets/projsubmission1.png';
import projsubmission2 from '../assets/projsubmission2.png';
import projsubmission3 from '../assets/projsubmission3.png';
import volunteer1 from '../assets/volunteer1.png';
import volunteer2 from '../assets/volunteer2.png';
import volunteer3 from '../assets/volunteer3.png';
import arrow from '../assets/arrow.png';

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
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <Image src={projsubmission1} />
      <Image src={arrow} />
      <Image src={projsubmission2} />
      <Image src={arrow} />
      <Image src={projsubmission3} />
    </Row>
    <Row className="track-body">
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        Are you a black business owner, activist, protest organizer, or community advocate looking for free help
        building an online platform, updating a website, creating social media content, or data visualizations?{' '}
        <Link to="/project-request">Submit a project request to our community.</Link>
      </Col>
    </Row>
    <Row className="track-titles justify-content-center">Volunteer for Projects</Row>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <Image src={volunteer1} />
      <Image src={arrow} />
      <Image src={volunteer2} />
      <Image src={arrow} />
      <Image src={volunteer3} />
    </Row>
    <Row className="track-body">
      <Col xs={12} md={{ span: 6, offset: 3 }}>
        Are you a writer, designer, engineer, data scientist, illustrator, programmer, web developer, or marketing
        specialist who is looking to use your professional skills to do pro bono work to support Black lives?{' '}
        <Link to="/projects">Work on our available projects.</Link>
      </Col>
      <Image src={arrow} />
    </Row>
  </Container>
);

export { HomePage };
