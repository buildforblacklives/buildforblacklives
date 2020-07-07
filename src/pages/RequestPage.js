import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import projectFlow from '../assets/project_flow.png';
import projsubmission1 from '../assets/projsubmission1.png';
import projsubmission2 from '../assets/projsubmission2.png';
import projsubmission3 from '../assets/projsubmission3.png';
import arrowRight from '../assets/arrow_right.png';

const RequestPage = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col>
        <h1>Request a Project</h1>
        <Row className="justify-content-center d-flex flex-wrap align-items-center">
          <Image className="track-images" src={projectFlow} />
        </Row>
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
