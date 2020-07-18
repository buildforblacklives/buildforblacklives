import React from 'react';

const ProjectDetails = ({ project }) => {
  const { orgName, orgAbout, projectTitle, projectAbout, projectDeadline } = project;

  return (
    <div className="project-details-section">
      <h4>{projectTitle}</h4>
      <p className="project-org-name">{orgName}</p>

      <h5 className="project-detail-title">About {orgName}</h5>
      <p className="project-detail-content">{orgAbout}</p>
      <h5 className="project-detail-title">About the project</h5>
      <p className="project-detail-content">{projectAbout}</p>
      <h5 className="project-detail-title">Project timeline</h5>
      <p className="project-detail-content">{projectDeadline}</p>
    </div>
  );
};

export default ProjectDetails;
