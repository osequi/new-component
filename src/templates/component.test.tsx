import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { COMPONENT_NAME } from "./COMPONENT_NAME";

it("Renders the component", () => {
  const { container } = render(<COMPONENT_NAME />);
  expect(container.firstChild).not.toBeNull();
});
