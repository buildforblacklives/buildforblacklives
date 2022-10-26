import React from 'react'
import ProjectTags from '../ProjectTags'
import { formatUrlsInString } from '../../state/utils'

const ProjectDetails = ({ project }) => {
  const { projectTitle, projectDesc, orgName, orgDesc, projectTypes, oldLink } = project

  return (
    <div className="project-details-section">
      <div className="title-container">
        <h3>{projectTitle}</h3>
        <p>{orgName}</p>
      </div>
      <div className="info-container">
        <h5>Project Type</h5>
        <ProjectTags projectTypes={projectTypes} /> // TODO verify PM tag is visible on selected view
      </div>
      <div className="info-container">
        <h5>About {orgName}</h5>
        {oldLink && <p dangerouslySetInnerHTML={{ __html: formatUrlsInString(oldLink) }} />}
        <p>{orgDesc}</p>
      </div>
      <div className="info-container  mb-0">
        <h5>Project Description</h5>
        <p>{projectDesc}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
