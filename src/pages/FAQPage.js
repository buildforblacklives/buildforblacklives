import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { FAQSection } from '../components/FAQSection';
import { clientFAQ, volunteerFAQ, initiativeFAQ } from '../data/faq.json';
import '../styling/FAQPage.css';

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
    // Prevent state change on container click
    if (e.target.tagName !== 'NAV') {
      const {
        dataset: { rbEventKey: type },
        innerHTML
      } = e.target;

      let selectedData,
        selectedType = type;

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
    }
  };

  styleTab = (type) => {
    return type === this.state.faqType ? 'faq-tab-selected' : '';
  };

  render() {
    return (
      <div className="container mt-5 mb-5 faq">
        <h1 className="mb-3">FAQs</h1>
        <Tabs xs="auto" onClick={this.handleClick}>
          <Tab eventKey="client" title="Requesting a Project" className={this.styleTab('client')}></Tab>
          <Tab eventKey="volunteer" title="Working on a Project" className={this.styleTab('volunteer')}></Tab>
          <Tab eventKey="initiative" title="This Initiative" className={this.styleTab('initiative')}></Tab>
        </Tabs>
        {!!this.state.faqData && <FAQSection title={this.state.title} faq={this.state.faqData} />}
      </div>
    );
  }
}

export { FAQPage };
