import React from 'react';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import '../styling/ProjectsPage.css';

const { Body, Title, Subtitle, Text, Link } = Card;
const { Fragment } = React;

let projects = [
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
    return (
      <Fragment>
        {this.state.selected === -1 && (
          <Container className="pg-container">
            <Row className="d-flex justify-content-center">
              <Row className="d-flex justify-content-left">
                {projects.map((project) => (
                  <Col lg={4}>
                    <Card className="broad card-btn" onClick={() => this.setState({ selected: project.id })}>
                      <Body>
                        <Title> {project.title} </Title>
                        <Subtitle className="mb-2 text-muted"> {project.company} </Subtitle>
                        <Button className="urgent-tag"> Urgent </Button>
                        <Text class="card-text">
                          Project description. We are looking for a group of people to help us put together a simple
                          website for people to email their state reps.
                        </Text>
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

        {this.state.selected !== -1 && (
          <Container className="pg-container center-div">
            <Row>
              <Col lg={4} className="overflow-auto scrolling project-col d-none d-lg-block">
                {projects.map((project) => (
                  <Card
                    className={`preview-card ${this.state.selected !== project.id ? 'card-btn' : 'selected-btn'}`}
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
                        {' '}
                        Close{' '}
                      </Button>
                    </div>

                    <Title> {projects[this.state.selected].title}</Title>
                    <Subtitle className="mb-2 text-muted">{projects[this.state.selected].company}</Subtitle>
                    <Button className="urgent-tag"> Urgent </Button>

                    <Text className="pt-3 font-weight-bold"> About {projects[this.state.selected].company} </Text>
                    <Text>
                      This is a more detailed example about what a card could say. It would have information here about
                      what the company does and how people can get involved.
                    </Text>

                    <Text className="pt-3 font-weight-bold"> About the Project </Text>
                    <Text>
                      This is a more detailed example about what a card could say. It would have information here about
                      what the company does and how people can get involved.
                    </Text>

                    <Text className="pt-3 font-weight-bold"> Project Timeline </Text>
                    <Text class="card-text">Estimated 2 weeks - Need ASAP </Text>

                    <div class="text-center">
                      <Button className="project-btn"> Work on this project! </Button>
                    </div>
                  </Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </Fragment>
    );
  }
}

export { ProjectsPage };
