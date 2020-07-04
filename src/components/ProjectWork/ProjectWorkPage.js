import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import ConfirmationCheck from './ConfirmationCheck';
import Template from './workEmailTemplate';
import Plus from '../../assets/plus';
import Minus from '../../assets/minus';

const CollapsableSection = ({ title, id, isFirst, children }) => {
  const [open, setOpen] = useState(isFirst);

  return (
    <div class="card collapsable-section">
      <div class="card-header">
        <h5 class="mb-0">
          <div
            class="collapsable-header"
            onClick={() => setOpen(!open)}
            aria-controls={id}
            aria-expanded={open}
          >
          { open ? <Minus/> : <Plus/> }
          <span className="collapsable-header-title">{title}</span>
          </div>
        </h5>
      </div>
      <Collapse in={open} className="collapsable-content">
        <div id={id} class="card-body">
          {children}
        </div>
      </Collapse>
    </div>
  )
}

const ProjectDetails = ({project}) => {
  const { orgName, orgAbout, projectTitle, projectAbout, projectTime } = project;
  
  return (
    <div className="project-details-section">
      <h3>{projectTitle}</h3>
      <p className="project-org-name">{orgName}</p>
      
      <div className="project-detail-title">About {orgName}</div>
      <p className="project-detail-content">{orgAbout}</p>
      <div className="project-detail-title">About the project</div>
      <p className="project-detail-content">{projectAbout}</p>
      <div className="project-detail-title">Project timeline</div>
      <p className="project-detail-content">{projectTime}</p>
    </div>
  )
}

const ContactSection = ({ project, hasConfirmed }) => {
  const emailContent = Template(project);
  const { orgPhone, orgEmail } = project;
  
  const copyEmail = () => {
    var textArea = document.createElement("textarea");
    textArea.value = emailContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  return (
    <div>
      <h3>Contact information</h3>
      {!hasConfirmed && <p>Please agree to the anti-racism commitment in step 1 to view contact information</p>}
      {orgEmail && hasConfirmed && <p>Email: {orgEmail}</p>}
      {orgPhone && hasConfirmed && <p> Phone number: {orgPhone}</p>}
      <h3>Email template</h3>
      <div className="confirmation-btn-container">
        <button
          class="btn btn-light copy-button"
          onClick={copyEmail}>
          Copy template
        </button>
      </div>
      <div className="project-detail-email">{emailContent}</div>
    </div>
  )
}

/*
Assumes project object shape is:
{
  orgName: str,
  orgAbout: str,
  orgEmail: str,
  orgPhone: str,
  projectTitle: str,
  projectAbout: str,
  projectTime: str, (??)
}
*/

// example project, delete this later
const example = {
  orgName: "HackBeanpot",
  orgAbout: "this is what our org does. Which likely has a lot of words, resulting in multiple lines on the screen. We love beans in our org. bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean",
  orgEmail: "team@hbp.com",
  orgPhone: null,
  projectTitle: "Sample Website Project",
  projectAbout: "This is what the project is about. Which is about beans. bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean",
  projectTime: "Estimated 2 weeks"
}

const ProjectWorkPage = ({ match }) => {
  const { projectId } = match.params;
  const [hasConfirmed, setHasConfirmed] = useState(false);

  // TODO add useeffect to fetch project details based on project id
  const project = example;

  return (
    <div className="project-work-page">
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <div className="project-work-flow">
              <h1>Ready to work on this project?</h1>
              <p>workflow images</p>
            </div>

              <CollapsableSection
                title="1. Commit to Anti-Racism"
                id="antiracism"
                isFirst={true}
                children={
                  <ConfirmationCheck
                    hasConfirmed={hasConfirmed}
                    setHasConfirmed={setHasConfirmed}
                  />
                }
              />
              <CollapsableSection
                title="2. Review Project Details"
                id="details"
                children={
                  <ProjectDetails project={project} />
                }
              />
              <CollapsableSection
                title="3. Contact Client Organization"
                id="contact"
                children={
                  <ContactSection project={project} hasConfirmed={hasConfirmed} />
                }
              />
              <CollapsableSection
                title="What's next?"
                id="next"
                children={
                  <p>
                    Once you have contacted the project client, please wait some time for a response from them and to determine whether you are a good match for each other and to coordinate project details. Please keep in mind that HackBeanpot will not be facilitating the project relationship, and it will be your responsibility to decide on communications with the client.
                  </p>
                }
              />
            
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export { ProjectWorkPage };
