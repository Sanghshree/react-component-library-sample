import React from "react";
import { render } from "@testing-library/react";
import BrspdSearch from "./BrspdSearch";

describe("Search", () => {
  test("renders the search component", () => {
    render(<BrspdSearch label="Hello world!"/>);
  });
});