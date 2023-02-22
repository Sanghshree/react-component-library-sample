import React from "react";
import { render } from "@testing-library/react";

import MultiSelectField from "./BrspdMultiSelectField";

describe("MultiSelectField", () => {
  test("renders the Button component", () => {
    render(<MultiSelectField label="InputLabel" defaultValue={"Select"}/>);
  });
});