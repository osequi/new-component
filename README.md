## Create a new React component

Forked from https://github.com/metamn/new-component.

### Usage

Install via NPM:

```bash
# Using Yarn:
$ yarn global add @osequi/new-component

# or, using NPM
$ npm i -g @osequi/new-component
```

Run:

```bash
$ cd PROJECT_DIRECTORY
$ new-component Button
```

### What you'll get

In `src/components/Button`:

```Javascript
// `Button/Button.js`
import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};


/**
 * Displays the component
 */
const Button = props => {
  return <div className="Button">Button</div>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
export { propTypes as ButtonPropTypes, defaultProps as ButtonDefaultProps };
```

```Javascript
// `Button/Button.stories.js`
import React from "react";
import Button from "./Button";
import ApiDoc from "./Button.md";

export default {
  component: Button,
  title: "Button",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Button />;
```

```Markdown
// `Button/Button.md`
# Button
```

```Javascript
// `Button/Button.test.js`
import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

it("has a Button component", () => {
  const { getByText } = render(<Button />);
  expect(getByText("Button")).toBeInTheDocument();
});
```

```Javascript
// `Button/index.js`
export { default, ButtonPropTypes, ButtonDefaultProps } from "./Button";
```

### Modify & test locally

You can easily fork this repository, modify, test and publish on npm.

NOTE: Always start with changing the version number in `package.json` !!

#### Test locally

In this current repo:

```shell
npm pack
```

This will create a file like `new-component@0.0.1.tgz`.

In another folder:

```bash
npm i <path_to_new_component_repo>/new-component@0.0.1.tgz &&
./node_modules/.bin/new-component Button
```

#### Update the changelog

NOTE: Always update the changelog

#### Publish

First push changes to Github. Then:

```bash
npm publish
```

## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [0.2.0] - 2019-11-6

#### Added

- Default tests

#### Changed

- Storybook stories to follow the Component Story Format: https://storybook.js.org/docs/formats/component-story-format/

#### Removed

- `styled-components`, because many times components use another library, like `material-ui`

### [0.1.2] - 2018-08-17

#### Fixed

- Exporting default props

### [0.1.1] - 2018-08-17

#### Changed

- How default props are exported

### [0.1.0] - 2018-07-03

#### Added

- New templates for function components

### [0.0.4] - 2018-12-11

#### Fixed

- Markdown is not run through `prettify()`.

### [0.0.3] - 2018-12-11

#### Added

- Markdown documentation support.

### [0.0.2] - 2018-12-11

#### Added

- A CHANGELOG section in README.

#### Changed

- The install instructions in README.

### 0.0.1 - 2018-12-11

#### Added

- Initial release
