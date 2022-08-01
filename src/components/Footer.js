import React from 'react';
import * as constants from '../data/constants';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <span className="footer-text">
        Made in Solidarity.
      </span>
      <div className="footer-icons">
        <a href={constants.EMAIL_MAILTO} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope fa-2x footer-social-icon footer-text"></i>
        </a>
        <a
          href={constants.FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
        <a href={constants.INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
        <a href={constants.TWITTER} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
        <a href={constants.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
);

export { Footer };
