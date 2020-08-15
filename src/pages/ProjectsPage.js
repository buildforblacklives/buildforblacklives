import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Airtable from 'airtable'
import { Button, Row, Col, Card, Container, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProjectSelectFlow from '../assets/flow_diagrams/project_selection_flow';
import { ProjectsPageTemp } from './ProjectsPageTemp';
import { translateAirtableRecord } from '../state/utils'
import { createProjects } from '../state/projects';

import '../styling/ProjectsPage.css';

const { Body, Subtitle } = Card;

const ProjectCard = ({ project, isSelectedView, setSelected, selected }) => {
  const { id, projectTitle, orgName, isUrgent, projectAbout } = project;
  const getClass = () => {
    let className = 'preview-card';
    if (isSelectedView) {
      className += ' select-view-preview-card'

      if (selected === id) {
        className += ' is-select-preview-card'
      }
    }
    return className
  }

  return (
    <Card
      className={getClass()}
      onClick={() => setSelected(id)}>
      <Body>
        <div className="preview-card-contents">
          <h5> {projectTitle} </h5>
          <Subtitle className="mb-2 preview-subtitle">{orgName}</Subtitle>
          {isUrgent ?
            <span className="project-card-urgent">Urgent</span> :
            <span className="project-tag-space" />}
          <p className="project-card-description">{projectAbout}</p>
        </div>
        <div className="project-more-link">
          More details...
        </div>
      </Body>
    </Card>
  )
}

const SelectedCard = ({ project, setSelected }) => {
  const { id, orgName, orgAbout, projectTitle, projectAbout, projectDeadline, isUrgent } = project;

  return (
    <Card className="project-description-card">
      <Body>
        <div className="project-description-close float-right" onClick={() => setSelected(-1)} />

        <h4> {projectTitle}</h4>
        <Subtitle className="mb-2 project-description-subtitle">{orgName}</Subtitle>
        {isUrgent && <div className="project-card-urgent">Urgent </div>}

        {projectDeadline && (
          <>
            <h5 className="pt-3"> Project Timeline </h5>
            <p className="card-text">{projectDeadline}</p>
          </>)
        }

        <h5 className="pt-3"> About {orgName} </h5>
        <p>{orgAbout}</p>

        <h5 className="pt-3"> About the Project </h5>
        <p>{projectAbout}</p>

        <div className="text-center project-work-button">
          <LinkContainer to={`/projects/${id}`}>
            <Button className="primary-button"> Work on this project! </Button>
          </LinkContainer>
        </div>
      </Body>
    </Card>
  )
}


const ProjectsPage = () => {
  const dispatch = useDispatch()
  const savedProjects = useSelector(state => state)
  const [selected, setSelected] = useState(-1);
  const [projects, setProjects] = useState(savedProjects)
  const [hasLoaded, setHasLoaded] = useState(false)

  const findSelected = () => (
    projects.find((project) => project.id === selected)
  )

  useEffect(() => {
    const fetchProjects = async () => {
      const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');
      let airtableRecords = []
      
      base('Design projects').select({
        view: "Approved Projects"
      }).eachPage(async (records, fetchNextPage) => {
        airtableRecords = records.map(record => translateAirtableRecord(record))
        await dispatch(createProjects(airtableRecords))
        setProjects(airtableRecords)
        setHasLoaded(true)
        
        fetchNextPage();
      }, (err) => {
        if (err) { console.error(err); return; }
      })
    }

    if (savedProjects.length === 0) {
      fetchProjects()
    } else {
      setHasLoaded(true)
    }
  }, [dispatch, savedProjects, hasLoaded])


  if (hasLoaded && projects.length === 0) {
    return <ProjectsPageTemp />
  }

  return (
    <Container className="projects-page">
      {selected === -1 ? (
        <>
          <h1>Open Projects</h1>
          <ProjectSelectFlow className="flow-images" />
          {hasLoaded ? (
            <Row className="d-flex justify-content-left">
              {projects.map((project) => (
                <Col key={project.id} lg={4} md={6} sm={12}>
                  <ProjectCard project={project} isSelectedView={false} setSelected={setSelected} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="justify-content-center spinner">
              <Spinner animation="border" variant="warning" />
            </Row>
          )}
          <Row className="justify-content-center mt-5">
            <h4>Looking for more projects?</h4>
          </Row>
          <Row className="justify-content-center">
            <Button
              href="http://eepurl.com/g9JPtn"
              className="primary-button"
              size="lg"
              target="_blank"
              aria-disabled="false"
              rel="noopener noreferrer"
            >
              Join our newsletter
            </Button>
          </Row>
        </>
      )
      :
      (
        <>
          <div className="projects-back" onClick={() => setSelected(-1)}>
            {'< Back to Open Projects'}
          </div>
          <Row>
            <Col lg={4} className="project-list-panel">
              {projects.map((project) =>
                <ProjectCard
                  project={project}
                  isSelectedView={true}
                  setSelected={setSelected}
                  selected={selected}
                />)}
            </Col>

            <Col lg={8} md={12} className="">
              <SelectedCard project={findSelected()} setSelected={setSelected} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export { ProjectsPage };
