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

You can also install the package locally for a project.

Run:

```bash
$ cd PROJECT_DIRECTORY
$ new-component Button
```

## What you'll get

In `src/components/Button`:

```js
// `Button/Button.tsx`
import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "../../hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Button type.
 * @category Components
 * @example
 */
export type TButton = {} & typeof ButtonDefaultProps;

/**
 * Defines the Button default props.
 * @category Components
 * @example
 */
const ButtonDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Button.
 * @category Components
 * @component
 * @example
 * return <Button />
 */
const Button = (props: TButton) => {
  const { containerKlass } = useStyles(container, props);

  return <div className={cx("Button", containerKlass)}>Button</div>;
};

Button.defaultProps = ButtonDefaultProps;

export default Button;
export { ButtonDefaultProps };
```

```js
// `Button/Button.test.tsx`
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

it("Renders the component", () => {
  const { container } = render(<Button />);
  expect(container.firstChild).not.toBeNull();
});
```

```js
// `Button/index.ts`
export type { TButton } from "./Button";
export { default as Button, ButtonDefaultProps } from "./Button";
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
