import React from 'react';

import { Nav, Navbar, Col, Container, Image, Row  } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
      return (
        <Navbar variant="dark" expand="lg" className="mt-4 p-4">
              <Col className="col-md-6 text-right">
                <a href="https://www.facebook.com/hackbeanpot/" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook-official fa-2x socialLogo footer-text" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/hackbeanpot/" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-2x socialLogo footer-text" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/hackbeanpot" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter-square fa-2x socialLogo footer-text" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/company/hackbeanpot-inc" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square fa-2x socialLogo footer-text" aria-hidden="true"></i>
                </a>
              </Col>
              <Col className="col-md-6 mt-3">
                <span className="footer-text">Email us at: </span>
                <a href="mailto:buildforblacklives@hackbeanpot.com">
                  buildforblacklives@hackbeanpot.com
                </a>
                <br />
                <span className="footer-text">Visit us at: </span>
                <a href="https://hackbeanpot.com/"
                target="_blank" rel="noopener noreferrer">
                  hackbeanpot.com
                </a>
              </Col>
        </Navbar>
      );
    }
  }
  
  export { Footer };