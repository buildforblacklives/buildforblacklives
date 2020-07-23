// DEFAULT STATE
const initialState = []

// ACTIONS
const UPDATE_PROJECTS = 'UPDATE_PROJECTS'

export const createProjects = projects => ({
  type: UPDATE_PROJECTS, projects
})

// REDUCERS
const handleSetProjects = (state, action) => action.projects

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return handleSetProjects(state, action)
    default:
      return state;
  }
}