import React from "react";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Carousel
        loop
        autoLoop
        autoTime={3000}
        transitionTime={1000}
        direction="row"
      >
        <h1>hello</h1>
        <h2>world</h2>
        <h3>react</h3>
        <h4>fastcampus</h4>
      </Carousel>
      {/* <div>
			  Antd
		  </div>
		  <Antd />
		  <div>
			  Responsive
		  </div>
		  <Responsive />
		  <div>
			  Slick
		  </div>
		  <Slick /> */}
    </div>
  );
}

export default App;
