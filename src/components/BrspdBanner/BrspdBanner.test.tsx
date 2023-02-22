import React from "react";
import { render } from "@testing-library/react";

import BrspdBanner from "./BrspdBanner";

 describe("Accordions", () => {
  test("renders the Button component", () => {
    render(<BrspdBanner message="hello world"/>);
  });
}); 