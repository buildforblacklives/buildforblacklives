import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import { ControlledCarousel } from './ControlledCarousel';

const ClosedProjectEntry = (props) => {
  const { images, companyName, description } = props;
  return (
    <Container className="text-center">
      <Row>
        <Col xs={4}>
          <ControlledCarousel images={images} />
        </Col>
        <Col xs={8}>
          <>
            <h5>{companyName}</h5>
            <p>{description}</p>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export { ClosedProjectEntry };
