import React from 'react'

const ProjectTags = ({ tags, isUrgent }) => (
  <>
    {isUrgent && <span className="project-tag project-tag-urgent">Urgent</span>}
    <div>
      {tags.map(tag => (
        <span key={tag} className="project-tag">{tag}</span>
      ))}
    </div>
  </>
)

export default ProjectTags