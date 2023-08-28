import React from "react";
import ReactDOM from "react-dom/client";
import HorizontalScrollSlider from "horizontal-scroll-slider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HorizontalScrollSlider
      scrollHeight="500vh"
      className="horizontal-scroll-slider"
      header={<h2>Horizontal Scroll Slider Demo 1</h2>}
    >
      <div className="slides">
        {Array.from(Array(15)).map((_, index) => (
          <div key={`slide-${index}`} className="slide">
            {index + 1}
          </div>
        ))}
      </div>
    </HorizontalScrollSlider>
    <HorizontalScrollSlider
      scrollHeight="300vh"
      className="horizontal-scroll-slider"
      header={<h2>Horizontal Scroll Slider Demo 2</h2>}
    >
      <div className="slides">
      <div className="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam facere
        quia, deleniti doloremque corrupti vero nam minima illo saepe eius
        laudantium assumenda commodi delectus molestias debitis perspiciatis
        nostrum excepturi accusamus! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Aliquam facere quia, deleniti doloremque corrupti vero
        nam minima illo saepe eius laudantium assumenda commodi delectus
        molestias debitis perspiciatis nostrum excepturi accusamus! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Aliquam facere quia,
        deleniti doloremque corrupti vero nam minima illo saepe eius laudantium
        assumenda commodi delectus molestias debitis perspiciatis nostrum
        excepturi accusamus! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Aliquam facere quia, deleniti doloremque corrupti vero nam minima
        illo saepe eius laudantium assumenda commodi delectus molestias debitis
        perspiciatis nostrum excepturi accusamus!
      </div></div>
    </HorizontalScrollSlider>
  </React.StrictMode>
);
