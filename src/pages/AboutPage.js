import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import commPartnersIcon from '../assets/community-partners.png';
import reqProjectIcon from '../assets/form-icon.png';
import workProjectIcon from '../assets/project-selct-icon.png';
import mailIcon from '../assets/email-icon.png';
import fbLogo from '../assets/social_logos/Facebook_Logo.png';
import igLogo from '../assets/social_logos/IG_Logo.png';
import linkedinLogo from '../assets/social_logos/Linkedin_Logo.png';
import twitterLogo from '../assets/social_logos/Twitter_Logo.png';

import '../styling/AboutPage.css';

const AboutPage = () => (
  <Container className="about-page" fluid>
    <Row className="about-align-center">
      <Col xs={12} md={4}>
        <Image src={logo} className="mx-auto d-block about-icon" fluid />
      </Col>
      <Col>
        <h1 className="logotype">Build for Black Lives</h1>
        <h3 className="about-subheader logotype">Building pro bono projects to support Black lives</h3>
        <p>
          Build for Black Lives is a platform built to connect individuals who have tech/design skills with activists, organizers, and Black-owned businesses. We aim to provide pro bono work creating websites, mobile apps, data visualizations, graphics, digital marketing, and/or any other technical projects the organizations might need.
        </p>
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col className="about-order2">
        <h2>Community Partners</h2>
        <p>These are organizations that have helped build, endorse, and promote the platform.</p>
        <ul>
          <li>HackBeanpot</li>
          {/* removed placeholders. add partners as needed */}
          {/* <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li> */}
        </ul>
        <p>
          Contact us if you would like to get involved. We are always looking to partner with organizations who are
          committed to being anti-racist and want to help work toward justice and equity through tech. You can also
          join our&nbsp;
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

    <Row className="about-align-center">
      <Col xs={12} md={6}>
        <Image src={reqProjectIcon} className="mx-auto d-block about-request-icon" fluid />
      </Col>
      <Col>
        <h2>Request a Project</h2>
        <p>
          Are you a black business owner, activist, protest organizer, or community advocate looking for help building a
          website or online platform, creating social media content, data visualizations, or other projects?
        </p>
        <LinkContainer to="/project-request">
          <Button className="primary-button" size="med">
            Request a Project
          </Button>
        </LinkContainer>
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col className="order2">
        <h2>Work on a Project</h2>
        <p>
          Are you a designer, programmer, engineer, data scientist, writer, web developer, or marketing specialist
          looking to use your skills to do pro bono work to support Black lives?
        </p>
        <LinkContainer to="/projects">
          <Button className="primary-button" size="med">
            Work on a Project
          </Button>
        </LinkContainer>
      </Col>
      <Col xs={12} md={6}>
        <Image src={workProjectIcon} className="mx-auto d-block about-icon" fluid />
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col xs={12} md={6}>
        <Image src={mailIcon} className="mx-auto d-block about-contact-icon" fluid />
      </Col>
      <Col>
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us if you are interested in getting involved or have questions! You can also check
          out our HackBeanpot social media pages for more information about what we do as an organization.
        </p>
        <p>
          Email us at:&nbsp;
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a>
          <br />
          Visit us at:&nbsp;
          <a href="https://hackbeanpot.com/" target="_blank" rel="noopener noreferrer">
            hackbeanpot.com
          </a>
        </p>
        <Row>
          <Col className="col-9">
            <a href="https://www.facebook.com/hackbeanpot/" target="_blank" rel="noopener noreferrer">
              <Image src={fbLogo} className="about-social-logo" />
            </a>
            <a href="https://www.instagram.com/hackbeanpot/" target="_blank" rel="noopener noreferrer">
              <Image src={igLogo} className="about-social-logo" />
            </a>
            <a href="https://twitter.com/hackbeanpot" target="_blank" rel="noopener noreferrer">
              <Image src={twitterLogo} className="about-social-logo" />
            </a>
            <a href="https://www.linkedin.com/company/hackbeanpot-inc" target="_blank" rel="noopener noreferrer">
              <Image src={linkedinLogo} className="about-social-logo" />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export { AboutPage };
