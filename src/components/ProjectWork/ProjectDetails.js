import React from 'react'
import ProjectTags from '../ProjectTags'

const ProjectDetails = ({ project }) => {
  const { orgName, orgAbout, projectTitle, projectAbout, projectDeadline, tags } = project

  return (
    <div className="project-details-section">
      <div className="title-container">
        <h3>{projectTitle}</h3>
        <p>{orgName}</p>
      </div>
      <div className="info-container">
        <h5>Project Type</h5>
        <ProjectTags tags={tags} />
      </div>
      <div className="info-container">
        <h5>Project Deadline</h5>
        <p>{!!projectDeadline ? projectDeadline : 'Not Specified'}</p>
      </div>
      <div className="info-container">
        <h5>About {orgName}</h5>
        <p>{orgAbout}</p>
      </div>
      <div className="info-container  mb-0">
        <h5>Project Description</h5>
        <p>{projectAbout}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
