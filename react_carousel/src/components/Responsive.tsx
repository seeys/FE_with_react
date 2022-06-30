import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Responsive = () => {
  return (
    <Carousel infiniteLoop>
      <div
        style={{
          height: 500,
          background: "red",
        }}
      >
        hello
      </div>
      <div
        style={{
          height: 500,
          background: "blue",
        }}
      >
        hello2
      </div>
      <div
        style={{
          height: 500,
          background: "yellow",
        }}
      >
        hello3
      </div>
    </Carousel>
  );
};

export default Responsive;
