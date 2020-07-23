import React from 'react';

const tagColors = ['#f5cb5c', '#6bb4d6', '#F9F5E3', '#fff0b3']

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
        {tags.map((tag, index) =>
          <span className="project-detail-type" key={tag} style={{color: tagColors[index % 4]}}>{tag}</span>
        )}
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
