import React from 'react';
import '../styling/about.css';
import { Button, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
{/* TODO 
- request a project button
- open projects button
- style cleanup
- spacing cleanup
*/}

const AboutPage = () => (
  <div className="container mt-5">

    <div className="row">
      <div className="col"></div>
      {/* TODO place image here (logo) */}
      <div className="col-8">
        <h1>Build for Black Lives</h1>
        <p>
          This is a blurb about who we are and why we started this project and
          about how it is more about connecting people. Our mission and values 
          about supporting Black lives. We want allies to educate themselves and
           use this platform as a way to support Black lives.
          <br />
          <br />
          This is a blurb about who we are and why we started this project and
          about how it is more about connecting people. Our mission and values 
          about supporting Black lives. We want allies to educate themselves and
           use this platform as a way to support Black lives.
        </p>
      </div>
    </div>

    <hr />
    
    <div className="row">
      <div className="col"></div>
      <div className="col-10">
        <h2>Community Partners</h2>
        <p>
          These are organizations that have helped build, endorse, and promote 
          the platoform.
        </p>
        <ul>
          <li>HackBeanpot</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
      <div className="col-8"></div>
    </div>

    <hr />
    
    <div className="row">
      <div className="col"></div>
      <div className="col-8">
        <h2>Request a Project</h2>
        <p>
          Are you a black business owner, activist, protest organizer, or 
          community advocate looking for help building a website or online 
          platform, creating social media content, data visualizations, or other
           projects?
        </p>
        {/* TODO: add request button */}
        <Col>
          <LinkContainer to="/project-request">
            <Button className="button" variant="warning" size="med">
              Request a Project
            </Button>
          </LinkContainer>
        </Col>
      </div>
    </div>

    <hr />

    <div className="row">
      <div className="col"></div>
      <div className="col-10">
        <h2>Work on a Project</h2>
        <p>
          Are you a designer, programmer, engineer, data scientist, writer, web 
          developer, or marketing specialist looking to use your skills to do 
          pro bono work to support Black lives?
        </p>
        {/* TODO: add open projects button */}
        <Col>
        <LinkContainer to="/projects">
          <Button className="button" variant="warning" size="med">
            Work on a Project
          </Button>
        </LinkContainer>
      </Col>
      </div>
    </div>
    <div><br /></div>
  </div>
);

export { AboutPage };
