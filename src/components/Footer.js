import React from 'react';
import { Navbar, Col } from 'react-bootstrap';

const Footer = () => (
  <div variant="dark" expand="lg" className="p-4 justify-content-center text-center footer">
    <Col className="col-auto text-center">
      <span className="footer-text">
        Made in solidarity by
              <a href="https://hackbeanpot.com/" target="_blank" rel="noopener noreferrer"> HackBeanpot</a>.
            </span>
    </Col>
    <Col className="col-auto text-center text-nowrap footer-social">
      <a href="https://www.facebook.com/Build-for-Black-Lives-105258644589291"
        target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
      </a>
      <a href="mailto:buildforblacklives@hackbeanpot.com"
        target="_blank" rel="noopener noreferrer">
        <i class="fas fa-envelope fa-2x footer-social-icon footer-text"></i>
      </a>
      <a href="https://join.slack.com/t/northeastern-hac3935/shared_invite/zt-fctqwcqe-7~n_GXliEYbQzUeqERHH6A"
        target="_blank" rel="noopener noreferrer">
        <i className="fab fa-slack fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
      </a>
    </Col>
  </div>
);

export { Footer };