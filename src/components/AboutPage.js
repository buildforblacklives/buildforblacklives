import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../media/blm.png';
import fbLogo from '../assets/social_logos/Facebook_Logo.png';
import igLogo from '../assets/social_logos/IG_Logo.png';
import linkedinLogo from '../assets/social_logos/Linkedin_Logo.png';
import twitterLogo from '../assets/social_logos/Twitter_Logo.png';
/* TODO
  - images
  - Contact Us icons
  - style cleanup
*/

const AboutPage = () => (
  <Container className="container" fluid="md">
    <Row>
      <Col>
        <Image src={logo} />
      </Col>
      <Col className="col-9">
        <h1>Build for Black Lives</h1>
        <p>
          Build for Black Lives, a platform created by HackBeanpot, connects 
          individuals who have tech/design skills with activists, organizers, 
          and Black-owned businesses. We aim to provide pro bono work creating 
          websites, mobile apps, data visualizations, graphics, digital 
          marketing, and/or any other technical projects the organizations might
           need. The length of these projects could range from a few days to 
           more long term.
          </p>
          <p>
          HackBeanpot is a Boston-based hackathon, and as an organization we aim
           to build an inclusive community and provide resources that allow our 
          community to support each other in challenging times. Racial 
          inequality has long been an issue in the tech space. While change 
          does not happen overnight, we want to make an active effort to bring 
          the tech community together to help support Black lives and fight for 
          racial justice.
        </p>
      </Col>
    </Row>

    <hr />
    
    <Row>
      <Col>
        <h2>Community Partners</h2>
        <p>
          These are organizations that have helped build, endorse, and promote 
          the platoform.
        </p>
        <ul>
          <li>HackBeanpot</li>
          {/* removed placeholders. add partners as needed */}
          {/* <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li> */}
        </ul>
        <p>
          Contact us if you would like to get involved.
        </p>
      </Col>
    </Row>

    <hr />
    
    <Row>
      <Col>
        <h2>Request a Project</h2>
        <p>
          Are you a black business owner, activist, protest organizer, or 
          community advocate looking for help building a website or online 
          platform, creating social media content, data visualizations, or other
           projects?
        </p>
        <LinkContainer to="/project-request">
          <Button className="button" variant="warning" size="med">
            Request a Project
          </Button>
        </LinkContainer>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col>
        <h2>Work on a Project</h2>
        <p>
          Are you a designer, programmer, engineer, data scientist, writer, web 
          developer, or marketing specialist looking to use your skills to do 
          pro bono work to support Black lives?
        </p>
        <LinkContainer to="/projects">
          <Button className="button" variant="warning" size="med">
            Work on a Project
          </Button>
        </LinkContainer>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col>
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us if you are interested in getting involved
           or have questions! You can also check out our HackBeanpot social 
           media pages for more information about what we do as an organization.
        </p>
        <a href="mailto:buildforblacklives@hackbeanpot.com">
          buildforblacklives@hackbeanpot.com
        </a>
        <br />
        <a href="https://hackbeanpot.com/"
        target="_blank" rel="noopener noreferrer">
          hackbeanpot.com
        </a>
        <Row>
          <Col className="col-9">
          <a href="https://www.facebook.com/hackbeanpot/" 
          target="_blank" rel="noopener noreferrer">
            <Image src={fbLogo} className="socialLogo" />
          </a>
          <a href="https://www.instagram.com/hackbeanpot/" 
          target="_blank" rel="noopener noreferrer">
            <Image src={igLogo} className="socialLogo" />
          </a>
          <a href="https://www.linkedin.com/company/hackbeanpot-inc" 
          target="_blank" rel="noopener noreferrer">
            <Image src={linkedinLogo} className="socialLogo" />
          </a>
          <a href="https://twitter.com/hackbeanpot" 
          target="_blank" rel="noopener noreferrer">
          <Image src={twitterLogo} className="socialLogo" />
          </a>
          </Col>
        </Row>
      </Col>
    </Row>

  </Container>
);

export { AboutPage };
