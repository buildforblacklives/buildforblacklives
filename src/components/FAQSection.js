import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import '../index.css';

class FAQSection extends React.Component {
  render() {
    return (
      <section className="mt-1 mb-1">
        <h3>Questions: {this.props.title}</h3>
        {this.props.faq.map((qa, i) => {
          return (
            <Accordion key={i} className="mt-3 mb-3">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" className="faq-accordion">
                  {`\u27A4 ${qa.question}`}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="faq-accordion">{qa.answer}</Card.Body>
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
