import React from "react";
import { render } from "@testing-library/react";

import BrspdAlert from "./BrspdAlert";

 describe("Accordions", () => {
  test("renders the Button component", () => {
    render(<BrspdAlert message="hello world"/>);
  });
}); 