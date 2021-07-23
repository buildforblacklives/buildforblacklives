import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <span className="footer-text">
        Made in solidarity by{' '}
        <a href="https://hackbeanpot.com/" target="_blank" rel="noopener noreferrer">
          HackBeanpot
        </a>
        .
      </span>
      <div className="footer-icons">
        <a href="mailto:buildforblacklives@hackbeanpot.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope fa-2x footer-social-icon footer-text"></i>
        </a>
        <a
          href="https://www.facebook.com/Build-for-Black-Lives-105258644589291"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/buildforblacklives/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/bld4blacklives" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/company/build-for-black-lives/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
        <a href="https://join.slack.com/t/buildforblacklives/shared_invite/zt-t4s9pp2q-r8mJ2nJDPU52sfyvsWHlAQ" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-slack fa-2x footer-social-icon footer-text" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
);

export { Footer };
