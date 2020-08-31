import React from 'react';
import { Container } from 'react-bootstrap';

import { ClosedProjectEntry } from '../components/ClosedProjectEntry';

import '../styling/ClosedProjects.css';

import plantainOne from '../assets/images/a1.png';
import plantainTwo from '../assets/images/a2.png';
import plantainThree from '../assets/images/a3.png';


const ClosedProjects = () => {
  
  const fetchedData = [
    {
      images: [
        <img src={plantainOne} />,
        <img src={plantainTwo} />,
        <img src={plantainThree} />
      ],
      companyName: 'Plantain Republic',
      description: 'We do stuff and tings.'
    }
  ];
  return (
    <Container className="projects-page">
      <h1 className="closed-projects-header">Matched Projects</h1>
      {fetchedData.map((data) => {
        const { images, companyName, description } = data;
        return <ClosedProjectEntry images={images} companyName={companyName} description={description} />;
      })}
    </Container>
  );
};

export { ClosedProjects };
