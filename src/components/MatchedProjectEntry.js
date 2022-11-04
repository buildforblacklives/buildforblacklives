import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ControlledCarousel } from './ControlledCarousel';

const MatchedProjectEntry = (props) => {
  const { images, orgName, description, link } = props;
  return (
    <Row className="matched-projects-row">
      <Col xs={12} md={4}>
        <>
          <h5 className="text-center">{orgName}</h5>
          <p className="text-justify"> {description}</p>
          <a className="matched-projects-learn-more" href={link}>
            Learn More {'>'}
          </a>
        </>
      </Col>
      <Col xs={12} md={8}>
        <ControlledCarousel images={images} />
      </Col>
    </Row>
  );
};

export { MatchedProjectEntry };
