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
/**
 * Component description
 *
 */
import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/**
 * The loading container
 */
const Loading = styled.div``;

/**
 * The main container
 */
const Container = styled.div``;

/**
 * The main class
 */
class Button extends React.Component {
  render() {
    const { loading, className } = this.props;

    if (loading) {
      return <Loading className={className}>Loading ...</Loading>;
    }

    return <Container className={className} />;
  }
}

/**
 * The prop types
 */
Button.propTypes = {
  /**
	 * Component is loading?
	 */
  loading: PropTypes.bool
};

/**
 * Default props
 */
Button.defaultProps = {
  loading: false
};

export default Button;
```

```Javascript
// `Button/Button.stories.js`
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Button from "./Button";
import description from "./Button.md";

storiesOf("Components/Button", module).add("Overview", () => <Button />, {
  info: {
    inline: true,
    text: description
  }
});
```

```Javascript
// `Button/Button.test.js`
import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Button from "./Button";

describe("Button container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Button />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
```

```Javascript
// `Button/index.js`
export { default } from './Button';
```

### Modify & test locally

You can easily fork this repo, modify, test, and publish on npm.

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

## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


### [0.0.2] - 2018-12-11
#### Added
- A CHANGELOG section in README.
#### Changed
- The install instructions in README.

### 0.0.1 - 2018-12-11
#### Added
- Initial release
