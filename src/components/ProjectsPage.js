import React from "react";
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import "../styling/projects-page-styling.css";

let companies = [{id: 0, title: "Project Title 1", name: "Organization Name 1"},
                 {id: 1, title: "Project Title 2", name: "Organization Name 2"},
                 {id: 2, title: "Project Title 3", name: "Organization Name 3"},
                 {id: 3, title: "Project Title 4", name: "Organization Name 4"},
                 {id: 4, title: "Project Title 5", name: "Organization Name 5"},
                 {id: 5, title: "Project Title 6", name: "Organization Name 6"},
                 {id: 6, title: "Project Title 7", name: "Organization Name 7"}]


class ProjectsPage extends React.Component {

    state = {
        selected: -1
    }

    render() {
        return (

            <React.Fragment>
                { this.state.selected === -1 &&
                <Container className="pg-container">
                    <Row className="d-flex justify-content-center">
                        <Row className="d-flex justify-content-left">
                        {companies.map(company =>
                            <Col lg={4}>
                                <Card className="broad card-btn" onClick={() => this.setState({selected: company.id})}>
                                    <Card.Body>
                                        <Card.Title> {company.title} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> {company.name} </Card.Subtitle>
                                        <Button className="urgent-tag"> Urgent </Button>
                                        <Card.Text class="card-text">Project description. We are looking for a group of
                                                                     people to help us put together a simple website for
                                                                     people to email their state reps.
                                        </Card.Text>
                                        <Button type="link" className="more-details-link float-right" aria-pressed="false"
                                                onClick={() => this.setState({selected: company.id})}>More details...</Button>
                                     </Card.Body>
                                </Card>
                            </Col>
                             )}
                            </Row>
                        </Row>
                    </Container>
                }





                { this.state.selected !== -1 &&
                <Container className="pg-container center-div">
                    <Row>
                        <Col lg={4} className="overflow-auto scrolling project-col d-none d-lg-block">
                            {companies.map(company =>
                                <Card className = {`preview-card ${(this.state.selected !== company.id) ? "card-btn" : "selected-btn"}`}
                                      onClick={() => this.setState({selected: company.id})}>
                                    <Card.Body>
                                        <Card.Title> {company.title} </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> {company.name} </Card.Subtitle>
                                        <Button className="urgent-tag"> Urgent </Button>
                                        <Card.Text>Project description. We are looking for a group of
                                                    people to help us put together a simple website for
                                                    people to email their state reps.
                                        </Card.Text>
                                        <Button type="link" className="more-details-link float-right" aria-pressed="false"
                                             onClick={() => this.setState({selected: company.id})}>More details...</Button>
                                    </Card.Body>
                                </Card>

                            )}
                        </Col>

                        <Col lg={7} md={12} className="">

                                <Card className="description-card">
                                <Card.Body>
                                <div class="d-flex justify-content-lg-end justify-content-md-start">
                                    <Button className="close-btn my-3" onClick={() => this.setState({selected: -1})}> Close </Button>
                                </div>

                                <Card.Title> {companies[this.state.selected].title }</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{companies[this.state.selected].name }</Card.Subtitle>
                                <Button className="urgent-tag"> Urgent </Button>

                                <Card.Text className="pt-3 font-weight-bold"> About {companies[this.state.selected].name} </Card.Text>
                                <Card.Text>This is a more detailed example about what a card could say.
                                           It would have information here about what the company does
                                           and how people can get involved.
                                </Card.Text>

                                <Card.Text className="pt-3 font-weight-bold"> About the Project </Card.Text>
                                <Card.Text>This is a more detailed example about what a card could say.
                                           It would have information here about what the company does
                                           and how people can get involved.
                                </Card.Text>

                                <Card.Text className="pt-3 font-weight-bold"> Project Timeline</Card.Text>
                                <Card.Text  class="card-text">Estimated 2 weeks - Need ASAP
                                </Card.Text >

                                 <div class="text-center">
                                    <Button className="project-btn"> Work on this project! </Button>
                                 </div>

                                 </Card.Body>


                            </Card>
                        </Col>
                    </Row>
                </Container>
                }
            </React.Fragment>

        )}

}

export { ProjectsPage };