import { render } from "@testing-library/react";

import "jest-canvas-mock";
import HorizontalScrollSlider from "../src";

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<HorizontalScrollSlider />);
  });
});
