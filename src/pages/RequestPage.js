import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import RequestFlow from '../assets/flow_diagrams/request_flow.js';

import '../styling/RequestPage.css';

const RequestPage = () => (
  <Container id="request-page" className="justify-content-md-center">
    <Row>
      <h1>Request a Project</h1>
    </Row>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <RequestFlow className="flow-images" />
    </Row>
    <Row className="mt-3">
      <Col>
        <Card className="bg-light">
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
          <iframe
            className="airtable-embed airtable-dynamic-height"
            title="Project Request Form"
            src="https://airtable.com/embed/shrTG9sJPU2y4h3uI?backgroundColor=gray"
            width="100%"
            height="2289"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </Card>
      </Col>
    </Row>
  </Container>
);

export { RequestPage };
