import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const { images } = props;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {images.map((image) => {
        return (
          <Carousel.Item>
            {image}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export { ControlledCarousel };
