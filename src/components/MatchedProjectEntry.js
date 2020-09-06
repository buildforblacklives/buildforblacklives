import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { ControlledCarousel } from './ControlledCarousel';

const MatchedProjectEntry = (props) => {
  const { images, companyName, description } = props;
  return (
    <Row className="matched-projects-row">
      <Col xs={12} md={4}>
        <>
          <h5 className="text-center">{companyName}</h5>
          <p className="text-center"> {description}</p>
        </>
      </Col>
      <Col xs={12} md={8}>
        <ControlledCarousel images={images} />
      </Col>
    </Row>
  );
};

export { MatchedProjectEntry };
