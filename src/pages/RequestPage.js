import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import RequestFlow from '../assets/flow_diagrams/request_flow.js';

import '../styling/RequestPage.css';

const RequestPage = () => (
  <Container className="request-page justify-content-md-center">
    <Row>
      <h1>Request a Project</h1>
    </Row>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <RequestFlow className="flow-images" />
    </Row>
    <Row className="mt-3">
      <Col>
        <Card class="bg-light">
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe class="airtable-embed airtable-dynamic-height"
          title="Project Request Form"
          src="https://airtable.com/embed/shrTG9sJPU2y4h3uI?backgroundColor=gray"
          width="100%"
          height="2289"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          onmousewheel="">
          Loading…
        </iframe>
        </Card>
      </Col>
    </Row>
  </Container>
);

export { RequestPage };
