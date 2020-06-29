import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import { FAQSection } from '../components/FAQSection';
import { clientFAQ, volunteerFAQ, initiativeFAQ } from '../data/faq.json';

const styles = {
  ButtonCol: {
    margin: '0.5em 0'
  },
  Button: {
    cursor: 'pointer',
    minWidth: '100%',
    minHeight: '100%'
  }
};

class FAQPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: null,
      title: ''
    };
  }

  handleClick = (e) => {
    const { value, innerHTML } = e.target;

    let selectedFAQ;

    switch (value) {
      case 'client':
        selectedFAQ = clientFAQ;
        break;
      case 'volunteer':
        selectedFAQ = volunteerFAQ;
        break;
      case 'initiative':
        selectedFAQ = initiativeFAQ;
        break;
      default:
        selectedFAQ = null;
    }

    this.setState({ faq: selectedFAQ, title: innerHTML });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>Frequently Asked Questions</h1>
        <Row>
          <Col md={4} style={styles.ButtonCol}>
            <Button
              value="client"
              className="button"
              variant="warning"
              size="md"
              style={styles.Button}
              onClick={this.handleClick}
            >
              Requesting a Project
            </Button>
          </Col>
          <Col md={4} style={styles.ButtonCol}>
            <Button
              value="volunteer"
              className="button"
              variant="warning"
              size="md"
              style={styles.Button}
              onClick={this.handleClick}
            >
              Working on a Project
            </Button>
          </Col>
          <Col md={4} style={styles.ButtonCol}>
            <Button
              value="initiative"
              className="button"
              variant="warning"
              size="md"
              style={styles.Button}
              onClick={this.handleClick}
            >
              This Initiative
            </Button>
          </Col>
        </Row>
        {!!this.state.faq && <FAQSection title={this.state.title} faq={this.state.faq} />}
      </div>
    );
  }
}

export { FAQPage };
