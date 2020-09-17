import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Airtable from 'airtable';
import { translateAirtableRecord } from '../state/utils';
import { createMatchedProjects } from '../state/projects';

import { MatchedProjectEntry } from '../components/MatchedProjectEntry';

import '../styling/MatchedProjects.css';

const MatchedProjects = () => {
  const dispatch = useDispatch();
  const savedProjects = useSelector((state) => state.matchedProjects);
  const [projects, setProjects] = useState(savedProjects);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base('appBzqG0sB4hqtE0I');
      let airtableRecords = [];

      base('Design projects')
        .select({
          view: 'Matched Projects'
        })
        .eachPage(
          async (records, fetchNextPage) => {
            airtableRecords = records.map((record) => translateAirtableRecord(record));
            await dispatch(createMatchedProjects(airtableRecords));
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

  return (
    <Container className="projects-page">
      <LinkContainer className="projects-matched-button projects-matched-order-2" to={`/projects`}>
        <NavLink className="matched-projects-back">{`< Back to projects`}</NavLink>
      </LinkContainer>
      <h1 className="matched-projects-header">Matched Projects</h1>
      {projects.map((data) => {
        console.log(data);
        const { screenshots, orgName, projectUpdates, link } = data;
        return (
          <MatchedProjectEntry images={screenshots} companyName={orgName} description={projectUpdates} link={link} />
        );
      })}
    </Container>
  );
};

export { MatchedProjects };
