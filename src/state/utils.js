import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');

export const allTags = fetchTags();

export const mapTag = (type) => {
  return {
    tag: type.get('Name'),
    description: type.get('Description'),
    formatted: type.get('Formatted')
  };
};

export const translateAirtableRecord = (project) => {
  const projectTags = project.get('Project Type') || []

  function getScreenshotURLs(folder, files) {
    if (files == "") {
      return []
    }
    fileNames = files.split(",")
    urls = []
    const path = "https://raw.githubusercontent.com/buildforblacklives/buildforblacklives/assets/project_highlights/".concat(folder)
    fileNames.array.forEach(file => {
      urls.push(path.concat(file.trim()))
    });
    return urls;
  }
    
  return {
    id: project.id,
    projectTitle: project.get('Project Title'),
    projectDesc: project.get('Project Description'),
    projectTypes: projectTags.map((tag) => allTags[tag]), // FIXME may need to parse reference to get only one column from new table
    requestedTeamSize: project.get('Requested Team Size'),
    orgName: project.get('Organization Name'),
    addressedAs: project.get('Addressed As'),
    orgDesc: project.get('Organization Description'),
    orgEmail: project.get('Email'),
    pmWanted: project.get('PM Wanted') || false,
    pmName: project.get('PM Name'),
    pmEmail: project.get('PM Email'),
    numVolunteers: project.get('Number of Volunteers'),
    oldLink: project.get('Site/Social Link'),
    newLink: project.get('Highlight Links'),
    highlights: project.get('Highlights'),
    screenshots: getScreenshotURLs(project.get('Asset Folder'), project.get('Screenshots')) || []
  };
};

export const formatUrlsInString = (str) => {
  const urlRegex = /(\S+)(.com|.org|.edu|.net)\/?((\w|\d|\/)+)?/gi
  return str.replace(urlRegex, (url) =>
    `<a href="${url.startsWith('http') ? '' : 'https://'}${url}" target="__blank">${url}</a>`
  )
}

export const fetchTags = () => {
  let tags = [];
  tagMap = {}

  base('Tags')
    .select({
      view: 'All Tags'
    })
    .eachPage(
      async (records, fetchNextPage) => {
        tags = records.map((record) => mapTag(record));
        tags.forEach((tag) => tagMap.set(tag.formatted, tag);
        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  return tagMap;
}

export const fetchOpenProjects = (doOnSuccess) => {
  let airtableRecords = [];

  base('Projects')
    .select({
      view: 'Approved'
    })
    .eachPage(
      async (projects, fetchNextPage) => {
        airtableRecords = projects.map((project) => translateAirtableRecord(project));
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
