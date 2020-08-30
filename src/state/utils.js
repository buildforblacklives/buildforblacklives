import Airtable from 'airtable'

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

  return {
    id: record.id,
    isUrgent: record.get('urgent?'),
    orgAbout: record.get('Org Description'),
    orgEmail: record.get('Email'),
    orgName: record.get('Organization Name'),
    projectTitle: record.get('Project Title'),
    projectAbout: record.get('Project desc'),
    projectDeadline: record.get('Due date'),
    tags: recordTags.map(tag => mapTags[tag]),
    orgSocial: record.get('Org website/social media account')
  }
}

export const formatUrlsInString = (str) => {
  const urlRegex = /(\S+)(.com|.org|.edu|.net)\/?((\w|\d|\/)+)?/gi
  return str.replace(urlRegex, (url) =>
    `<a href="${url.startsWith('http') ? '' : 'https://'}${url}" target="__blank">${url}</a>`
  )
}

export const fetchOpenProjects = (doOnSuccess) => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');
  let airtableRecords = [];

  base('Design projects')
    .select({
      view: 'Approved Projects'
    })
    .eachPage(
      async (records, fetchNextPage) => {
        airtableRecords = records.map((record) => translateAirtableRecord(record));
        doOnSuccess(airtableRecords)
        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
