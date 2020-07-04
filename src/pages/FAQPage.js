import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import { FAQSection } from '../components/FAQSection';
import { clientFAQ, volunteerFAQ, initiativeFAQ } from '../data/faq.json';
import '../index.css';

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
    return type === this.state.faqType ? 'faq-button-selected' : '';
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>FAQs</h1>
        <Row>
          <Col md={4} className="mt-2 mb-2">
            <Button
              value="client"
              className={'button faq-button ' + this.styleButton('client')}
              variant="warning"
              size="md"
              onClick={this.handleClick}
            >
              Requesting a Project
            </Button>
          </Col>
          <Col md={4} className="mt-2 mb-2">
            <Button
              value="volunteer"
              className={'button faq-button ' + this.styleButton('volunteer')}
              variant="warning"
              size="md"
              onClick={this.handleClick}
            >
              Working on a Project
            </Button>
          </Col>
          <Col md={4} className="mt-2 mb-2">
            <Button
              value="initiative"
              className={'button faq-button ' + this.styleButton('initiative')}
              variant="warning"
              size="md"
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
