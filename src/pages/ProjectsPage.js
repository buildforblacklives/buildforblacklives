import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col, Container, Spinner } from 'react-bootstrap';
import NewsletterForm from '../components/NewsletterForm';
import { ProjectsPageTemp } from './ProjectsPageTemp';
import ProjectCard from '../components/ProjectCard';
import ProjectSelectFlow from '../assets/flow_diagrams/project_selection_flow';
import { fetchOpenProjects } from '../state/utils';
import { createProjects } from '../state/projects';

import '../styling/ProjectsPage.css';

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const savedProjects = useSelector((state) => state.openProjects);
  const [projects, setProjects] = useState(savedProjects);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const doOnSuccess = async (airtableRecords) => {
      await dispatch(createProjects(airtableRecords));
      setProjects(airtableRecords);
      setHasLoaded(true);
    };

    if (savedProjects.length === 0 && !hasLoaded) {
      fetchOpenProjects(doOnSuccess);
    } else {
      setHasLoaded(true);
    }
  }, [dispatch, savedProjects, hasLoaded]);

  if (hasLoaded && projects.length === 0) {
    return <ProjectsPageTemp />;
  }

  return (
    <Container className="projects-page">
      <Row>
        <h1 className="projects-header">Open Projects</h1>
        <LinkContainer className="projects-matched-button projects-matched-order-2" to={`/matched-projects`}>
          <Button className="primary-button projects-matched-button">See our matched projects!</Button>
        </LinkContainer>
        <ProjectSelectFlow className="flow-images projects-matched-order-1" />
      </Row>
      {hasLoaded ? (
        <Row className="d-flex justify-content-left">
          {projects.map((project) => (
            <Col key={project.id} lg={4} md={6} sm={12}>
              <ProjectCard project={project} isSelectedView={false} />
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
    </Container>
  );
};

export { ProjectsPage };
