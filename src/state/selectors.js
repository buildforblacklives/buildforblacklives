import { useSelector } from 'react-redux';

const getProjectById = (id) => {
  const projects = useSelector(state => state) || []
  return projects.find((project) => project.id === id) || {}
}

export { getProjectById }