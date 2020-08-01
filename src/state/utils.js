const mapTags = {
  "Mobile app" : "Mobile App",
  "Website (marketing site, interactive platform, informational site)" : "Website/Web App",
  "Brand development (logo, marketing guidelines)" : "Branding",
  "Design work (flyers, graphics, posters)" : "Design",
  "Social media content (campaigns, email templates, protest announcements)" : "Social Media",
  "Data (analysis, research, visualizations, storage)" : "Data"
}

export const translateAirtableRecord = (record) => {
  const recordTags = record.get('Project Type') || []
  console.log(recordTags)

  return {
    id: record.id,
    isUrgent: record.get('urgent?'),
    orgAbout: record.get('Org Description'),
    orgEmail: record.get('Email'),
    orgName: record.get('Organization Name'),
    projectTitle: record.get('Project Title'),
    projectAbout: record.get('Project desc'),
    projectDeadline: record.get('Due date'),
    tags: recordTags.map(tag => mapTags[tag])
  }
}