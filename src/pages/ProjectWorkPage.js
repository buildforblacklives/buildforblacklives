import React, { useState } from 'react';
import { CustomAccordion } from '../components/CustomAccordion';
import ConfirmationCheck from '../components/ProjectWork/ConfirmationCheck';
import ContactSection from '../components/ProjectWork/ContactSection';
import ProjectDetails from '../components/ProjectWork/ProjectDetails';
import ProjectFlow from '../assets/flow_diagrams/project_steps_flow.js';

import '../styling/ProjectWorkPage.css';

// const CollapsableSection = ({ title, id, isFirst, children }) => {
//   const [open, setOpen] = useState(isFirst);

//   return (
//     <div className="card collapsable-section">
//       <div className="card-header">
//         <h5 className="mb-0">
//           <div className="collapsable-header" onClick={() => setOpen(!open)} aria-controls={id} aria-expanded={open}>
//             {open ? <Minus /> : <Plus />}
//             <h1 className="collapsable-header-title">{title}</h1>
//           </div>
//         </h5>
//       </div>
//       <Collapse in={open} className="collapsable-content">
//         <div id={id} className="card-body">
//           {children}
//         </div>
//       </Collapse>
//     </div>
//   );
// };

/*
Assumes project object shape is:
{
  orgName: str,
  orgAbout: str,
  orgEmail: str,
  orgPhone: str,
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
  orgPhone: null,
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
    <div id="project-work-page" className="container justify-content-md-center">
        <h1>Ready to work on this project?</h1>
        <div className="justify-content-center d-flex flex-wrap align-items-center">
          <ProjectFlow className="flow-images project-work-flow" />
        </div>
      <section className="accordion-section-container">
        <CustomAccordion
          id="antiracism"
          header="1. Commit to Anti-Racism"
          body={<ConfirmationCheck hasConfirmed={hasConfirmed} setHasConfirmed={setHasConfirmed} />}
        />
        <CustomAccordion header="2. Review Project Details" id="details" body={<ProjectDetails project={project} />} />
        <CustomAccordion
          id="contact"
          header="3. Contact Client Organization"
          body={<ContactSection project={project} hasConfirmed={hasConfirmed} />}
        />
        <CustomAccordion
          id="next"
          header="What's next?"
          body={
            <p>
              Once you have contacted the project client, please wait some time for a response from them and to
              determine whether you are a good match for each other and to coordinate project details. Please keep in
              mind that HackBeanpot will not be facilitating the project relationship, and it will be your
              responsibility to decide on communications with the client.
            </p>
          }
        />
      </section>
    </div>
  );
};

export { ProjectWorkPage };
