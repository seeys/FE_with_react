import React from "react";
import { Carousel } from "antd";

const Antd = () => {
  return (
    <Carousel
      style={{
        width: 500,
      }}
    >
      <div>
        <div
          style={{
            height: "160px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          <img src="https://camo.githubusercontent.com/363242675617648bfbedd1610f89ac28df0f9e1bac8749d83109fafdf8524fff/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667" />
        </div>
      </div>
      <div>
        <div
          style={{
            height: "160px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          fastcampus
        </div>
      </div>
      <div>
        <div
          style={{
            height: "160px",
            color: "#fff",
            lineHeight: "160px",
            textAlign: "center",
            background: "#364d79",
          }}
        >
          react
        </div>
      </div>
    </Carousel>
  );
};

export default Antd;
