import React from 'react';

import { Nav, Navbar, Col, Container, Image, Row  } from 'react-bootstrap';
import logo from '../media/blm.png';
import fbLogo from '../assets/social_logos/Facebook_Logo.png';
import igLogo from '../assets/social_logos/IG_Logo.png';
import linkedinLogo from '../assets/social_logos/Linkedin_Logo.png';
import twitterLogo from '../assets/social_logos/Twitter_Logo.png';

class Footer extends React.Component {
    render() {
      return (
        <Navbar variant="dark" expand="lg" className="mt-4 p-4">
              <Col className="col-6 text-right">
                <a href="https://www.facebook.com/hackbeanpot/" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook-official fa-2x socialLogo" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/hackbeanpot/" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-2x socialLogo" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/hackbeanpot" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter-square fa-2x socialLogo" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/company/hackbeanpot-inc" 
                target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square fa-2x socialLogo" aria-hidden="true"></i>
                </a>
              </Col>
              <Col className="col-6 text-nowrap">
                Email us at:&nbsp;
                <a href="mailto:buildforblacklives@hackbeanpot.com">
                  buildforblacklives@hackbeanpot.com
                </a>
                <br />
                Visit us at:&nbsp;
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