import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import CustomAccordion from '../components/CustomAccordion';
import ConfirmationCheck from '../components/ProjectWork/ConfirmationCheck';
import ContactSection from '../components/ProjectWork/ContactSection';
import ProjectDetails from '../components/ProjectWork/ProjectDetails';
import ProjectFlow from '../assets/flow_diagrams/project_steps_flow.js';

import '../styling/ProjectWorkPage.css';

/*
Assumes project object shape is:
{
  orgName: str,
  orgAbout: str,
  orgEmail: str,
  projectTitle: str,
  projectAbout: str,
  projectDeadline: str, (??)
}
*/

// example project, delete this later
const example = {
  orgName: 'HackBeanpot',
  orgAbout:
    'this is what our org does. Which likely has a lot of words, resulting in multiple lines on the screen. We love beans in our org. bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean',
  orgEmail: 'team@hbp.com',
  projectTitle: 'Sample Website Project',
  projectAbout:
    'This is what the project is about. Which is about beans. bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean',
  projectDeadline: 'Estimated 2 weeks'
};

const ProjectWorkPage = ({ match }) => {
  // const { projectId } = match.params;
  const [hasConfirmed, setHasConfirmed] = useState(false);

  // TODO add useeffect to fetch project details based on project id
  const project = example;

  return (
    <Container id="project-work-page" className="justify-content-md-center">
      <h1>Ready to work on this project?</h1>
      <div className="justify-content-center d-flex flex-wrap align-items-center">
        <ProjectFlow className="flow-images project-work-flow" />
      </div>
      <section className="accordion-section-container">
        <CustomAccordion
          large
          id="antiracism"
          header="1. Commit to Anti-Racism"
          body={<ConfirmationCheck hasConfirmed={hasConfirmed} setHasConfirmed={setHasConfirmed} />}
        />
        <CustomAccordion
          large
          header="2. Review Project Details"
          id="details"
          body={<ProjectDetails project={project} />}
        />
        <CustomAccordion
          large
          id="contact"
          header="3. Contact Client"
          body={<ContactSection project={project} hasConfirmed={hasConfirmed} />}
        />
        <CustomAccordion
          large
          id="next"
          header="What's next?"
          body={
            <div>
              <p>
                Once you have contacted each other and determined that your team is the right fit for the project, you
                can start coordinating the project timeline, review periods, and general project details. Please keep in
                mind that Build for Black Lives will not be facilitating the project relationship, and it will be your
                responsibility to decide on communications with the client.
              </p>
              <p>
                You can also bookmark this page if you want to revisit the project details later, but keep in mind that
                it will no longer be available if you or another volunteer officially agree to work on it. The client
                will let us know when to hide their project request from our website.
              </p>
              <p className="mb-0">
                In the meantime, feel free to browse through our <Link to="/resources">Anti-Racist Resources</Link> to
                learn more about building anti-racist technology.
              </p>
              <div className="bottom-button-container">
                <Link to="/projects">
                  <Button className="secondary-button btn">Back to Open Projects</Button>
                </Link>
              </div>
            </div>
          }
        />
      </section>
    </Container>
  );
};

export { ProjectWorkPage };
