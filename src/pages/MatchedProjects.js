import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Airtable from 'airtable';
import { AIRTABLE_BASE } from '../data/constants';
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
      const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_PERSONAL_ACCESS_TOKEN }).base(AIRTABLE_BASE);
      let airtableRecords = [];

      base('Projects')
        .select({
          view: 'Matched'
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
      <p className="matched-projects-body">
        This page features some of our matched projects. They have been successfully paired with volunteers through our
        site and have either wrapped up or are currently in progress. Check them out below to see the amazing work our
        volunteers have done!
      </p>
      {projects.map((data) => {
        const { screenshots, orgName, highlights, newLink } = data;
        return (
          <MatchedProjectEntry
            images={screenshots}
            orgName={orgName}
            description={highlights}
            link={newLink}
          />
        );
      })}
    </Container>
  );
};

export { MatchedProjects };
