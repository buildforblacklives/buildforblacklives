import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Airtable from 'airtable';
import { Button, Row, Col, Card, Container, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NewsletterForm from '../components/NewsletterForm';
import { ProjectsPageTemp } from './ProjectsPageTemp';
import ProjectSelectFlow from '../assets/flow_diagrams/project_selection_flow';
import ProjectTags from '../components/ProjectTags'
import { translateAirtableRecord, formatUrlsInString } from '../state/utils'
import { createProjects } from '../state/projects';

import '../styling/ProjectsPage.css';

const { Body, Subtitle } = Card;

const ProjectCard = ({ project, isSelectedView, setSelected, selected }) => {
  const { id, projectTitle, orgName, isUrgent, tags } = project;
  const getClass = () => {
    let className = 'preview-card';
    if (isSelectedView) {
      className += ' select-view-preview-card';

      if (selected === id) {
        className += ' is-select-preview-card';
      }
    }
    return className;
  };

  return (
    <Card className={getClass()} onClick={() => setSelected(id)}>
      <Body>
        <div className="preview-card-contents">
          <h5> {projectTitle} </h5>
          <Subtitle className="mb-2 preview-subtitle">{orgName}</Subtitle>
          <div className="project-card-tags">
            <ProjectTags isUrgent={isUrgent} tags={tags} />
          </div>
        </div>
        <div className="project-more-link">More details...</div>
      </Body>
    </Card>
  );
};

const SelectedCard = ({ project, setSelected }) => {
  const { id, orgName, orgAbout, projectTitle, projectAbout, projectDeadline, isUrgent, tags, orgSocial } = project;

  return (
    <Card className="project-description-card">
      <Body>
        <div className="project-description-close float-right" onClick={() => setSelected(-1)} />

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
          <LinkContainer to={`/projects/${id}`}>
            <Button className="primary-button"> Work on this project! </Button>
          </LinkContainer>
        </div>
      </Body>
    </Card>
  );
};

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const savedProjects = useSelector((state) => state);
  const [selected, setSelected] = useState(-1);
  const [projects, setProjects] = useState(savedProjects);
  const [hasLoaded, setHasLoaded] = useState(false);

  const findSelected = () => projects.find((project) => project.id === selected);

  useEffect(() => {
    const fetchProjects = async () => {
      const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');
      let airtableRecords = [];

      base('Design projects')
        .select({
          view: 'Approved Projects'
        })
        .eachPage(
          async (records, fetchNextPage) => {
            airtableRecords = records.map((record) => translateAirtableRecord(record));
            await dispatch(createProjects(airtableRecords));
            setProjects(airtableRecords);
            setHasLoaded(true);

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

    if (savedProjects.length === 0) {
      fetchProjects();
    } else {
      setHasLoaded(true);
    }
  }, [dispatch, savedProjects, hasLoaded]);

  if (hasLoaded && projects.length === 0) {
    return <ProjectsPageTemp />;
  }

  return (
    <Container className="projects-page">
      {selected === -1 ? (
        <>
          <h1>Open Projects</h1>
          <ProjectSelectFlow className="flow-images" />
          <Row>
            <Col className="text-center">
              <LinkContainer to={`/closed-projects`}>
                <Button className="primary-button"> See our matched projects! </Button>
              </LinkContainer>
            </Col>
          </Row>

          {hasLoaded ? (
            <Row className="d-flex justify-content-left">
              {projects.map((project) => (
                <Col key={project.id} lg={4} md={6} sm={12}>
                  <ProjectCard project={project} isSelectedView={false} setSelected={setSelected} />
                </Col>
              ))}
            </Row>
          ) : (
            <Row className="justify-content-center spinner-row">
              <Spinner className="spinner" animation="border" variant="warning" />
            </Row>
          )}
          <Row className="full-width projects-newsletter-banner flex-column align-items-center">
            <h3 className="text-center mb-3">Looking for more?</h3>
            <h5 className="text-center mb-4">Join our newsletter to stay updated on new projects</h5>
            <NewsletterForm />
          </Row>
        </>
      ) : (
        <>
          <div className="projects-back" onClick={() => setSelected(-1)}>
            {'< Back to Open Projects'}
          </div>
          <Row>
            <Col lg={4} className="project-list-panel">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  isSelectedView={true}
                  setSelected={setSelected}
                  selected={selected}
                />
              ))}
            </Col>

            <Col lg={8} md={12} className="">
              <SelectedCard project={findSelected()} setSelected={setSelected} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export { ProjectsPage };
