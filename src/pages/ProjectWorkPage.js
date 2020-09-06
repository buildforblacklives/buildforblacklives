import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Airtable from 'airtable';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Button } from 'react-bootstrap';

import CustomAccordion from '../components/CustomAccordion';
import ConfirmationCheck from '../components/ProjectWork/ConfirmationCheck';
import ContactSection from '../components/ProjectWork/ContactSection';
import ProjectDetails from '../components/ProjectWork/ProjectDetails';
import ProjectFlow from '../assets/flow_diagrams/project_steps_flow.js';
import { translateAirtableRecord } from '../state/utils';

import '../styling/ProjectWorkPage.css';

const ProjectWorkPage = ({ match }) => {
  const { projectId } = match.params;
  const savedProject = useSelector((state) => state.find((project) => project.id === projectId));
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [project, setProject] = useState(savedProject);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');

      base('Design projects').find(projectId, (err, record) => {
        if (err) {
          console.error(err);
          setHasLoaded(true);
          return;
        }
        if (record.get('Status') === 'Reviewed -Approved') {
          setProject(translateAirtableRecord(record));
        }
        setHasLoaded(true);
      });
    };

    if (!savedProject) {
      fetchProject();
    } else {
      setHasLoaded(true);
    }
  }, [savedProject, hasLoaded, projectId]);

  if (!hasLoaded) {
    return null;
  } else if (!project || Object.keys(project).length === 0) {
    return (
      <div className="row d-flex justify-content-center text-center">
        <div className="col-md-8 mt-5">
          <h1>Oops! Looks like this project doesn't exist or has already been matched</h1>
          <Button
            href="/projects"
            className="primary-button mt-5"
            size="lg"
            target="_blank"
            aria-disabled="false"
            rel="noopener noreferrer"
          >
            See Open Projects
          </Button>
        </div>
      </div>
    );
  }

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
                You can also bookmark this page if you want to revisit the project details later or share the link to
                others who you would like to work on the project with, but keep in mind that it will no longer be
                available if you or another volunteer officially agree to work on it. The client will let us know when
                to hide their project request from our website.
              </p>
              <p>
                In the meantine, feel free to browse through our Anti-Racist resources to learn more about building
                anti-racist technology.
              </p>
              <div className="bottom-button-container">
                <Link smooth to="/about#resources">
                  <Button className="primary-button">Take me to Anti-Racist Resources</Button>
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
