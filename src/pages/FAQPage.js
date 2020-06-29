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
  },
  ButtonSelected: {
    backgroundColor: '#ffc107',
    cursor: 'pointer',
    minWidth: '100%',
    minHeight: '100%'
  }
};

class FAQPage extends React.Component {
  constructor(props) {
    super(props);
    // set to clientFAQ initially
    this.state = {
      faqType: 'client',
      faqData: clientFAQ,
      title: 'Requesting a Project'
    };
  }

  handleClick = (e) => {
    const { value, innerHTML } = e.target;

    let selectedData,
      selectedType = value;

    switch (selectedType) {
      case 'client':
        selectedData = clientFAQ;
        break;
      case 'volunteer':
        selectedData = volunteerFAQ;
        break;
      case 'initiative':
        selectedData = initiativeFAQ;
        break;
      default:
        selectedData = clientFAQ;
    }

    this.setState({ faqType: selectedType, faqData: selectedData, title: innerHTML });
  };

  styleButton = (type) => {
    return type === this.state.faqType ? styles.ButtonSelected : styles.Button;
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>FAQs</h1>
        <Row>
          <Col md={4} style={styles.ButtonCol}>
            <Button
              value="client"
              className="button"
              variant="warning"
              size="md"
              style={this.styleButton('client')}
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
              style={this.styleButton('volunteer')}
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
              style={this.styleButton('initiative')}
              onClick={this.handleClick}
            >
              This Initiative
            </Button>
          </Col>
        </Row>
        {!!this.state.faqData && <FAQSection title={this.state.title} faq={this.state.faqData} />}
      </div>
    );
  }
}

export { FAQPage };
