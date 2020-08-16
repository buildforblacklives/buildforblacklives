import React, { useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';

import RequestFlow from '../assets/flow_diagrams/request_flow.js';
import LoadingSpinner from '../assets/loading-spinner';
import '../styling/RequestPage.css';

const RequestPage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <Container id="request-page" className="justify-content-md-center">
      <Row>
        <h1>Request a Project</h1>
      </Row>
      <Row className="justify-content-center d-flex flex-wrap align-items-center">
        <RequestFlow className="flow-images" />
      </Row>
      <Row className="mt-3">
        <Col>
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
          {!hasLoaded && <LoadingSpinner />}
          <Card className={`bg-light ${hasLoaded ? 'request-form-show' : 'request-form-hide'}`}>
            <iframe
              onLoad={() => setHasLoaded(true)}
              className="airtable-embed airtable-dynamic-height"
              title="Project Request Form"
              src="https://airtable.com/embed/shrTG9sJPU2y4h3uI?backgroundColor=gray"
              height="2289"
            ></iframe>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export { RequestPage };
