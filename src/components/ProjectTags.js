import React from 'react'
import * as constants from '../data/constants'

const ProjectTags = ({ tags, pmWanted, selectedStatus={} }) => (
  <>
    <div>
      {tags.map(tag => (
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