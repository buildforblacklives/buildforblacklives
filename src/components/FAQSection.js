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
        <Card className="faq-accordion-card faq-accordion-question" onClick={toggleIconOnClick}>
          <Row className="m-3">
            <Col xs="auto"> {isCurrentEventKey ? <Minus /> : <Plus />} </Col>
            <Col>{children}</Col>
          </Row>
        </Card>
      );
    }
    return (
      <section className="mt-1 mb-1">
        <h3 className="mt-4 mb-4">Questions: {this.props.title}</h3>
        {this.props.faq.map((qa, i) => {
          return (
            <Accordion key={i} className="mt-3 mb-3">
              <IconToggleAccordion as={Card.Header} eventKey="1">
                {qa.question}
              </IconToggleAccordion>
              <Card>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="faq-accordion-card faq-accordion-answer">{qa.answer}</Card.Body>
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
