import React, { useContext } from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

import Plus from '../assets/plus';
import Minus from '../assets/minus';
import '../index.css';

class CustomAccordion extends React.Component {
  render() {
    function IconToggleAccordion({ largeHeader, children, eventKey, callback }) {
      const currentEventKey = useContext(AccordionContext);
      const toggleIconOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));
      const isCurrentEventKey = currentEventKey === eventKey;
      const minusIcon = largeHeader ? <Minus large /> : <Minus />;
      const plusIcon = largeHeader ? <Plus large /> : <Plus />;

      return (
        <Row className={`accordion-header ${largeHeader ? 'accordion-header-large' : ''}`} onClick={toggleIconOnClick}>
          <Col xs="auto"> {isCurrentEventKey ? minusIcon : plusIcon} </Col>
          <Col>{children}</Col>
        </Row>
      );
    }
    return (
      <Accordion className="mt-3 mb-3">
        <div className="accordion-container">
          <IconToggleAccordion as={Card.Header} eventKey="1" largeHeader={this.props.large}>
            {this.props.header}
          </IconToggleAccordion>
          <Accordion.Collapse eventKey="1">
            <Card.Body className={`accordion-body ${this.props.large ? 'accordion-body-large' : ''}`}>
              {this.props.body}
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
    );
  }
}

export default CustomAccordion;
