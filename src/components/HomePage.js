import React from 'react';
import '../styling/HomePage.css';
import { Container, Row } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div class="logotype">Build for Black Lives</div>
        </Row>
        <Row>
          <div class="bio-blurb">
            We provide a platform to connect black-owned bbusinesses or organizations fighting racial injustice to
            developers and designers who would like to support the cause with their technical skills.
          </div>
        </Row>
      </Container>
    );
  }
}

export { HomePage };
