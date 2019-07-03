## Create a new React component

Forked from https://github.com/joshwcomeau/new-component.
Added Storybook and basic testing.

### Usage

Install via NPM:

```bash
# Using Yarn:
$ yarn global add @metamn/new-component

# or, using NPM
$ npm i -g @metamn/new-component
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
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const Button = props => {
  return <Container className="Button">Button</Container>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
export { propTypes, defaultProps };
```

```Javascript
// `Button/Button.stories.js`
import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";
import description from "./Button.md";

storiesOf("Button", module).add("Overview", () => <Button />, {
  notes: { markdown: description }
});
```

```Markdown
// `Button/Button.md`
# Button
```

```Javascript
// `Button/index.js`
export { default } from "./Button";
export { propTypes, defaultProps } from "./Button";
```

### Modify & test locally

You can easily fork this repo, modify, test, and publish on npm.

NOTE: Always start with changing the version number in `package.json` !!

#### Test locally

In this current repo:

```shell
npm pack
```

This will create a file like `new-component@0.0.1.tgz`.

In another folder:

```bash
npm i <path_to_new_component_repo>/new-component@0.0.1.tgz
./node_modules/.bin/new-component Button
```

#### Update the changelog

NOTE: Always update the changelog

#### Publish

```bash
npm publish
```

## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
