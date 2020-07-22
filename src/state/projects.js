// DEFAULT STATE
const initialState = []

// ACTIONS
const UPDATE_PROJECTS = 'UPDATE_PROJECTS'

export const setProjects = projects => ({
  type: UPDATE_PROJECTS, projects
})

// REDUCERS
const handleSetProjects = (state, action) => (
  state.concat(translateAirtableProjects(action.projects))
)

const translateAirtableProjects = (airtableProjects) => (
  airtableProjects.map((record) => ({
    id: record.id,
    isUrgent: record.get('urgent?'),
    orgAbout: record.get('Org Description'),
    orgEmail: record.get('Email'),
    orgName: record.get('Organization Name'),
    projectTitle: record.get('Project Title'),
    projectAbout: record.get('Project desc'),
    projectDeadline: record.get('Due date'),
    tags: record.get('Project Type')
  }))
)

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return handleSetProjects(state, action)
    default:
      return state;
  }
}