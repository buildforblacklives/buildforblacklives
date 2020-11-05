// DEFAULT STATE
const initialState = {
  openProjects: [],
  matchedProjects: []
}

// ACTIONS
const UPDATE_PROJECTS = 'UPDATE_PROJECTS'
const UPDATE_MATCHED_PROJECTS = "UPDATE_MATCHED_PROJECTS"

export const createProjects = projects => ({
  type: UPDATE_PROJECTS, projects
})

export const createMatchedProjects = projects => ({
  type: UPDATE_MATCHED_PROJECTS, projects
})

// REDUCERS
const handleSetProjects = (state, action) => ({ ...state, openProjects: action.projects })
const handleSetMatchedProjects = (state, action) => ({ ...state, matchedProjects: action.projects })

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return handleSetProjects(state, action)
    case UPDATE_MATCHED_PROJECTS:
      return handleSetMatchedProjects(state, action)
    default:
      return state;
  }
}