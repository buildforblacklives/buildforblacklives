import React, { useContext } from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

import Plus from '../assets/plus';
import Minus from '../assets/minus';
import '../styling/FAQPage.css';

class FAQSection extends React.Component {
  render() {
    function IconToggleAccordion({ children, eventKey, callback }) {
      const currentEventKey = useContext(AccordionContext);
      const toggleIconOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));
      const isCurrentEventKey = currentEventKey === eventKey;

      return (
          <Row className="faq-accordion-question " onClick={toggleIconOnClick}>
            <Col xs="auto"> {isCurrentEventKey ? <Minus small/> : <Plus small/>} </Col>
            <Col>{children}</Col>
          </Row>
      );
    }
    return (
      <section className="faq-section-container">
        {this.props.faq.map((qa, i) => {
          return (
            <Accordion key={i} className="mt-3 mb-3">
              <Card className="faq-accordion-container">
                <IconToggleAccordion as={Card.Header} eventKey="1">
                  {qa.question}
                </IconToggleAccordion>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="faq-accordion-answer">{qa.answer}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          );
        })}
      </section>
    );
  }
}

export { FAQSection };
