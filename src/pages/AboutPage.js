import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Logo from '../assets/logo.js';
import MailIcon from '../assets/email-icon.js';
import NewsIcon from '../assets/news-icon.js';

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
          Build for Black Lives was created in 2020 by a group of nine women on the
          <a href="https://hackbeanpot.com/" target="_blank" rel="noopener noreferrer"> HackBeanpot</a> organizing team.
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
        <TechDesign className="mx-auto d-block about-icon about-tech-design-icon" fluid />
      </Col>
    </Row>

    <hr />

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

    <hr id="resources" />

    <Row className="row-align-center">
      <Col xs={12} md={8}>
        <h2 className="text-center">Anti-Racist Resources</h2>
        { ResourceItems.map((resource, i) =>
            <Row className="row-align-center" key={i}>
              <Col>
                <a
                  className="heading-link"
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
              Email us at: <a href="mailto:contact@buildforblacklives.com">contact@buildforblacklives.com</a>{' '}
              with the subject line: "Resource Suggestion".
            </p>
          </Col>
        </Row>
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col className="about-order1">
        <h2>Build for Black Lives in the News</h2>
        <p> Check out these latest news articles featuring Build for Black Lives to learn
            more about the motivation and vision behind this platform.
        </p>
        <p className="about-list">
          <p>

            <a href="https://news.northeastern.edu/2020/08/10/can-technology-reduce-racial-inequity-build-for-black-lives-a-student-built-platform-could-help/"
               target="_blank"
               rel="noopener noreferrer">
              Can Technology Reduce Racial Inequality?
            </a>
            { " —" }
             <span className="font-italic"> News@Northeastern</span>
          </p>
          <p>
            <a href="https://undergraduatenews.khoury.northeastern.edu/2020/07/31/build-for-black-lives/"
               target="_blank"
               rel="noopener noreferrer">
              Undergraduate News: Build for Black Lives
            </a>
            { " —" }
            <span className="font-italic"> Khoury College</span>
          </p>
          <p>
            <a href="https://huntnewsnu.com/63112/city-pulse/build-for-black-lives-uses-tech-skills-for-social-change/"
               target="_blank"
               rel="noopener noreferrer">
              Build for Black Lives uses tech skills for social change
            </a>
            { " —" }
            <span className="font-italic"> The Huntington News</span>
          </p>
        </p>
      </Col>
      <Col xs={12} md={4}>
        <NewsIcon className="mx-auto d-block about-icon about-news-icon" fluid />
      </Col>
    </Row>

   <hr />

    <Row className="row-align-center">
      <Col xs={12} md={4}>
        <MailIcon className="mx-auto d-block about-icon about-mail-icon" fluid />
      </Col>
      <Col>
        <h2>Contact Us</h2>
        <p>Want to get involved, or have questions, thoughts, feedback, or concerns?
           Email us at <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a>.
        </p>
        <p>
        Please use one of the following subject lines to help us filter through questions:
        </p>
        <p className="about-list">

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
            <a href="https://twitter.com/bld4blacklives" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x about-social-logo footer-text" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/company/build-for-black-lives/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x about-social-logo footer-text" aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export { AboutPage };
