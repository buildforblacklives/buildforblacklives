import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CommPartnersIcon from '../assets/community-partners.js';
import MailIcon from '../assets/email-icon.js';
import TechDesign from '../assets/tech-design.js';

import '../styling/CommPartnersPage.css';

const outreachPartners = [
  { name: 'HackBeanpot', url: 'https://hackbeanpot.com/' },
  { name: 'Khoury College of Computer Sciences', url: 'https://www.khoury.northeastern.edu/' },
  { name: 'Unofficial Committee', url: 'https://www.unofficialcommittee.com/' },
  { name: 'Common Impact', url: 'https://commonimpact.org/' },
  { name: 'BBOSS', url: 'https://www.linkedin.com/company/northeastern-bboss' }
];

const servicePartners = [
  { name: 'Unofficial Committee', url: 'https://www.unofficialcommittee.com/' },
  { name: 'Support Community, Inc', url: 'https://supportcommunity.com/' },
  {
    name: 'Community Design Studio, Lesley Art + Design',
    url: 'https://lesley.edu/academics/college-of-art-design/community-engagement'
  },
  { name: 'BBOSS', url: 'https://www.linkedin.com/company/northeastern-bboss' }
];

const CommPartnersPage = () => (
  <Container className="comm-partners-page" fluid>
    <Row>
      <h1>Community Partners</h1>
    </Row>
    <Row className="comm-align-center">
      <Col xs={12}>
        <CommPartnersIcon className="mx-auto d-block comm-icon" fluid />
      </Col>
      <Col lg={6} md={12} >
        <p>
          The success of Build for Black Lives as a platform would not be possible without our Community Partners, who
          have helped us expand the reach of Build for Black Lives by sharing with their respective audiences or
          offering their skills to help build out projects on our platform.
        </p>
      </Col>
    </Row>

    <hr />

    <Row className="comm-align-center">
      <Col className="comm-order2">
        <h2>Outreach</h2>
        <p>Do you have an audience that would be a good fit for our platform, as either clients or volunteers?</p>
        <p>
          We would love your help in spreading the word about our platform! <b>Share</b> on your social media, <b>promote</b> our
          platform, and <b>email</b> local businesses. We'll provide you the media assets and email templates to get started.
        </p>
        <p className="mt-2">Our current Outreach Partners include:</p>
        <div className="comm-partners-ul">
          {outreachPartners.map((partner) => (
            <p key={partner.name}>
              <a href={partner.url} target="_blank" rel="noopener noreferrer">{partner.name}</a>
            </p>
          ))}
        </div>
      </Col>
      <Col xs={12} md={4}>
        <MailIcon className="mx-auto d-block comm-icon comm-mail-icon" fluid />
      </Col>
    </Row>

    <hr />

    <Row className="comm-align-center">
      <Col xs={12} md={4}>
        <TechDesign className="mx-auto d-block comm-icon comm-tech-design-icon" fluid />
      </Col>
      <Col>
        <h2>Service</h2>
        <p>
          Is your organization able to <b>provide a resource</b> that would be invaluable to building out any of the project
          requests on our platform?
        </p>
        <p>
          We've really appreciated the community reaching out to us in wanting to support our platform and would love
          for you to join our cause!
        </p>
        <p className="mt-2">Our current Service Partners include:</p>
        <div className="comm-partners-ul">
          {servicePartners.map((partner) => (
            <p key={partner.name}>
              <a href={partner.url} target="_blank" rel="noopener noreferrer">{partner.name}</a>
            </p>
          ))}
        </div>
      </Col>
    </Row>

    <hr />

    <Row className="comm-align-center">
      <Col className="comm-order2">
        <h2>Become a Community Partner</h2>
        <p>
          You can become a Community Partner by helping us with outreach or providing your services to help with
          projects. If you feel like there is another way that you can help us with our cause, we'd love to hear it! We
          are always open to partnering with organizations that are committed to fighting racial inequity.
        </p>
        <p>
          If your organization would like to work with us, please email us at{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">buildforblacklives@hackbeanpot.com</a> with the subject
          line "[Community Partner]" or DM us on social media for a <b>link to our Slack workspace</b>.
        </p>
      </Col>
    </Row>
  </Container>
);

export { CommPartnersPage };
