import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const styles = {
  Section: {
    margin: '1em 0'
  },
  Accordion: {
    margin: '1em 0'
  },
  Question: {
    color: 'black',
    cursor: 'pointer'
  },
  Answer: {
    color: 'grey',
    cursor: 'pointer'
  }
};

class FAQSection extends React.Component {
  render() {
    return (
      <section style={styles.Section}>
        <h3>Questions: {this.props.title}</h3>
        {this.props.faq.map((qa, i) => {
          return (
            <Accordion key={i} style={styles.Accordion}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" style={styles.Question}>
                  {`\u27A4 ${qa.question}`}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={styles.Answer}>{qa.answer}</Card.Body>
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
