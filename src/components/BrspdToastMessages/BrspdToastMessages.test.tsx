import React from "react";
import { render } from "@testing-library/react";

import BrspdToastMessages from "./BrspdToastMessages";

 describe("Accordions", () => {
  test("renders the Button component", () => {
    render(<BrspdToastMessages message="hello world"/>);
  });
}); 