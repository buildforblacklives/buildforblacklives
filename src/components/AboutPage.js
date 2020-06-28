import React from 'react';
import '../styling/about.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
{/* TODO 
  - images
  - style cleanup
  - spacing cleanup
*/}

const AboutPage = () => (
  <Container fluid="md">

    <Row>
      {/* TODO place image here (logo) */}
      <Col className="col"></Col>
      <Col className="col-8">
        <h1>Build for Black Lives</h1>
        <p>
          This is a blurb about who we are and why we started this project and
          about how it is more about connecting people. Our mission and values 
          about supporting Black lives. We want allies to educate themselves and
           use this platform as a way to support Black lives.
          <br />
          <br />
          This is a blurb about who we are and why we started this project and
          about how it is more about connecting people. Our mission and values 
          about supporting Black lives. We want allies to educate themselves and
           use this platform as a way to support Black lives.
        </p>
      </Col>
    </Row>

    <hr />
    
    <Row>
      <Col className="col"></Col>
      <Col className="col-10">
        <h2>Community Partners</h2>
        <p>
          These are organizations that have helped build, endorse, and promote 
          the platoform.
        </p>
        <ul>
          <li>HackBeanpot</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </Col>
    </Row>

    <hr />
    
    <Row>
      <Col className="col"></Col>
      <Col className="col-8">
        <h2>Request a Project</h2>
        <p>
          Are you a black business owner, activist, protest organizer, or 
          community advocate looking for help building a website or online 
          platform, creating social media content, data visualizations, or other
           projects?
        </p>
        {/* TODO: add request button */}
        <Col>
          <LinkContainer to="/project-request">
            <Button className="button" variant="warning" size="med">
              Request a Project
            </Button>
          </LinkContainer>
        </Col>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col className="col"></Col>
      <Col className="col-10">
        <h2>Work on a Project</h2>
        <p>
          Are you a designer, programmer, engineer, data scientist, writer, web 
          developer, or marketing specialist looking to use your skills to do 
          pro bono work to support Black lives?
        </p>
        {/* TODO: add open projects button */}
        <Col>
        <LinkContainer to="/projects">
          <Button className="button" variant="warning" size="med">
            Work on a Project
          </Button>
        </LinkContainer>
      </Col>
      </Col>
    </Row>

  </Container>
);

export { AboutPage };
