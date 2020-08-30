import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Card, Container, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProjectTags from '../components/ProjectTags'
import ProjectCard from '../components/ProjectCard'
import { formatUrlsInString, fetchOpenProjects } from '../state/utils'
import { createProjects } from '../state/projects';

const { Body, Subtitle } = Card;

const SelectedCard = ({ project }) => {
  const { id, orgName, orgAbout, projectTitle, projectAbout, projectDeadline, isUrgent, tags, orgSocial } = project;

  return (
    <Card className="project-description-card">
      <Body>
        <LinkContainer to="/projects">
          <div className="project-description-close float-right" />
        </LinkContainer>
        <h4> {projectTitle}</h4>
        <Subtitle className="mb-2 project-description-subtitle">{orgName}</Subtitle>
        <ProjectTags isUrgent={isUrgent} tags={tags} />

        {projectDeadline && (
          <>
            <h5 className="pt-3"> Project Timeline </h5>
            <p className="card-text">{projectDeadline}</p>
          </>
        )}

        <h5 className="pt-3"> About {orgName} </h5>
        {orgSocial && <p dangerouslySetInnerHTML={{ __html: formatUrlsInString(orgSocial) }} />}
        <p>{orgAbout}</p>

        <h5 className="pt-3"> About the Project </h5>
        <p>{projectAbout}</p>

        <p className="project-description-note">You are welcome to join this project even if you only have the skills for a portion of the requirements. Project work may be split between multiple volunteers, and project owners will close projects when they feel that there are enough volunteers committed.</p>

        <div className="text-center project-work-button">
          <LinkContainer to={`/projects/${id}/work`}>
            <button className="primary-button"> Work on this project! </button>
          </LinkContainer>
        </div>
      </Body>
    </Card>
  )
}

const ProjectSelectPage = ({ match }) => {
  const { projectId } = match.params
  const dispatch = useDispatch();
  const savedProjects = useSelector((state) => state);
  const [selectedProject, setSelectedProject] = useState(savedProjects.find(project => project.id === projectId))
  const [projects, setProjects] = useState(savedProjects);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const doOnSuccess = async (airtableRecords) => {
      await dispatch(createProjects(airtableRecords))
      setProjects(airtableRecords)
      setSelectedProject(projects.find(project => project.id === projectId))
      setHasLoaded(true)
    }

    if (savedProjects.length === 0 && !hasLoaded) {
      fetchOpenProjects(doOnSuccess)
    } else {
      setHasLoaded(true);
      setSelectedProject(projects.find(project => project.id === projectId))
    }
  }, [dispatch, savedProjects, hasLoaded, projectId, projects]);

  useEffect(() => {
    setSelectedProject(projects.find(project => project.id === match.params.projectId))
  }, [match, projects])
  
  if (!hasLoaded) {
    return (
      <Row className="justify-content-center spinner-row">
        <Spinner className="spinner" animation="border" variant="warning" />
      </Row>
    )
  }

  return (
    <Container className="projects-page">
      <LinkContainer className="projects-back" to="/projects">
        <div>{'< Back to Open Projects'}</div>
      </LinkContainer>
      <Row>
        <Col lg={4} className="project-list-panel">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isSelectedView={true}
              selected={projectId}
            />
          ))}
        </Col>

        <Col lg={8} md={12} className="">
          { hasLoaded && !selectedProject ?
            <h1>Oops! Looks like this project doesn't exist or has already been claimed</h1> :
            <SelectedCard project={selectedProject} />
          }
        </Col>
      </Row>
    </Container>
  )
}

export default ProjectSelectPage