import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProjectSelectFlow from '../assets/flow_diagrams/project_selection_flow';

import '../styling/ProjectsPage.css';

const { Body, Subtitle } = Card;

// example projects, delete this later
const example = (num) => ({
  id: num,
  isUrgent: num %2 === 0,
  orgName: 'HackBeanpot ' + num,
  orgAbout:
    'this is what our org does. Which likely has a lot of words, resulting in multiple lines on the screen. We love beans in our org. bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean',
  orgEmail: 'team@hbp.com',
  orgPhone: null,
  projectTitle: 'Sample Website Project ' + num,
  projectAbout:
    'This is what the project is about. Which is about beans. bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean bean',
  projectTime: 'Estimated 2 weeks'
})

const sampleProjects = [example(1), example(2), example(3), example(4), example(5), example(6), example(7)];

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
        <h5> {projectTitle} </h5>
        <Subtitle className="mb-2 preview-subtitle">{orgName}</Subtitle>
        {isUrgent ?
          <span className="project-card-urgent">Urgent</span> :
          <span className="project-tag-space" />}
        <p className="project-card-description">{projectAbout}</p>
        <div className="project-more-link float-right">
          More details...
        </div>
      </Body>
    </Card>
  )
}

const SelectedCard = ({ project, setSelected }) => {
  const { id, orgName, orgAbout, projectTitle, projectAbout, projectTime, isUrgent } = project;

  return (
    <Card className="project-description-card">
      <Body>
        <div className="project-description-close float-right" onClick={() => setSelected(-1)} />

        <h4> {projectTitle}</h4>
        <Subtitle className="mb-2 project-description-subtitle">{orgName}</Subtitle>
        {isUrgent && <div className="project-card-urgent">Urgent </div>}

        <h5 className="pt-3"> About {orgName} </h5>
        <p>{orgAbout}</p>

        <h5 className="pt-3"> About the Project </h5>
        <p>{projectAbout}</p>

        <h5 className="pt-3"> Project Timeline </h5>
        <p className="card-text">{projectTime}</p>

        <div className="text-center">
          <LinkContainer to={`/projects/${id}`}>
            <Button className="primary-button"> Work on this project! </Button>
          </LinkContainer>
        </div>
      </Body>
    </Card>
  )
}


const ProjectsPage = () => {
  const [selected, setSelected] = useState(-1);
  const [projects, setProjects] = useState([]);
  // TODO: get projects from airtable
  useEffect(() => {
    setProjects(sampleProjects)
  }, [])

  const findSelected = () => (
    projects.find((project) => project.id === selected)
  )

  return (
    <Container className="projects-page">
      {selected === -1 ? (
        <>
          <h1>Open Projects</h1>
          <ProjectSelectFlow className="flow-images" />
          <Row className="d-flex justify-content-left">
            {projects.map((project) => (
              <Col key={project.id} lg={4} md={6} sm={12}>                
                <ProjectCard project={project} isSelectedView={false} setSelected={setSelected} />
              </Col>
            ))}
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
            <Col lg={4} className="project-list-panel d-none d-lg-block">
              {projects.map((project) =>
                <ProjectCard
                  project={project}
                  isSelectedView={true}
                  setSelected={setSelected}
                  selected={selected}
                />)}
            </Col>

            <Col lg={{ span: 7, offset: 1 }} md={12} className="">
              <SelectedCard project={findSelected()} setSelected={setSelected} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export { ProjectsPage };
