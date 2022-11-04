import React from 'react'
import * as constants from '../data/constants'

const ProjectTags = ({ projectTypes, pmWanted, selectedStatus={} }) => (
  <>
    <div>
      {projectTypes.map(tag => (
        <span key={tag} className={`project-tag ${selectedStatus[tag] ? 'project-tag-selected' : ''}`}>{tag}</span>
      ))}
      {pmWanted &&
       <span
        className={`project-tag ${selectedStatus[constants.PM] ? 'project-tag-selected' : ''}`}>
          {constants.PM}
        </span>
      }
    </div>
  </>
)

export default ProjectTags