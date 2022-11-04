import React from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ProjectTags from '../components/ProjectTags'

const { Body, Subtitle } = Card;

const ProjectCard = ({ project, isSelectedView, selected, tagSelectedStatus={} }) => {
  const { id, projectTitle, orgName, pmWanted, projectTypes } = project;
  const getClass = () => {
    let className = 'preview-card';
    if (isSelectedView) {
      className += ' select-view-preview-card';

      if (selected === id) {
        className += ' is-select-preview-card';
      }
    }
    return className;
  }

  return ( 
    <LinkContainer to={`/projects/${id}`}>
      <Card className={getClass()}>
        <Body>
          <div className="preview-card-contents">
            <h5> {projectTitle} </h5>
            <Subtitle className="mb-2 preview-subtitle">{orgName}</Subtitle>
            <div className="project-card-tags">
              <ProjectTags
                pmWanted={pmWanted}
                projectTypes={projectTypes}
                selectedStatus={tagSelectedStatus}
              />
            </div>
          </div>
          <div className="project-more-link">More details...</div>
        </Body>
      </Card>
    </LinkContainer>
  )
}

export default ProjectCard