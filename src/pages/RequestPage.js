import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import RequestFlow from '../assets/flow_diagrams/request_flow.js';

import '../styling/RequestPage.css';

const RequestPage = () => (
  <Container className="request-page justify-content-md-center">
    <Row>
      <h1>Request a Project</h1>
    </Row>
    <p>project request blurb</p>
    <Row className="justify-content-center d-flex flex-wrap align-items-center">
      <RequestFlow className="flow-images" />
    </Row>
    <Row className="mt-3">
      <Col>
        <Card class="bg-light">
          <iframe
            title="Project Request Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeuLALxCe0vbDnEbPMp46-r9px-YVZLJP-pJZKhnxE_spfLMA/viewform?embedded=true"
            width="100%"
            height="800"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Card>
      </Col>
    </Row>
  </Container>
);

export { RequestPage };
