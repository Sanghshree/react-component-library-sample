import React from "react";
import { render } from "@testing-library/react";
import InputField from "./BrspdInputField";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<InputField label="Hello world!"/>);
  });
});