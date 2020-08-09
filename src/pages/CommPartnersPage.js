import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Logo from '../assets/logo.js';
import CommPartnersIcon from '../assets/community-partners.js';
import ReqProjectIcon from '../assets/form-icon.js';
import WorkProjectIcon from '../assets/project-select-icon.js';
import MailIcon from '../assets/email-icon.js';

import '../styling/AboutPage.css';

const communityPartners = ['HackBeanpot', 'Unofficial Committee']

const CommPartnersPage = () => (
  <Container className="about-page" fluid>

    <Row className="about-align-center">
      <Col className="about-order2">
        <h2>Community Partners</h2>
        <p>The mission of a Community Partner is to expand the reach of Build for Black Lives within your organization, to your followers, and to your local communities</p>
        <div className="about-community-partners-ul">
          {communityPartners.map(partner => <p key={partner}>{partner}</p>)}
        </div>
        <p>
        You can be a Community Partner by having your organization share on your social media, help promote our platform, and email local businesses. We are open to partnering with organizations that are committed to fighting racial inequity. If your organization would like to work with us, please{' '}
          <a href="mailto:buildforblacklives@hackbeanpot.com">email us</a> and join our{' '}
          <a href="https://join.slack.com/t/northeastern-hac3935/shared_invite/zt-fctqwcqe-7~n_GXliEYbQzUeqERHH6A">
            Slack Workspace
          </a>{' '}to learn more.
        </p>
      </Col>
      <Col xs={12} md={6}>
        <CommPartnersIcon className="mx-auto d-block about-icon" fluid />
      </Col>
    </Row>

   
  </Container>
);

export { CommPartnersPage };
