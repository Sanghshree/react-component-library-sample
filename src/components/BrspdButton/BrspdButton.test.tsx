import React from "react";
import { render } from "@testing-library/react";

import BrspdButton from "./BrspdButton";

 describe("Button", () => {
  test("renders the Button component", () => {
    render(<BrspdButton label="Button" />);
  });
}); 