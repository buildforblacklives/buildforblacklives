import React from 'react';
import '../styling/about.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
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
          Build for Black Lives, a platform created by HackBeanpot, connects 
          individuals who have tech/design skills with activists, organizers, 
          and Black-owned businesses. We aim to provide pro bono work creating 
          websites, mobile apps, data visualizations, graphics, digital 
          marketing, and/or any other technical projects the organizations might
           need. The length of these projects could range from a few days to 
           more long term.
          <br />
          <br />
          HackBeanpot is a Boston-based hackathon, and as an organization we aim
           to build an inclusive community and provide resources that allow our 
          community to support each other in challenging times. Racial 
          inequality has long been an issue in the tech space. While change 
          does not happen overnight, we want to make an active effort to bring 
          the tech community together to help support Black lives and fight for 
          racial justice.
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
        <Col>
          <LinkContainer to="/projects">
            <Button className="button" variant="warning" size="med">
              Work on a Project
            </Button>
          </LinkContainer>
        </Col>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col className="col"></Col>
      <Col className="col-8">
        <h2>Contact Us</h2>
        <a href="mailto:buildforblacklives@hackbeanpot.com">
          buildforblacklives@hackbeanpot.com
        </a>
        <br />
        <a href="https://www.facebook.com/hackbeanpot/">
          Facebook
        </a>
        <br />
        <a href="https://www.instagram.com/hackbeanpot/">
          Instagram
        </a>
        <br />
        <a href="https://www.linkedin.com/company/hackbeanpot-inc">
          LinkedIn
        </a>
        <br />
        <a href="https://twitter.com/hackbeanpot">
          Twitter
        </a>
        {/* TODO include HBP socials */}
      </Col>
    </Row>

  </Container>
);

export { AboutPage };
