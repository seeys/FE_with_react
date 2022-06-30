import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3
          style={{
            height: 500,
            background: "red",
          }}
        >
          1
        </h3>
      </div>
      <div>
        <h3
          style={{
            height: 500,
            background: "red",
          }}
        >
          2
        </h3>
      </div>
      <div>
        <h3
          style={{
            height: 500,
            background: "red",
          }}
        >
          3
        </h3>
      </div>
      <div>
        <h3
          style={{
            height: 500,
            background: "red",
          }}
        >
          4
        </h3>
      </div>
    </Slider>
  );
};

export default Slick;
