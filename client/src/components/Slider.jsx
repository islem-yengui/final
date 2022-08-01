import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { renderMatches } from "react-router-dom";
import image5 from "../video/image5.jpeg";
import im33 from "../video/im33.png";
import image6 from "../video/image6.jpeg";
import image2 from "../video/image2.jpeg";
import im05 from "../video/im05.jpeg";
import im28 from "../video/im28.png";
import image3 from "../video/image3.jpeg";

import image004 from "../video/image004.png";
import photo from "../video/photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // width={20}
          // height={1000}
          src={im28}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={1000}
          src={im33}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image004} alt="Third slide" />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;