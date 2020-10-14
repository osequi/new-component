# Create a new React component

Forked from https://github.com/metamn/new-component.

## Usage

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

## What you'll get

In `src/components/Button`:

```js
// `Button/Button.js`
import React from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import { useStyles } from "../../hooks";

/**
 * Imports other components and hooks.
 */

/**
 * Defines the prop types.
 */
const propTypes = {};

/**
 * Defines the default props.
 */
const defaultProps = {};

/**
 * Defines the styles.
 */
const container = {
  label: "Container",
};

/**
 * Displays the component.
 * @see Button.md
 */
const Button = (props) => {
  const { containerKlass } = useStyles([container], props);

  return <div className={cx("Button", containerKlass)}>Button</div>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
export { propTypes as ButtonPropTypes, defaultProps as ButtonDefaultProps };
```

```js
// `Button/Button.demo.js`
import React from "react";

/**
 * Imports other components and hooks.
 */
import Button from ".";

/**
 * Displays the Button demo.
 */
const ButtonDemo = (props) => {
  return <Button />;
};

export default ButtonDemo;
```

```js
// `Button/Button.stories.js`
import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
```

```md
// `Button/Button.md`

## Button
```

```js
// `Button/Button.test.js`
import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

it("has a Button component", () => {
  const { getByText } = render(<Button />);
  expect(getByText("Button")).toBeInTheDocument();
});
```

```js
// `Button/index.js`
export { default, ButtonPropTypes, ButtonDefaultProps } from "./Button";

export { default as ButtonDemo } from "./Button.demo";
```

## Modify & test locally

You can easily fork this repository, modify, test and publish on npm.

### Test locally

In this current repository:

```sh
npm pack
```

This will create a file like `new-component@0.0.1.tgz`.

In another folder:

```sh
mkdir test
cd test
npm i <path_to_new_component_repo>/new-component@0.0.1.tgz
mkdir src
mkdir src/components
./node_modules/.bin/new-component Button
```

## Publish

```sh
npm publish --access public # first deploy
unleash -p -d # consecutive deploys
```

## Changelog

Please check [CHANGELOG.md](CHANGELOG.md).

Generated with [Unleash](https://github.com/Netflix/unleash) using [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), [Conventional changelog](https://github.com/conventional-changelog/conventional-changelog) and [Semantic versioning](https://semver.org/).
