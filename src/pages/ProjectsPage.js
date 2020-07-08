import React from 'react';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../styling/ProjectsPage.css';

const { Body, Title, Subtitle, Text, Link } = Card;

const projects = [
  { id: 0, title: 'Project Title 1', company: 'Organization Name 1' },
  { id: 1, title: 'Project Title 2', company: 'Organization Name 2' },
  { id: 2, title: 'Project Title 3', company: 'Organization Name 3' },
  { id: 3, title: 'Project Title 4', company: 'Organization Name 4' },
  { id: 4, title: 'Project Title 5', company: 'Organization Name 5' },
  { id: 5, title: 'Project Title 6', company: 'Organization Name 6' },
  { id: 6, title: 'Project Title 7', company: 'Organization Name 7' }
];

class ProjectsPage extends React.Component {
  state = {
    selected: -1
  };

  render() {
    const { selected } = this.state

    return (
      <>
        {selected === -1 && (
          <Container className="pg-container">
            <Row className="d-flex justify-content-center">
              <h1>Open Projects</h1>
              <Row className="d-flex justify-content-left">
                {projects.map((project) => (
                  <Col lg={4}>
                    <Card className="broad card-btn" onClick={() => this.setState({ selected: project.id })}>
                      <Body>
                        <h5> {project.title} </h5>
                        <Subtitle className="mb-2 text-muted"> {project.company} </Subtitle>
                        <Button className="urgent-tag"> Urgent </Button>
                        <p class="card-text">
                          Project description. We are looking for a group of people to help us put together a simple
                          website for people to email their state reps.
                        </p>
                        <Link href="#" className="float-right" onClick={() => this.setState({ selected: project.id })}>
                          More details...
                        </Link>
                      </Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Row>
          </Container>
        )}

        {selected !== -1 && (
          <Container className="pg-container center-div">
            <Row>
              <Col lg={4} className="overflow-auto scrolling project-col d-none d-lg-block">
                {projects.map((project) => (
                  <Card
                    className={`preview-card ${selected !== project.id ? 'card-btn' : 'selected-btn'}`}
                    onClick={() => this.setState({ selected: project.id })}
                  >
                    <Body>
                      <Title> {project.title} </Title>
                      <Subtitle className="mb-2 text-muted"> {project.company} </Subtitle>
                      <Button className="urgent-tag"> Urgent </Button>
                      <Text>
                        Project description. We are looking for a group of people to help us put together a simple
                        website for people to email their state reps.
                      </Text>
                      <Link href="#" className="float-right" onClick={() => this.setState({ selected: project.id })}>
                        More details...
                      </Link>
                    </Body>
                  </Card>
                ))}
              </Col>

              <Col lg={7} md={12} className="">
                <Card className="description-card">
                  <Body>
                    <div class="d-flex justify-content-lg-end justify-content-md-start">
                      <Button className="close-btn mb-4 mb-lg-0" onClick={() => this.setState({ selected: -1 })}>
                        Close
                      </Button>
                    </div>

                    <h4> {projects[selected].title}</h4>
                    <Subtitle className="mb-2 text-muted">{projects[selected].company}</Subtitle>
                    <Button className="urgent-tag"> Urgent </Button>

                    <h5 className="pt-3"> About {projects[selected].company} </h5>
                    <p>
                      This is a more detailed example about what a card could say. It would have information here about
                      what the company does and how people can get involved.
                    </p>

                    <h5 className="pt-3"> About the Project </h5>
                    <p>
                      This is a more detailed example about what a card could say. It would have information here about
                      what the company does and how people can get involved.
                    </p>

                    <h5 className="pt-3"> Project Timeline </h5>
                    <p class="card-text">Estimated 2 weeks - Need ASAP </p>

                    <div class="text-center">
                      <LinkContainer to={`/projects/${selected}`}>
                        <Button className="primary-button"> Work on this project! </Button>
                      </LinkContainer>
                    </div>
                  </Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export { ProjectsPage };
