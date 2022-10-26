import Airtable from 'airtable'

export const translateAirtableRecord = (record) => {
  const allTags = {}; // TODO map pulled from new table. add PM
    
  return {
    id: record.id,
    projectTitle: record.get('Project Title'),
    projectDesc: record.get('Project Description'),
    projectTypes: record.get('Project Types') || [], // FIXME may need to parse reference to get only one column from new table
    requestedTeamSize: record.get('Requested Team Size'),
    orgName: record.get('Organization Name'),
    addressedAs: record.get('Addressed As'),
    orgDesc: record.get('Organization Description'),
    orgEmail: record.get('Email'),
    pmWanted: record.get('PM Wanted') || false,
    pmName: record.get('PM Name'),
    pmEmail: record.get('PM Email'),
    numVolunteers: record.get('Number of Volunteers'),
    oldLink: record.get('Site/Social Link'),
    newLink: record.get('Updated Links'),
    highlights: record.get('Highlights'),
    screenshots: record.get('Screenshots') || []
  };
};

export const formatUrlsInString = (str) => {
  const urlRegex = /(\S+)(.com|.org|.edu|.net)\/?((\w|\d|\/)+)?/gi
  return str.replace(urlRegex, (url) =>
    `<a href="${url.startsWith('http') ? '' : 'https://'}${url}" target="__blank">${url}</a>`
  )
}

export const fetchOpenProjects = (doOnSuccess) => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');
  let airtableRecords = [];

  base('Projects')
    .select({
      view: 'Approved'
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
