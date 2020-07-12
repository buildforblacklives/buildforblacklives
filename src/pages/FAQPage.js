import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { FAQSection } from '../components/FAQSection';
import { FAQItems } from '../data/faq';

import '../styling/FAQPage.css';

class FAQPage extends React.Component {
  constructor(props) {
    super(props);
    // set to clientFAQ initially
    this.state = {
      faqType: 'client',
      faqData: FAQItems.clientFAQ
    };
  }

  handleClick = (e) => {
    // Prevent state change on container click
    if (e.target.tagName !== 'NAV') {
      const {
        dataset: { rbEventKey: type }
      } = e.target;

      let selectedData,
        selectedType = type;

      switch (selectedType) {
        case 'client':
          selectedData = FAQItems.clientFAQ;
          break;
        case 'volunteer':
          selectedData = FAQItems.volunteerFAQ;
          break;
        case 'initiative':
          selectedData = FAQItems.initiativeFAQ;
          break;
        default:
          selectedData = FAQItems.clientFAQ;
      }

      this.setState({ faqType: selectedType, faqData: selectedData });
    }
  };

  render() {
    return (
      <div className="container mt-5 mb-5 faq">
        <h1 className="mb-3">FAQs</h1>
        <Tabs xs="auto" onClick={this.handleClick}>
          <Tab eventKey="client" title="Requesting a Project"></Tab>
          <Tab eventKey="volunteer" title="Working on a Project"></Tab>
          <Tab eventKey="initiative" title="This Initiative"></Tab>
        </Tabs>
        {!!this.state.faqData && <FAQSection faq={this.state.faqData} />}
      </div>
    );
  }
}

export { FAQPage };
