import React, { useContext } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

import Plus from '../assets/plus';
import Minus from '../assets/minus';
import '../styling/Accordion.css';

class CustomAccordion extends React.Component {
  render() {
    function IconToggleAccordion({ largeHeader, children, eventKey, callback }) {
      const currentEventKey = useContext(AccordionContext);
      const toggleIconOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));
      const isCurrentEventKey = currentEventKey === eventKey;

      return (
        <button
          className={`accordion-header ${largeHeader ? 'accordion-header-large' : ''}`}
          onClick={toggleIconOnClick}
        >
          <span xs="auto">
            {isCurrentEventKey ? (
              <Minus className="accordion-header-icon" />
            ) : (
              <Plus className="accordion-header-icon" />
            )}
          </span>
          {largeHeader ? (
            <h5 className="accordion-header-title">{children}</h5>
          ) : (
            <span className="accordion-header-title">{children}</span>
          )}
        </button>
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
