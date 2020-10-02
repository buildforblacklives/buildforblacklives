import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';

import CustomAccordion from '../components/CustomAccordion';
import useIsMobile from '../hooks/useIsMobile';
import { FAQItems } from '../data/faq';

import '../index.css';
import '../styling/FAQPage.css';

const FAQPage = () => {
  const [faqData, setFaqData] = useState(FAQItems.clientFAQ);
  const isMobile = useIsMobile();

  const handleTabClick = (e) => {
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
      
      setFaqData(selectedData);
    }
  };

  return (
    <Container id="faq-page" className="justify-content-md-center">
      <h1 className="mb-3">FAQs</h1>
      <Tabs xs="auto" onClick={handleTabClick}>
        <Tab eventKey="client" title={isMobile ? 'Request' : 'Request a Project'}></Tab>
        <Tab eventKey="volunteer" title={isMobile ? 'Work' : 'Work on a Project'}></Tab>
        <Tab eventKey="initiative" title={isMobile ? 'About' : 'About This Initiative'}></Tab>
      </Tabs>
      {!!faqData &&
        faqData.map(({ title, questions }, i) => (
          <section key={i} className="accordion-section-container">
            {title && <h3>{title}</h3>}
            {questions.map(({ question, answer }, i) => (
              <CustomAccordion key={i} header={question} body={answer} />
            ))}
          </section>
        ))}
    </Container>
  );
};

export { FAQPage };
