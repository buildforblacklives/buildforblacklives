import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import commPartnersIcon from '../assets/community-partners.png';
import reqProjectIcon from '../assets/form-icon.png';
import workProjectIcon from '../assets/project-selct-icon.png';
import mailIcon from '../assets/email-icon.png';
import '../styling/AboutPage.css';

const AboutPage = () => (
  <Container className="container" fluid>
    <Row className="align-center">
      <Col xs={12} md={6}>
        <Image src={logo} className="mx-auto d-block about-icon" fluid />
      </Col>
      <Col>
        <h1>Build for Black Lives</h1>
        <h4>Building pro bono projects to support Black lives</h4>
        <p>
          Build for Black Lives is a platform built to connect anti-racist 
          individuals with activists, organizers, and black-owned businesses to 
          provide pro bono work creating websites, apps, graphics, social media 
          content, data visualizations, and/or other projects.
          Now more than ever, it has become essential for businesses and 
          organizations to have an online presence. Build for Black Lives aims 
          to reduce discrimination against Black folks when searching for tech 
          and design services.
        </p>
        <p>
          This initiative was started by&nbsp;
          <a href="https://hackbeanpot.com/">
            HackBeanpot
          </a>
          , a Boston-based hackathon that aims to build a diverse, inclusive, 
          learning-focused tech community. Racial inequality has long been an 
          issue in the tech space. As an organization that strives to combat 
          racial inequity, we started this platform in an effort to bring the 
          anti-racist tech community together to take action to support Black 
          lives and fight for racial justice
        </p>
      </Col>
    </Row>

    <hr />

    <Row className="align-center">
      <Col className="order2">
        <h2>Community Partners</h2>
        <p>These are organizations that have helped build, endorse, and promote the platoform.</p>
        <ul>
          <li>HackBeanpot</li>
        </ul>
        <p>
          We are open to partnering with organizations that are committed to 
          ending racial inequality and discrimination in tech. If your 
          organization would like to work with Build for Black Lives, you are 
          welcome to&nbsp;
          {/* FIXME update */}
          <a href="mailto:buildforblacklives@hackbeanpot.com">email us</a>
          . You can also join our&nbsp;
          <a href="https://join.slack.com/t/northeastern-hac3935/shared_invite/zt-fctqwcqe-7~n_GXliEYbQzUeqERHH6A">
            Slack Workspace
          </a>
          &nbsp;to learn more from the organizing team.
        </p>
      </Col>
      <Col xs={12} md={6}>
        <Image src={commPartnersIcon} className="mx-auto d-block about-icon" fluid />
      </Col>
    </Row>

    <hr />

    <Row className="align-center">
      <Col xs={12} md={6}>
        <Image src={reqProjectIcon} className="mx-auto d-block about-icon" fluid />
      </Col>
      <Col>
        <h2>Request a Project</h2>
        <p>
          Are you a black business owner, activist, protest organizer, or 
          community advocate looking for free services building a website or 
          online platform, creating social media content, data visualizations, 
          or other projects?
        </p>
        <LinkContainer to="/project-request">
          <Button className="button" variant="warning" size="med">
            Request a Project
          </Button>
        </LinkContainer>
      </Col>
    </Row>

    <hr />

    <Row className="align-center">
      <Col className="order2">
        <h2>Work on a Project</h2>
        <p>
          Are you an anti-racist writer, designer, engineer, data scientist, 
          illustrator, programmer, web developer, or marketing specialist who is
           looking to use your professional skills to do pro bono work to 
           support Black lives?
        </p>
        <LinkContainer to="/projects">
          <Button className="button" variant="warning" size="med">
            Work on a Project
          </Button>
        </LinkContainer>
      </Col>
      <Col xs={12} md={6}>
        <Image src={workProjectIcon} className="mx-auto d-block about-icon" fluid />
      </Col>
    </Row>

    <hr />

    <Row className="align-center">
      <Col xs={12} md={6}>
        <Image src={mailIcon} className="mx-auto d-block about-icon" fluid />
      </Col>
      <Col>
        <h2>Contact Us</h2>
        <p>
        Want to get involved, or have questions, thoughts, feedback or concerns?
        </p>
        Email us at:&nbsp;
        {/* FIXME update */}
        <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a>
        <Row>
          <Col className="col-9">
            <a href="mailto:buildforblacklives@hackbeanpot.com" 
            target="_blank" rel="noopener noreferrer">
              <i class="fas fa-envelope fa-2x socialLogo footer-text"></i>
            </a>
            <a href="https://www.facebook.com/Build-for-Black-Lives-105258644589291" 
            target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x socialLogo footer-text" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/buildforblacklives/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x socialLogo footer-text" aria-hidden="true"></i>
            </a>
            <a href="https://join.slack.com/t/northeastern-hac3935/shared_invite/zt-fctqwcqe-7~n_GXliEYbQzUeqERHH6A" 
            target="_blank" rel="noopener noreferrer">
              <i className="fab fa-slack fa-2x socialLogo footer-text" aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export { AboutPage };
