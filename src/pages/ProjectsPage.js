import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col, Container, Spinner } from 'react-bootstrap';
import { ProjectsPageTemp } from './ProjectsPageTemp';
import ProjectCard from '../components/ProjectCard';
import ProjectSelectFlow from '../assets/flow_diagrams/project_selection_flow';
import { fetchOpenProjects, allTags } from '../state/utils'
import { createProjects } from '../state/projects';
import * as constants from '../data/constants';

import '../styling/ProjectsPage.css';

const FilterBar = ({updateFilters, clearFilters, filters}) => (
  <div className="projects-filter-bar">
    <div>
      <span>Filter: </span>
      {Array.from(allTags.values()).map(item => (
        <span key={item.tag} className={`project-filter-tag ${filters[item.tag] ? 'project-filter-tag-selected' : ''} project-tag`} onClick={() => updateFilters(item.tag)}>{item.tag}</span>
      ))}
    </div>
    <span className="project-filter-clear" onClick={clearFilters}>Clear all</span>
  </div>
)

const ProjectsPage = () => {
  const dispatch = useDispatch();

  const getDefaultFilters = () => {
    const defaultFilters = {}
    Array.from(allTags.values()).forEach((item) => defaultFilters[item.tag] = false)
    return defaultFilters
  }

  const savedProjects = useSelector((state) => state.openProjects);
  const [projects, setProjects] = useState(savedProjects);
  const [hasLoaded, setHasLoaded] = useState(false);
  const defaultFilters = getDefaultFilters()
  const [filters, setFilters] = useState(defaultFilters);

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
  }, [dispatch, savedProjects, hasLoaded])

  const updateFilters = (tag) => {
    setFilters({ ...filters, [tag]: !filters[tag]})
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  const shouldShowProject = (pmWanted, projectTypes) => {
    if (Object.values(filters).every((val) => !val)) {
      return true
    } else if (pmWanted && filters[constants.PM]) {
      return true
    }
    return projectTypes.some((tag) => filters[tag])
  }

  if (hasLoaded && projects.length === 0) {
    return <ProjectsPageTemp />;
  }

  return (
    <Container className="projects-page">
      <Row>
        <h1 className="projects-header">Open Projects</h1>
        <LinkContainer className="projects-matched-button projects-matched-order-2" to={constants.URL_MATCHED_PROJECTS}>
          <Button className="primary-button projects-matched-button">See our matched projects!</Button>
        </LinkContainer>
        <ProjectSelectFlow className="flow-images projects-matched-order-1" />
      </Row>
      {hasLoaded ? (
        <>
          <FilterBar updateFilters={updateFilters} clearFilters={clearFilters} filters={filters} />
          <Row className="d-flex justify-content-left">
            {projects.map((project) => (
              shouldShowProject(project.pmWanted, project.projectTypes) &&
              (
                <Col key={project.id} lg={4} md={6} sm={12}>
                  <ProjectCard project={project} isSelectedView={false} tagSelectedStatus={filters} />
                </Col>
              )
            ))}
          </Row>
        </>
      ) : (
        <Row className="justify-content-center spinner-row">
          <Spinner className="spinner" animation="border" variant="warning" />
        </Row>
      )}
      <Row className="full-width projects-newsletter-banner flex-column align-items-center">
        <h3 className="text-center mb-3">Looking for more?</h3>
        <h5 className="text-center mb-4">Join our Facebook group to stay updated on new projects</h5>
        <Button className="primary-button" aria-disabled="false" size="sm">
          <a
            className="projects-join-fb-group-button"
            href={constants.FACEBOOK_GROUP}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </Button>
      </Row>
    </Container>
  );
};

export { ProjectsPage };
