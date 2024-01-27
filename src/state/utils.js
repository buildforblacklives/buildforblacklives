import Airtable from 'airtable'
import { AIRTABLE_BASE } from '../data/constants';

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_PERSONAL_ACCESS_TOKEN }).base(AIRTABLE_BASE);

export const fetchTags = () => {
  let tags = [];
  var tagMap = new Map();

  base('Tags')
    .select({
      view: 'All Tags'
    })
    .eachPage(
      async (records, fetchNextPage) => {
        tags = records.map((record) => mapTag(record));
        tags.forEach((tag) => tagMap.set(tag.formatted, tag));
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
};

export const allTags = fetchTags();

export const mapTag = (type) => {
  return {
    tag: type.get('Tag'),
    description: type.get('Description'),
    formatted: type.get('Formatted')
  };
};

export const translateAirtableRecord = (project) => {
  const projectTags = project.get('Project Types') || []

  function getScreenshotURLs(folder, files) {
    if (files === undefined || files === "") {
      return []
    }
    var fileNames = Array.from(files.split(","))
    var urls = []
    const path = "https://raw.githubusercontent.com/buildforblacklives/buildforblacklives/assets/project_highlights/".concat(folder).concat("/")
    fileNames.forEach((file) => {
      urls.push(path.concat(file.trim()))
    });
    return urls;
  }
    
  return {
    id: project.id,
    projectTitle: project.get('Project Title'),
    projectDesc: project.get('Project Description'),
    projectTypes: projectTags.map((item) => allTags.get(item).tag),
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
