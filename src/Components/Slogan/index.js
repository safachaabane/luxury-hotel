import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide from "../../Assets/images/slide.jpg"
function Slogan() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
    <div className="Slogan">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slogan;
