# horizontal-scroll-slider-package
Customizable horizontal scroll with React and Framer-motion

**[Live Demo](https://ntbaoni28.github.io/horizontal-scroll-slider-package/)**

## Installation:

```bash
npm i horizontal-scroll-slider 
```

or

```bash
yarn add horizontal-scroll-slider
```

## Usage :

Add `HorizontalScrollSlider` to your component:

```jsx
import HorizontalScrollSlider from "horizontal-scroll-slider";
....
<HorizontalScrollSlider
  scrollHeight="500vh"
  header={<h2>Horizontal Scroll Slider Demo</h2>}
>

   //Your custom slides

</HorizontalScrollSlider>
```

****Properties:****

| Property | Description | Type | Required | Default value |
| --- | --- | --- | --- | --- |
| scrollHeight | Scroll range | string | No | 400vh |
| className | Slide container class name | string | No | Undefined |
| children | Slider component | ReactNode | No | Undefined |
| header | This component is above the slider component. | ReactNode | No | Undefined |
| footer | This component is the bottom slider component. | ReactNode | No | Undefined |
| offsetOptions | https://www.framer.com/motion/use-scroll/##scroll-offsets | ScrollOffset | No | ["start start", "end end"] |

## Demo

`index.tsx`

```jsx
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
  </React.StrictMode>
);
```

Example `css`

```css
.horizontal-scroll-slider{
    background: #f2f2f3;
    height: 100vh;
}

.horizontal-scroll-slider h2{
    padding: 40px 10px;
    font-size: 80px;
    text-align: center;
}

.horizontal-scroll-slider .slides{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
}

.horizontal-scroll-slider .slides .slide{
    width: 300px;
    height: 400px;
    margin-right: 20px;
    padding: 20px;
    border: 2px solid #000000;
    background-color: #ffffff;
}

```
