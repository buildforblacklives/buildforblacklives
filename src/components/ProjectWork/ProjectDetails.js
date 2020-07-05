import React from 'react';

const ProjectDetails = ({ project }) => {
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
  );
};

export default ProjectDetails;
