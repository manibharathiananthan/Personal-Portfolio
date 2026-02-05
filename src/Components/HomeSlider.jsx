// src/Components/HomeSlider.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const HomeSlider = () => (
  <div className="my-5">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={slide1}
          alt="Slide 1"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>Fun Project</h5>
          <p>Some cool animation or project preview</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={slide2}
          alt="Slide 2"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>Hobby</h5>
          <p>Learning new things!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 rounded"
          src={slide3}
          alt="Slide 3"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5>Just for Fun</h5>
          <p>Animating life while coding 😎</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default HomeSlider;
