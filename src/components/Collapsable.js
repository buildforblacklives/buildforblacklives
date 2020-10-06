import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

import Plus from '../assets/plus';
import Minus from '../assets/minus';

const Collapsable = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsable = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        className="collapsable-heading"
        id={heading.toLowerCase().replace(/\s/g, '-')}
        onFocus={toggleCollapsable}
        onMouseDown={toggleCollapsable}
      >
        <span xs="auto">{isOpen ? <Minus /> : <Plus />}</span>
        <h4>{heading}</h4>
      </button>
      <Collapse in={isOpen}>
        <div>{children}</div>
      </Collapse>
    </>
  );
};

export default Collapsable;
