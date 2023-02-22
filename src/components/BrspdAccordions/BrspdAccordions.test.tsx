import React from "react";
import { render } from "@testing-library/react";

import BrspdAccordions from "./BrspdAccordions";

 describe("Accordions", () => {
  test("renders the Button component", () => {
    render(<BrspdAccordions label="hello world"/>);
  });
}); 