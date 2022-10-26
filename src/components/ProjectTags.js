import React from 'react'

const ProjectTags = ({ tags, pmWanted, selectedStatus={} }) => (
  <>
    <div>
      {tags.map(tag => (
        <span key={tag} className={`project-tag ${selectedStatus[tag] ? 'project-tag-selected' : ''}`}>{tag}</span>
      ))}
      {pmWanted &&
       <span
        className={`project-tag ${selectedStatus['PM'] ? 'project-tag-selected' : ''}`}> // FIXME creaate constant "PM" from allTags
          PM // TODO use constant here as well
        </span>
      }
    </div>
  </>
)

export default ProjectTags