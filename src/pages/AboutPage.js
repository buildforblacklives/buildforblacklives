import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Logo from '../assets/logo.js';
import MailIcon from '../assets/email-icon.js';

import TechDesign from '../assets/tech-design.js';

import '../styling/AboutPage.css';

import { ResourceItems } from '../data/resources';

const AboutPage = () => (
  <Container className="about-page" fluid>
    <Row className="about-align-center">
      <Col xs={12} md={8}>
        <h1 className="logotype text-center">Build for Black Lives</h1>
        <h3 className="about-subheader logotype text-center">Building pro bono projects to support Black lives</h3>
        <p>
          Build for Black Lives is a platform built to connect anti-racist individuals with activists, organizers, and
          Black-owned businesses to provide pro bono work creating websites, apps, graphics, social media content, data
          visualizations, and other projects. Our aim is to provide pro bono services as a means of working towards
          justice and reparations for a community that has been systematically oppressed, exploited, and underserved by
          the tech and design industries.
        </p>
        <p>
          Build for Black Lives was created by <a href="https://hackbeanpot.com/">HackBeanpot</a>, a 501(c)(3),
          Boston-based hackathon that aims to build a diverse, inclusive, learning-focused tech community. Given that
          racism has long been an issue in the tech space, we started this platform to bring the anti-racist tech
          community together to take action to support Black lives and fight white supremacy.
        </p>
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col className="padding-r about-order1">
        <h2>Racism in Tech and Design</h2>
        <p>
          The Tech and Design industries have had a long, racist, and non-inclusive history. To this day, these fields
          perpetuate white supremacy and fail to properly represent Black folx. Software plays a huge role in our
          society, but most tech is not created with Black folx in mind. In fact, lots of tech such as facial
          recognition software that misidentifies Black people, not only fails to represent members of the Black
          community, but in many cases has explicitly racist, dangerous, and even deadly effects.
        </p>
      </Col>
      <Col xs={12} md={4}>
        <TechDesign className="mx-auto d-block about-icon" fluid />
      </Col>
    </Row>

    <hr className="about-hr" />

    <Row className="row-align-center">
      <Col xs={12} md={4}>
        <Logo className="mx-auto d-block about-icon" fluid />
      </Col>
      <Col>
        <h2>Where does Build for Black Lives fit in?</h2>
        <p>
          This platform <strong>requires all project participants to be anti-racist</strong>, and be actively working to
          dismantle their own biases and white-centric coding and design practices.
        </p>

        <h4>We would like to make it clear that:</h4>
        <ul>
          <li>
            <p>
              Participating in this initiative is <strong>NOT</strong> an opportunity for participants to do "charity
              work", cleanse their guilt, or impose their opinions about what the Black community needs.
            </p>
          </li>
          <li>
            <p>
              Participating in this initiative <strong>IS</strong> an opportunity to create projects that are explicitly
              requested by activists, organizers and Black business owners, and to provide free services, in order to
              work towards justice and reparations for a community that has been systematically oppressed, exploited,
              and underserved for hundreds of years.
            </p>
          </li>
        </ul>
      </Col>
    </Row>

    <hr className="about-hr" />

    <Row className="row-align-center">
      <Col xs={12} md={8}>
        <h2>Anti-Racist Resources</h2>
        { ResourceItems.map((resource, i) =>
            <Row className="row-align-center" key={i}>
              <Col>
                <a
                  className="heading-link"
                  href={resource.link}
                >
                  {resource.title}
                </a>
                {resource.description}
              </Col>
            </Row>
         )}

        <Row className="row-align-center mt-3">
          <Col>
            <h4>Have additional resources you think should be featured?</h4>
            <p>
              Email us at: <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a>{' '}
              with the subject line: "Resource Suggestion".
            </p>
          </Col>
        </Row>
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col xs={12} md={4}>
        <MailIcon className="mx-auto d-block about-contact-icon" fluid />
      </Col>
      <Col>
        <h2>Contact Us</h2>
        <p>Want to get involved, or have questions, thoughts, feedback, or concerns?
           Email us at <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a>.
        </p>
        <p>
        Please use one of the following subject lines to help us filter through questions:
        </p>
        <p className="about-contact-list">

          <p>"[Volunteer] Question"</p>
          <p>"[Project Request] Question"</p>
          <p>"[Community Partner] Question"</p>
        </p>
        <Row className="about-social-logo-row">
          <Col className="col-12">
            <a href="mailto:buildforblacklives@hackbeanpot.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope fa-2x about-social-logo footer-text"></i>
            </a>
            <a
              href="https://www.facebook.com/Build-for-Black-Lives-105258644589291"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x about-social-logo footer-text" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/buildforblacklives/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x about-social-logo footer-text" aria-hidden="true"></i>
            </a>
            <a
              href="https://join.slack.com/t/northeastern-hac3935/shared_invite/zt-fctqwcqe-7~n_GXliEYbQzUeqERHH6A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-slack fa-2x about-social-logo footer-text" aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export { AboutPage };
