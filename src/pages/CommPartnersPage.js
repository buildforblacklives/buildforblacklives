import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CommPartnersIcon from '../assets/community-partners.js';
import MailIcon from '../assets/email-icon.js';
import TechDesign from '../assets/tech-design.js';

import '../styling/AboutPage.css';
import '../styling/CommPartnersPage.css';

const outreachPartners = [
  { name: 'HackBeanpot', url: 'https://hackbeanpot.com/' },
  { name: 'Sandbox', url: 'https://www.sandboxnu.com/' },
  { name: 'Khoury College of Computer Sciences', url: 'https://www.khoury.northeastern.edu/' },
  { name: 'Unofficial Committee', url: 'https://www.unofficialcommittee.com/' },
  { name: 'Common Impact', url: 'https://commonimpact.org/' }
];

const servicePartners = [
  { name: 'Unofficial Committee', url: 'https://www.unofficialcommittee.com/' },
  { name: 'Support Community', url: 'https://supportcommunity.com/' }
];

const CommPartnersPage = () => (
  <Container className="comm-partners-page" fluid>
    <Row>
      <h1>Community Partners</h1>
    </Row>
    <Row className="about-align-center">
      <Col xs={12} md={6}>
        <CommPartnersIcon className="mx-auto d-block about-icon" fluid />
      </Col>
      <Col>
        <p>
          The success of Build for Black Lives as a platform would not be possible without our Community Partners, who
          have helped us expand the reach of Build for Black Lives by sharing with their respective audiences, offering
          their skills to help build out projects on our platform, or suggesting other ways they would like to help
          support our cause.
        </p>
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col className="about-order2">
        <h2>Outreach</h2>
        <p>Do you have an audience that would be a good fit for our platform, as either clients or volunteers?</p>
        <p>
          We would love your help in spreading the word about the existence of our platform! Share on your social media,
          help promote our platform, and email local businesses. We'll provide you the media assets and email templates
          to get started.
        </p>
        <p className="mt-2">Our current Outreach Partners include:</p>
        <div className="about-community-partners-ul">
          {outreachPartners.map((partner) => (
            <p key={partner.name}>
              <a href={partner.url}>{partner.name}</a>
            </p>
          ))}
        </div>
      </Col>
      <Col xs={12} md={6}>
        <MailIcon className="mx-auto d-block about-icon" fluid />
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col xs={12} md={6}>
        <TechDesign className="mx-auto d-block about-request-icon" fluid />
      </Col>
      <Col>
        <h2>Service</h2>
        <p>
          Is your organization able to provide a resource that would be invaluable to building out the project requests
          on our platform or help us grow our platform?
        </p>
        <p>
          We've really appreciated the community reaching out to us in wanting to support our platform and would love
          for you to join our cause!
        </p>
        <p className="mt-2">Our current Service Partners include:</p>
        <div className="about-community-partners-ul">
          {servicePartners.map((partner) => (
            <p key={partner.name} >
              <a href={partner.url}>{partner.name}</a>
            </p>
          ))}
        </div>
      </Col>
    </Row>

    <hr />

    <Row className="about-align-center">
      <Col className="about-order2">
        <h2>Become a Community Partner</h2>
        <p>
          You can become a Community Partner by helping us with outreach or providing your services to help with
          projects. If you feel like is there another way that you can help us with our cause, we'd love to hear it! We
          are always open to partnering with organizations that are committed to fighting racial inequity.
        </p>
        <p>
          If your organization would like to work with us, please email us at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with the subject
          line "[Community Partner]" or join our{' '}
          <a href="https://join.slack.com/t/northeastern-hac3935/shared_invite/zt-fctqwcqe-7~n_GXliEYbQzUeqERHH6A">
            Slack Workspace
          </a>{' '}
          to learn more.
        </p>
      </Col>
    </Row>
  </Container>
);

export { CommPartnersPage };
