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
  { name: 'Common Impact', url: 'https://commonimpact.org/' }
];

const servicePartners = [
  { name: 'Unofficial Committee', url: 'https://www.unofficialcommittee.com/' },
  { name: 'Support Community, Inc', url: 'https://supportcommunity.com/' },
  {
    name: 'Community Design Studio, Lesley Art + Design',
    url: 'https://lesley.edu/academics/college-of-art-design/community-engagement'
  }
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
        <p>Our Outreach partners have helped us spread the word about our platform by <b>sharing</b> on their social media pages, <b>promoting</b> our
          platform, and <b>emailing</b> local businesses.
        </p>
        <p className="mt-2">Current Outreach Partners include:</p>
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
          Our Service partners have <b>provided a resource</b> that is invaluable to building out the projects requested through our platform.
          We have really appreciated the community reaching out to us in wanting to support the cause!
        </p>
        <p className="mt-2">Current Service Partners include:</p>
        <div className="comm-partners-ul">
          {servicePartners.map((partner) => (
            <p key={partner.name}>
              <a href={partner.url} target="_blank" rel="noopener noreferrer">{partner.name}</a>
            </p>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
);

export { CommPartnersPage };
