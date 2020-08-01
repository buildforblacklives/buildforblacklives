import React from 'react'

const tagColors = {
  "Mobile App": "#f5cb5c",
  "Website/Web App": "#fff0b3",
  "Branding": "#F9F5E3",
  "Design": "#A24936",
  "Social Media": "#6098bf",
  "Data": "#FFFFFF"
}

const ProjectTags = ({ tags, isUrgent }) => (
  <>
    {isUrgent && <span className="project-tag project-tag-urgent">Urgent</span>}
    {tags.map(tag => (
      <span className="project-tag" style={{border: `2px solid ${tagColors[tag]}`, color: tagColors[tag]}}>{tag}</span>
    ))}
  </>
)

export default ProjectTags