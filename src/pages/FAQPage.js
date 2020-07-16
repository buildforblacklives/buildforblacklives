import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';

import CustomAccordion from '../components/CustomAccordion';
import { FAQItems } from '../data/faq';

import '../index.css';
import '../styling/FAQPage.css';

class FAQPage extends React.Component {
  constructor(props) {
    super(props);
    // set to clientFAQ initially
    this.state = {
      faqType: 'client',
      faqData: FAQItems.clientFAQ,
      isMobile: null
    };
  }

  componentDidMount() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize.bind(this));
  }

  updateScreenSize() {
    this.setState({ isMobile: window.innerWidth <= 992 });
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
      <Container id="faq-page" className="justify-content-md-center">
        <h1 className="mb-3">FAQs</h1>
        <Tabs xs="auto" onClick={this.handleClick}>
          <Tab eventKey="client" title={this.state.isMobile ? 'Request' : 'Request a Project'}></Tab>
          <Tab eventKey="volunteer" title={this.state.isMobile ? 'Work' : 'Work on a Project'}></Tab>
          <Tab eventKey="initiative" title={this.state.isMobile ? 'About' : 'About This Initiative'}></Tab>
        </Tabs>
        {!!this.state.faqData && (
          <section className="accordion-section-container">
            {this.state.faqData.map((qa, i) => {
              return <CustomAccordion key={i} header={qa.question} body={qa.answer} />;
            })}
          </section>
        )}
      </Container>
    );
  }
}

export { FAQPage };
