import React from "react";
import { storiesOf } from "@storybook/react";

import COMPONENT_NAME from "./COMPONENT_NAME";
import description from "./COMPONENT_NAME.md";

storiesOf("COMPONENT_NAME", module).add("Overview", () => <COMPONENT_NAME />, {
  notes: { markdown: description }
});
